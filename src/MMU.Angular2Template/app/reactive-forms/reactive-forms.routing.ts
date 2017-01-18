// External
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Feature
import { ReactiveFormsComponent } from "./reactive-forms.component";

// Feature-Parts
import { SampleFormComponent } from "./sample-form/index";
import { GenericValidationComponent } from "./generic-validation/index";

const feature1Routes: Routes = [
    {
        path: "reactiveForms",
        component: ReactiveFormsComponent,
        children: [
            { path: "", redirectTo: "sampleForm", pathMatch: "full" },
            { path: "sampleForm", component: SampleFormComponent },
            { path: "genericValidation", component: GenericValidationComponent }
        ]
    }
];

export const reactiveFormsRouting = RouterModule.forChild(feature1Routes);