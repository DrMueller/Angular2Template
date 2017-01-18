import { AbstractControl } from "@angular/forms";

export interface IValidationCallback {
    (control: AbstractControl): {
        [key: string]: boolean;
    };
}
