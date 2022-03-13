import { FormGroup } from "@angular/forms";

export class InputValidation {

    passwordValidator(formGroup: FormGroup) {
        if (formGroup.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }
}