import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TabsModule } from "ng2-bootstrap";
import { HttpModule } from "@angular/http";

import { ValidationAffiliation, ValidationDispatcherService, ValidationError, ValidationSet } from "./index";


@NgModule({
    exports: [
        ValidationAffiliation,
        //ValidationDispatcherService,
        ValidationError,
        ValidationSet
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        ValidationAffiliation, ValidationDispatcherService, ValidationError, ValidationSet
    ],
    providers: [
    ]
})

export class FormValidationModule {
}