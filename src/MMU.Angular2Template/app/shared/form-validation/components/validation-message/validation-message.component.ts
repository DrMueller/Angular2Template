// External
import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { ValidationErrorCollection } from "../../index";

@Component({
    moduleId: module.id,
    selector: "validation-message",
    styleUrls: ["./validation-message.component.css"],
    templateUrl: "./validation-message.component.html"
})

export class ValidationMessageComponent {
    @Input() public validationErrorCollection: ValidationErrorCollection;
}