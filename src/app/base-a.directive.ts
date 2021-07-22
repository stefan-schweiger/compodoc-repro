import {
  Directive,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Directive()
export abstract class BaseADirective {
  public baseAProp: string = '';

  @Input()
  public baseAInputProp: string = '';

  @Output()
  public baseAOutputProperty = new EventEmitter<void>();

  constructor(
    public baseAConstructorProp: string = ''
  ) {}
}
