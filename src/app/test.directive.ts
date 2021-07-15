import {
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  Output,
} from '@angular/core';

@Directive({ selector: 'test' })
export class TestDirective {
  /** @internal */
  public internalProp: string = '';

  /** @ignored */
  public ignoredProp: string = '';

  /** @internal */
  @Input()
  public internalInputProp: string = '';

  /** @ignored */
  @Input()
  public ignoredInputProp: string = '';

  /** @internal */
  @Output()
  public internalOutputProperty = new EventEmitter<void>();

  /** @ignore */
  @Output()
  public ignoredOutputProperty = new EventEmitter<void>();

  constructor(
    // @Inject only to because angular compiler needs it
    // the bug still happens without @Inject
    /** @internal */ @Inject('_1') public internalConstructorProp: string = '',
    /** @ignored */ @Inject('_2') public ignoredConstructorProp: string = ''
  ) {}
}
