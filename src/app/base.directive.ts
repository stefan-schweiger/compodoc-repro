import { Directive, EventEmitter, Input, Output } from "@angular/core";

@Directive()
export abstract class BaseDirective {
  /** This WONT be included in the inheriting component */
  @Input() testPropertyInBase = false;
  /** This WONT be included in the inheriting component */
  @Output() testEventInBase = new EventEmitter<void>();
}
