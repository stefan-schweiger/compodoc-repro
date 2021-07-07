import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  template: '',
})
export abstract class BaseComponent {
  /** This will be included in the inheriting component */
  @Input() testPropertyInBase = false;
  /** This will be included in the inheriting component */
  @Output() testEventInBase = new EventEmitter<void>();
}
