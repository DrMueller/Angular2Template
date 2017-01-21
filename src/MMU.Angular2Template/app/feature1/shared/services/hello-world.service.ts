import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { HelloWorld } from "../models/hello-world.model";
import { Observable } from "rxjs/Observable";

import { HttpService } from "app/core/index";


@Injectable()
export class HelloWorldService {
    constructor(private httpService: HttpService) { }

    getHelloWorlds(): Promise<HelloWorld[]> {
        const url = "api/HelloWorld/helloWorlds";
        return this.httpService.get<HelloWorld[]>(url);
    }

    throwException(): Promise<HelloWorld[]> {
        const url = "api/HelloWorld/exception";
        return this.httpService.get<HelloWorld[]>(url);
    }
}