import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule as ngRxForms, FormBuilder } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { reactiveFormsRouting } from "./reactive-forms.routing";
import { SampleFormComponent } from "./sample-form/index";
import { ReactiveFormsComponent } from "./reactive-forms.component"; 

@NgModule({
    imports: [
        CommonModule,
        ngRxForms,
        HttpModule,
        reactiveFormsRouting
    ],
    declarations: [
        SampleFormComponent,
        ReactiveFormsComponent
    ],
    providers: [
        FormBuilder
    ]
})

export class ReactiveFormsModule {
}