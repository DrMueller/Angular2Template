import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

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
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        appRoutingProviders,
        { provide: coreServices.WindowWrapperService, useValue: window }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}