import { ValidationError } from "./index";

export class ValidationSet {
    public constructor(
        public readonly validationRuleKey: string,
        public readonly validationErrror: ValidationError
    ) { }
}