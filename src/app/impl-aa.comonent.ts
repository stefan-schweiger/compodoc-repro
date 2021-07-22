import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { ImplAComponent } from './impl-a.component';

@Component({
  selector: 'impl-aa',
  template: '<div>Impl AA</div>',
})
export abstract class ImplAAComponent extends ImplAComponent {
  public componentAAProp: string = '';

  @Input()
  public componentAAInputProp: string = '';

  @Output()
  public componentAAOutputProperty = new EventEmitter<void>();

  constructor(@Inject('_') public componentAAConstructorProp: string = '') {
    super('test');
  }
}
