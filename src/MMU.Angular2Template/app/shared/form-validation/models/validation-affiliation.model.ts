import { ValidationSet } from "./index";

export class ValidationAffiliation {
    public constructor(
        public readonly controlName: string,
        public readonly validationSets: ValidationSet[]) {
    }
}