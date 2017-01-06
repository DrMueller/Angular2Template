import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import * as c from "./index";


import { feature1Routing } from "./feature1.routing";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        feature1Routing
    ],
    declarations: [
        c.Part1Component,
        c.Part1ListComponent,
        c.Feature1Component
    ],
    providers: [

    ]
})
export class Feature1Module {
}