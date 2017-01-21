import { ValidationErrorCollection } from "../models/index";

export interface IControlValidationErrors {
    [controlName: string]: ValidationErrorCollection;
}