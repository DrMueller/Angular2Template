// external
import { NgModule } from "@angular/core";

// core-services
import { SignalrChannelService } from "./signalr/index";
import { HttpService } from "./http/index";

@NgModule({
    providers: [
        HttpService,
        SignalrChannelService
    ]
})


export class CoreModule {
}