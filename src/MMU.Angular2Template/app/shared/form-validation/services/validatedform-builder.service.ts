import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

import { ValidatedControl } from "../index";

@Injectable()
export class ValidatedFormBuilderService {
    public constructor(private formBuilder: FormBuilder) {
    }

    public createFormGroup(validatedControls: ValidatedControl[]): FormGroup {
        let tra = this.formBuilder.group(validatedControls);
        return tra;
    }
}