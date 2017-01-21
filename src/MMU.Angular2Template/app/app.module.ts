// external
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TabsModule } from "ng2-bootstrap";
import { HttpModule } from "@angular/http";

// app
import { AppComponent } from "./app.component";
import { routing, appRoutingProviders } from "./app.routing";

// core-services
import { CoreModule } from "./core/index";

// domain-features
import { Feature1Module } from "./feature1/index";
import { ReactiveFormsModule } from "./reactive-forms/index";
import { MdTestingModule } from "./md-testing/index";

@NgModule({
    imports: [
        BrowserModule,
        routing,
        Feature1Module,
        ReactiveFormsModule,
        TabsModule.forRoot(),
        HttpModule,
        CoreModule,
        MdTestingModule
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