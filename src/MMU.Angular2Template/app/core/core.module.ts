// external
import { NgModule } from "@angular/core";

// core-Services
import { WindowWrapperService } from "./services/index";


@NgModule({
    imports: [
    ],
    declarations: [
    ],
    providers: [
        { provide: WindowWrapperService, useValue: window }
    ]
})


export class CoreModule {
}