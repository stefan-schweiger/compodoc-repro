import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
  template: '',
})
export class InheritCompComponent extends BaseComponent {
  @Input() testPropertyInComponent = false;
  @Output() testEventInComponent = new EventEmitter<void>();
}
