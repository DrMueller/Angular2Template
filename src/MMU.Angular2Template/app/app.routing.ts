import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/feature1",
        pathMatch: "full"
    },
    {
        path: "signalrfeature",
        loadChildren: "/app/signalr-feature/signalr-feature.module#SignalrFeatureModule" // lazy loading example
    }
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
