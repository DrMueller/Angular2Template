import { ChannelEvent } from "../models/index";
import { Subject } from "rxjs/Subject";

export class ChannelSubject {
    channel: string;
    subject: Subject<ChannelEvent>;
}
