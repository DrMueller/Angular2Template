// External
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule as ngRxForms, FormBuilder } from "@angular/forms";
import { AlertModule, DropdownModule, ProgressbarModule, TabsModule } from "ng2-bootstrap";

// Shred 
import { SharedModule, ValidationDispatcherService } from "app/shared/index";

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
        //SharedModule
    ],
    declarations: [
        SampleFormComponent,
        ReactiveFormsComponent,
        GenericValidationComponent
    ],
    providers: [
        FormBuilder,
        ValidationDispatcherService
    ]
})

export class ReactiveFormsModule {
}