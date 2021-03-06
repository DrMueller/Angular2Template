﻿// external
import { AbstractControl, FormGroup } from "@angular/forms";

// shared-feature
import { ValidationAffiliation, ValidationSet, IControlValidationErrors, ValidationErrorCollection } from "../index";

export class ValidationDispatcherService {
    private validationAffiliations: ValidationAffiliation[];

    public initialize(validationAffiliations: ValidationAffiliation[]): void {
        this.validationAffiliations = validationAffiliations;
    }

    public getValidationErrors(formGroup: FormGroup): IControlValidationErrors {
        const result: IControlValidationErrors = {};

        for (let controlName in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(controlName)) {
                result[controlName] = this.getControlValidationErrors(formGroup, controlName);
            }
        }

        return result;
    }

    private getControlValidationErrors(formGroup: FormGroup, controlName: string): ValidationErrorCollection {
        const control = formGroup.controls[controlName];

        const controlErorrKeys = this.getControlErrorKeys(control);
        if (controlErorrKeys) {
            const validationAffiliation = this.validationAffiliations.find(f => f.controlName === controlName);
            const validationErrors = validationAffiliation.validationSets.filter(f => controlErorrKeys.some(rk => rk === f.validationRuleKey)).map((v: ValidationSet) => {
                return v.validationErrror;
            });

            return  validationErrors;
        } else {
            return null;
        }
    }

    private getControlErrorKeys(control: AbstractControl): string[] {
    if ((control.touched || control.dirty) && !control.valid) {
        const controlErrors = Object.keys(control.errors);
        return controlErrors;
    };
}
}