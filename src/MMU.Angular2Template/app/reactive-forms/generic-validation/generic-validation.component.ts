// External
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";

// Shared 
import { IControlValidationErrors, ValidationSet, ValidationAffiliation, ValidationError, ValidationDispatcherService, ValidationBuildingFactory } from "app/shared/form-validation/index";

// Feature
import { Customer } from "../shared/models/index";

@Component({
    moduleId: module.id,
    styleUrls: ["./generic-validation.component.css"],
    templateUrl: "./generic-validation.component.html",
    providers: [ValidationDispatcherService]
})

export class GenericValidationComponent implements OnInit {
    public controlValidationErrors: IControlValidationErrors = {};
    public individualForm: FormGroup;

    public constructor(
        private formBuilder: FormBuilder,
        private validationDispatcher: ValidationDispatcherService, 
        private validationBuildingFactory: ValidationBuildingFactory) {
    }

    public ngOnInit(): void {
        this.initializeValidationDefinition();
        this.buildForm();
        this.initializeFormWatcher();
    }

    private initializeFormWatcher(): void {
        this.individualForm.valueChanges.subscribe(() => {
            this.controlValidationErrors = this.validationDispatcher.getValidationErrors(this.individualForm);
        });
    }
   
    private buildForm(): void {
        this.individualForm = this.formBuilder.group({
            firstNameControl: ["", [Validators.required, Validators.minLength(5)]],
            lastNameControl: ["Müller", [Validators.required, Validators.minLength(10), Validators.maxLength(3)]]
        });
    }

    private initializeValidationDefinition(): void {
        const validationBuilder = this.validationBuildingFactory.createBuilder();
        const validationCollection =
        validationBuilder.
            startBuildingAffiliation("firstNameControl")
                .startBuldingSet()
                    .withRuleKey("required")
                    .withErrorMessage("First name is required.")
                .buildValidationSet()
                .startBuldingSet()
                    .withRuleKey("minlength")
                    .withErrorMessage("The first name has to be at least 5 characters long.")
                .buildValidationSet()
            .buildAffiliation()
            .startBuildingAffiliation("lastNameControl")
                .startBuldingSet()
                    .withRuleKey("required")
                    .withErrorMessage("First name is required.")
                .buildValidationSet()
                .startBuldingSet()
                    .withRuleKey("minlength")
                    .withErrorMessage("The last name has to be at least 10 characters long.")
                .buildValidationSet()
                .startBuldingSet()
                    .withRuleKey("maxlength")
                    .withErrorMessage("The last name has to be less than 3 characters long.")
                .buildValidationSet()
            .buildAffiliation()
        .buildCollection();

        this.validationDispatcher.initialize(validationCollection);
    };
}