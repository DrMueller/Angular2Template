import { ObjectDefinitionHandler } from "app/core/handlers/index"; // cool

export class ValidationErorrsContainer {
    constructor(public readonly validationErrors: string[]) {
    }

    public get hasValidationErrors(): boolean {
        if (ObjectDefinitionHandler.checkifNullOrUndefined(this.validationErrors)) {
            return false;
        }

        return this.validationErrors.length > 0;
    }   
}
