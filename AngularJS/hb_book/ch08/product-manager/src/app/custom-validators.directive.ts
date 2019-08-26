import { Directive, Input, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

export const CUSTOM_VALIDATOR: any =   {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CustomValidatorsDirective),
  multi: true
};


@Directive({
  selector: '[pmCustomValidators][ngModel]',
  providers: [CUSTOM_VALIDATOR]
})
export class CustomValidatorsDirective implements Validator {

  validate(control: AbstractControl): { [key: string]: any } {
    return null;
  }


  constructor() { }

}
