﻿import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { signalrFeatureRouting } from "./signalr-feature.routing";
import { SignalrFeatureComponent } from "./signalr-feature.component";

import * as services from "./shared/services/index";
import * as helloSignalr from "./hello-signalr/index";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        signalrFeatureRouting
    ],
    declarations: [
        helloSignalr.SignalrTestComponent,
        SignalrFeatureComponent
    ],
    providers: [
        services.SignalrTestService
    ]
})

export class SignalrFeatureModule {
}