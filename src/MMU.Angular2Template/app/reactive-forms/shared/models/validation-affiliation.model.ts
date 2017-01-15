export class ValidationAffiliation {
    constructor(public key: string, public message: string) {
    }

    // readonly SHOULD work for TS 2.0, probably something missing here
    //constructor(public readonly key: string, public readonly message: string) {
    //}
}