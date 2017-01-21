// external
import { NgModule } from "@angular/core";

// core-services
import { WindowWrapperService } from "./window-wrapping/index";
import { HttpService } from "./http/index";


@NgModule({
    imports: [
    ],
    declarations: [
    ],
    providers: [
        { provide: WindowWrapperService, useValue: window },
        HttpService
    ]
})


export class CoreModule {
}