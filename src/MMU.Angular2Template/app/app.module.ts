import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TabsModule, TabsetConfig, TabsetComponent } from "ng2-bootstrap";

import { AppComponent } from "./app.component";
import { routing, appRoutingProviders } from "./app.routing";

import { Feature1Module } from "./feature1/index"; 
import { SignalrFeatureModule } from "./signalr-feature/index";
import { ReactiveFormsModule } from "./reactive-forms/index";

import * as coreServices from "./core/services/index";


@NgModule({
    imports: [
        BrowserModule,
        routing,
        Feature1Module,
        SignalrFeatureModule,
        ReactiveFormsModule,
        TabsModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        appRoutingProviders,
        { provide: coreServices.WindowWrapperService, useValue: window },
        TabsetConfig,
        TabsetComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}