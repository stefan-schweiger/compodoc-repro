import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { BaseADirective } from './base-a.directive';

@Component({
    selector: 'impl-a',
    template: '<div>Impl A</div>'
})
export abstract class ImplAComponent extends BaseADirective {
  public componentAProp: string = '';

  @Input()
  public componentAInputProp: string = '';

  @Output()
  public componentAOutputProperty = new EventEmitter<void>();

  constructor(@Inject('_') public componentAConstructorProp: string = '') {
    super('test');
  }
}
