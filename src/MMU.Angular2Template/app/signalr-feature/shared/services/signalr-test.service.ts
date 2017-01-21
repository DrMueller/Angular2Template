import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";

import { HttpService, ContentType } from "app/core/index";

@Injectable()
export class SignalrTestService {
    constructor(private httpService: HttpService) { }

    public publishSomeSignalr(): void {
        const url = "api/HelloSignalr/publishSomeSignalr";
        this.httpService.post(url, null, ContentType.ApplicationJson)
            .then((onFullfilled: any) => {
                // Not Needed
            })
            .catch((reason: any) => {
                // Not Needed
            });
    }
}