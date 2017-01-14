import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { routing, appRoutingProviders } from "./app.routing";

import * as feature1 from "./feature1/index"; 

@NgModule({
    imports: [
        BrowserModule,
        routing,
        feature1.Feature1Module
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}