import {IValidationCallback } from "../callbacks/index";

export class ValidatedControl {
    public constructor(
        public readonly controlName: string,
        public readonly validations: IValidationCallback[]) {
    }
}