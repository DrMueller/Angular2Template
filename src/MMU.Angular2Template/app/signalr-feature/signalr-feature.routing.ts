﻿import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SignalrFeatureComponent } from "./signalr-feature.component";

import { SignalrTestComponent } from "./hello-signalr/index";

const feature1Routes: Routes = [
    {
        path: "",
        component: SignalrFeatureComponent,
        children: [
            { path: "", redirectTo: "helloSignalr", pathMatch: "full" },
            { path: "helloSignalr", component: SignalrTestComponent }
        ]
    }
];

export const signalrFeatureRouting = RouterModule.forChild(feature1Routes);