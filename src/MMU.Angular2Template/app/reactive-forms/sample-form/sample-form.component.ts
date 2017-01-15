import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from "@angular/forms"; 
import { Customer } from "../shared/models/index";

import { ValidationAffiliation } from "../shared/models/index";

@Component({
    moduleId: module.id,
    templateUrl: "./sample-form.component.html"
})

export class SampleFormComponent implements OnInit {
    public customer: Customer;
    public customerForm: FormGroup;

    public emailControlValidationMessage: string;
    public firstNameControlValidationMessage: string;
    public middleNameControlValidationMessage: string;

    private validationAffiliations: ValidationAffiliation[] = [
        new ValidationAffiliation("required", "Please enter a value."),
        new ValidationAffiliation("pattern", "Please enter an valid value."),
        new ValidationAffiliation("minlength", "Please enter the minimum amount of characters."),
        new ValidationAffiliation("maxlength", "Please enter the maximum amount of characters."),
        new ValidationAffiliation("stringcheck", "Please enter the correct stringvalue.")
        ];

    public constructor(private formBuilder: FormBuilder) {
        this.customer = new Customer();
    }

    public save(): void {
        console.log(this.customerForm);
    }

    // setValue requires a value provided for each formControl
    public setValueFromComponent(): void { 
        this.customerForm.setValue({
            firstNameControl: "Hans",
            middleNameControl: "Peter"
        });
    }

    // patchValue can set a single Control's value
    public patchValueFromComponent(): void {
        this.customerForm.patchValue({
            firstNameControl: "Ruedi"
        });
    }

    public ngOnInit(): void {
        this.buildFormWithFormBuilder();
        this.initializeFormWatchers();
    }

    private buildFormWithFormBuilder() {
        this.customerForm = this.formBuilder.group({
            firstNameControl: ["Matthias", [Validators.required, Validators.minLength(5)]],
            middleNameControl: ["", [Validators.required, Validators.maxLength(5), this.stringValidator("Test")]],
            emailControl: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+")]],
            disabledControl: { value :"Disabled", disabled: true }
        });
    }

    private initializeFormWatchers() {
        const emailControl = this.customerForm.get('emailControl');
        emailControl.valueChanges.subscribe((value: any) => {
            this.emailControlValidationMessage = this.validateControlAndCreateMessage(emailControl);
        });

        const firstNameControl = this.customerForm.get('firstNameControl');
        firstNameControl.valueChanges.subscribe((value: any) => {
            this.firstNameControlValidationMessage = this.validateControlAndCreateMessage(firstNameControl);
        });

        const middleNameControl = this.customerForm.get('middleNameControl');

        // Debounce is a reactive extension, passing the data to the subscriber only after the specified amount of time
        middleNameControl.valueChanges.debounceTime(1000).subscribe((value: any) => {
            this.middleNameControlValidationMessage = this.validateControlAndCreateMessage(middleNameControl);
        });
    }

    // Custom validation factory with parameters we can check, in the example just a string to compare to the value
    private stringValidator(check: string): ValidatorFn {
        return (control: AbstractControl) => {
            if (control.value === check) {
                return null;
            }

            return { "stringcheck": false };
        };
    }


    private validateControlAndCreateMessage(control: AbstractControl) : string {
        let result = "";
        if ((control.touched || control.dirty) && !control.valid) {
            const controlErrors = Object.keys(control.errors);
            const errorMessages = controlErrors.map(value => {
                return this.validationAffiliations.find(f => f.key === value).message;
            });

            result = errorMessages.join(" ");
        };

        return result;
    }
}