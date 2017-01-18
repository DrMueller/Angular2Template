// Before you even think moaning about this name, come up with a better one...
export class ObjectDefinitionHandler {
    public static checkifNullOrUndefined(object: any): boolean {
        const nullOrEmpty = (object === null || typeof object === "undefined");
        if (nullOrEmpty) {
            return false;
        }

        return true;
    }   
}