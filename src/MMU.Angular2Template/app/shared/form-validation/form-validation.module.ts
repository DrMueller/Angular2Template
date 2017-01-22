// external
import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { ReactiveFormsModule as ngRxForms, FormBuilder } from "@angular/forms";

// components
// TODO: Barrel doesn't work here for some reason, check bacck on GitHub issues
import { ValidationMessageComponent } from "./components/validation-message/validation-message.component";

// services
import { ValidationBuildingFactory } from "./services/index";


@NgModule({
    exports: [
        ngRxForms,
        ValidationMessageComponent
    ],
    imports: [
        CommonModule
    ],
    declarations: [
        ValidationMessageComponent
    ],
    providers: [
        ValidationBuildingFactory // TODO: Not good idea to provide on shared-module, check back best practices
    ]
})

export class FormValidationModule {
}