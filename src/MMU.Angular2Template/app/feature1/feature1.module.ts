import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { feature1Routing } from "./feature1.routing";

import * as services from "./shared/services/index";
import { Feature1Component } from "./feature1.component";
import * as part1List from "./part1-list/index";
import * as part1 from "./part1/index";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        feature1Routing
    ],
    declarations: [
        part1.Part1Component,
        part1List.Part1ListComponent,
        Feature1Component

    ],
    providers: [
        services.HelloWorldService
    ]
})

export class Feature1Module {
}