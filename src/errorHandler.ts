export class ErrorHandler extends Error {
    constructor(public message: string, public errorKey: string) {
        super(message);
        this.name = errorKey;
    }
}
