import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[validateUsername][formControlName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UsernameDirective),
      multi: true
    }
  ]
})
export class UsernameDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const valid = /^[a-zA-Z]{6,}$/.test(value);
    return valid ? null : { invalidUsername: true };
  }
}