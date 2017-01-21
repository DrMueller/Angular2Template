import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { ContentType } from "./index";

@Injectable()
export class HttpService {
    constructor(private http: Http) { }

    public get<T>(url: string): Promise<T> {
        return this.processResponse(this.http.get(url));
    }

    public post<T>(url: string, body: any, contentType: ContentType): Promise<T> {
        const headers = new Headers();
        headers.append("Content-Type", this.mapContentType(contentType));

        const requestoptions = new RequestOptions({
            headers: headers
        });

        return this.processResponse(this.http.post(url, body, requestoptions));
    }

    private processResponse<T>(response: Observable<Response>): Promise<T> {
        return response.map(this.extractJson)
            .toPromise()
            .catch(this.handleError);
    }

    private mapContentType(contentType: ContentType): string {
        switch (contentType) {
            case ContentType.ApplicationJson:
                return "application/json";
            default:
                throw new RangeError(contentType.toString() + " is not recognized");
        }
    }

    private extractJson(res: Response) {
        const body = res.json();
        return body;
    }

    private extractArray(res: Response) {
        const body = res.json();
        return body.data || {};
    }

    private handleError(error: any) {
        // Low Level technical logging
        // We pass the error via promise to give the client the possibility to show a nice message
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || "";
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}