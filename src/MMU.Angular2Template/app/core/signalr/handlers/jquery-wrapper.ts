export class JqueryWrapper {
    public static get $(): any {
        const w: any = window;
        return w.$;
    }
}