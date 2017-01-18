export class ControlValidationAffiliation {
    constructor(
        public readonly controlName: string,
        public readonly ruleKey: string,
        public readonly validationMessage: string
    ) { }
}
