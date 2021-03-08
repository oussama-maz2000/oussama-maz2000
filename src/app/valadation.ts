import { AbstractControl, ValidationErrors } from '@angular/forms';

export class TextValidator {
  static noSpace(control: AbstractControl): ValidationErrors | null {
    //if our control.value have space
    if ((control.value as String).indexOf(' ') != -1) {
      return { noSpace: true };
    }
    // if our control value donsn't have spase else {
    return null;
  }
}
