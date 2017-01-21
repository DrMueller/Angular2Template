import { ValidationAffiliationCollectionBuilder } from "./validation-building/index";

export class ValidationBuildingFactory {
    public createBuilder(): ValidationAffiliationCollectionBuilder {
        return new ValidationAffiliationCollectionBuilder();
    }
}