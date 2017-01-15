import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ReactiveFormsComponent } from "./reactive-forms.component";
import { SampleFormComponent } from "./sample-form/index";

const feature1Routes: Routes = [
    {
        path: "reactiveForms",
        component: ReactiveFormsComponent,
        children: [
            { path: "", redirectTo: "sampleForm", pathMatch: "full" },
            { path: "sampleForm", component: SampleFormComponent }
        ]
    }
];

export const reactiveFormsRouting = RouterModule.forChild(feature1Routes);