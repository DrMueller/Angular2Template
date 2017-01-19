// External
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";

// Feature
import { Customer } from "../shared/models/index";

import { ValidationSet, ValidationAffiliation, ValidationError, ValidationDispatcherService } from "app/shared/index";

@Component({
    moduleId: module.id,
    styleUrls: ["./generic-validation.component.css"],
    templateUrl: "./generic-validation.component.html"
})


export class GenericValidationComponent implements OnInit {

    // At the moment, Typescript doesnt have some cool Dictionary-Type
    public brokenValidations: { [key: string]: ValidationError[] } = {};
    public individualForm: FormGroup;

    public constructor(private formBuilder: FormBuilder, private validationDispatcher: ValidationDispatcherService) {
    }

    public ngOnInit(): void {
        this.initializeValidationDefinition();
        this.buildForm();
        this.initializeFormWatcher();
    }

    private initializeFormWatcher(): void {
        this.individualForm.valueChanges.subscribe(() => {
            this.brokenValidations = this.validationDispatcher.getValidationErrors(this.individualForm);
        });
    }
   
    private buildForm(): void {
        this.individualForm = this.formBuilder.group({
            firstNameControl: ["", [Validators.required, Validators.minLength(5)]],
            lastNameControl: ["Müller", [Validators.required, Validators.minLength(10), Validators.maxLength(3)]]
        });
    }

    private initializeValidationDefinition(): void {
        let validationAffiliations: ValidationAffiliation[] = [
            new ValidationAffiliation("firstNameControl", [
                new ValidationSet("required", new ValidationError("First name is required.")),
                new ValidationSet("minlength", new ValidationError("The first name has to be at least 5 characters long."))
            ]),
            new ValidationAffiliation("lastNameControl", [
                new ValidationSet("required", new ValidationError("First name is required.")),
                new ValidationSet("minlength", new ValidationError("The last name has to be at least 10 characters long.")),
                new ValidationSet("maxlength", new ValidationError("The last name has to be less than 3 characters long."))
            ])
        ];

        this.validationDispatcher.initialize(validationAffiliations);
    };
}