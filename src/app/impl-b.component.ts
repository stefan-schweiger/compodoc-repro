import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { BaseBDirective } from './base-b.directive';

@Component({
  selector: 'impl-a',
  template: '<div>Impl A</div>',
})
export abstract class ImplBComponent extends BaseBDirective {
  public componentBProp: string = '';

  @Input()
  public componentBInputProp: string = '';

  @Output()
  public componentBOutputProperty = new EventEmitter<void>();

  constructor(@Inject('_') public componentBConstructorProp: string = '') {
    super('test');
  }
}
