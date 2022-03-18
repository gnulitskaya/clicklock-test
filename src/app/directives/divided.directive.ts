//Defining custom validators

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dividedNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const divided = control.value % 3 === 0;
    return divided ? null : {dividedName: {value: control.value}};
  };
}
