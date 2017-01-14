import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import * as current from "./index";

import { Feature1Component } from "./feature1.component";
import * as part1List from "./part1-list/index";

const feature1Routes: Routes = [
    {
        path: "feature1",
        component: Feature1Component,
        children: [
            { path: "", redirectTo: "part1list", pathMatch: "full" },
            { path: "part1list", component: part1List.Part1ListComponent }
        ]
    }
];

export const feature1Routing = RouterModule.forChild(feature1Routes);