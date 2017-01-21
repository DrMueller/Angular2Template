// External
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule as ngRxForms, FormBuilder } from "@angular/forms";
import { AlertModule, DropdownModule, ProgressbarModule, TabsModule } from "ng2-bootstrap";

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
        ngRxForms,
        reactiveFormsRouting,
        AlertModule.forRoot(),
        ProgressbarModule.forRoot(),
        TabsModule,
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