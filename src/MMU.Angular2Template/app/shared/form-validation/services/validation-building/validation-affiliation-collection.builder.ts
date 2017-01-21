import { ValidationAffiliationCollection  } from "../../index";
import { ValidationAffiliationBuilder } from "./index";

export class ValidationAffiliationCollectionBuilder {
    private readonly validationAffiliations = new ValidationAffiliationCollection();

    public startBuildingAffiliation(controlName: string): ValidationAffiliationBuilder {
        const affiliationBuilder = new ValidationAffiliationBuilder(this, this.validationAffiliations, controlName);
        return affiliationBuilder;
    }

    public buildCollection(): ValidationAffiliationCollection {
        return this.validationAffiliations;
    }
}