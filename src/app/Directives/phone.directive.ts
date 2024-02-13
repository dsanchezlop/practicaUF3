import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[validatePhone][formControlName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PhoneDirective),
      multi: true
    }
  ]
})
export class PhoneDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const valid = /^(6\d{8}|93\d{7})$/.test(value);;
    return valid ? null : { invalidPhone: true };
  }
}