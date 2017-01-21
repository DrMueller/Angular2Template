import { Component, OnInit } from "@angular/core";

import { ChannelConfig, ChannelEvent, ConnectionState, SignalrChannelService } from "app/core/signalr/index";

import * as services from "../shared/services/index";

@Component({
    moduleId: module.id,
    templateUrl: "./hello-signalr.component.html"
})

export class SignalrTestComponent implements OnInit {
    private CHANNEL_NAME = "HelloSignalrTesting"; // The Channel has to be defined on the Server-Side (atm on the Controller) as well

    private connectionState: string;
    private channelEvents: ChannelEvent[] = [];

    public constructor(private channelService: SignalrChannelService, private signalrTestService: services.SignalrTestService) {
    }

    public ngOnInit(): void {
        this.initializeChannelService();
        this.channelService.start();
    }

    private publishSomeSignalr(): void {
        this.signalrTestService.publishSomeSignalr();
    }

    private initializeChannelService(): void {
        this.channelService.connectionState$
            .subscribe(
            (next: ConnectionState) => {
                this.connectionState = ConnectionState[next];
            },
            (error: any) => {
                console.error("errors$ error", error);
            }
            );

        this.channelService.error$.subscribe(
            (error: any) => { console.warn(error); },
            (error: any) => { console.error("errors$ error", error); }
        );

        this.channelService.sub(this.CHANNEL_NAME)
            .subscribe(
            (channelEvent: ChannelEvent) => {
                this.channelEvents.push(channelEvent);
            },
            (error: any) => {
                console.warn("Attempt to join channel failed!", error);
            }
            );

        this.channelService.starting$.subscribe(
            () => { console.log("signalr service has been started"); },
            () => { console.warn("signalr service failed to start!"); }
        );
    }
}