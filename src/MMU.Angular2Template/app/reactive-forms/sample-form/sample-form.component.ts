import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from "@angular/forms"; 
import { Customer } from "../shared/models/index";

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

    public constructor(private formBuilder: FormBuilder) {
        this.customer = new Customer();
    }

    public save(): void {
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
    }

    private buildFormWithFormBuilder() {
        this.customerForm = this.formBuilder.group({
            firstNameControl: "Matthias",
            middleNameControl: "",
            emailControl: "",
            disabledControl: { value :"Disabled", disabled: true }
        });
    }
}