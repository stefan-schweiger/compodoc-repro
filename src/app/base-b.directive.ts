import {
  Directive,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { BaseADirective } from './base-a.directive';

@Directive()
export abstract class BaseBDirective extends BaseADirective {
  public baseBProp: string = '';

  @Input()
  public baseBInputProp: string = '';

  @Output()
  public baseBOutputProperty = new EventEmitter<void>();

  constructor(public baseBConstructorProp: string = '') {
    super('test');
  }
}
