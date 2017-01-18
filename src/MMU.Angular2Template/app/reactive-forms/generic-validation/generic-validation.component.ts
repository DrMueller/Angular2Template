import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { Customer } from "../shared/models/index";

import { ControlValidationAffiliation, ValidationErorrsContainer, IValidationCallback, ValidatedControl, ValidatedFormBuilderService } from "app/shared/form-validation/index";

@Component({
    moduleId: module.id,
    styleUrls: ["./generic-validation.component.css"],
    templateUrl: "./generic-validation.component.html"
})

export class GenericValidationComponent implements OnInit {

    public constructor(private formBuilder: ValidatedFormBuilderService) {
    }

    public individualForm: FormGroup;

    public ngOnInit(): void {
        this.buildForm();
    }


    private buildForm(): void {
        let tra = new Array<ValidatedControl>();
        debugger;
        let validatations: IValidationCallback[] = [
            Validators.required,
            Validators.minLength(1)
        ];

        let test = new ValidatedControl('test', validatations);

        let arr: ValidatedControl[] = [
            test
        ];

        this.formBuilder.createFormGroup(arr);
    }
}