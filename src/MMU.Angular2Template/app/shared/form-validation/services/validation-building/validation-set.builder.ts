import { ValidationError, ValidationSet } from "../../index";
import { ValidationAffiliationBuilder } from "./index";

export class ValidationSetBuilder {
    private validationRuleKey: string;
    private validationErrror: ValidationError;

    public constructor(
        private readonly validationAffiliationBuilder: ValidationAffiliationBuilder,
        private readonly validationSets: ValidationSet[]) {
    }

    public withRuleKey(validationRuleKey: string): ValidationSetBuilder {
        this.validationRuleKey = validationRuleKey;
        return this;
    }

    public withErrorMessage(validationErrorMessage: string): ValidationSetBuilder {
        this.validationErrror = new ValidationError(validationErrorMessage);
        return this;
    }

    public buildValidationSet(): ValidationAffiliationBuilder {
        const validationSet = new ValidationSet(this.validationRuleKey, this.validationErrror);
        this.validationSets.push(validationSet);
        return this.validationAffiliationBuilder;
    }
}