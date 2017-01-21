import { ValidationAffiliation, ValidationSet } from "../../index";
import { ValidationSetBuilder, ValidationAffiliationCollectionBuilder } from "./index";

export class ValidationAffiliationBuilder {
    private readonly validationSets = new Array<ValidationSet>();

    public startBuldingSet(): ValidationSetBuilder {
        const validationSetBuilder = new ValidationSetBuilder(this, this.validationSets);
        return validationSetBuilder;
    }

    public constructor(
        private colBuilder: ValidationAffiliationCollectionBuilder,
        private affiliations: ValidationAffiliation[],
        private controlName: string) {
    }

    public buildAffiliation(): ValidationAffiliationCollectionBuilder {
        let affiliation = new ValidationAffiliation(this.controlName, this.validationSets);
        this.affiliations.push(affiliation);

        return this.colBuilder;
    }
}