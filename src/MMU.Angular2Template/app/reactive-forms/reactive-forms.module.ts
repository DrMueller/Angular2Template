// External
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Shared
import { FormValidationModule } from "app/shared/form-validation/index";

// Feature
import { reactiveFormsRouting } from "./reactive-forms.routing";
import { ReactiveFormsComponent } from "./reactive-forms.component";

// Feature-Parts
import { SampleFormComponent } from "./sample-form/index";
import { GenericValidationComponent } from "./generic-validation/index";

@NgModule({
    imports: [
        CommonModule,
        reactiveFormsRouting,
        FormValidationModule
    ],
    declarations: [
        SampleFormComponent,
        ReactiveFormsComponent,
        GenericValidationComponent
    ]
})

export class ReactiveFormsModule {
}