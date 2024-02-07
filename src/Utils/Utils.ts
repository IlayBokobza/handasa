export class Utils {
    static validateJSON(json: string) {
        try {
            JSON.parse(json);
        } catch (e) {
            return false;
        }
        return true;
    }
}