﻿import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/feature1",
        pathMatch: "full"
    }
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);