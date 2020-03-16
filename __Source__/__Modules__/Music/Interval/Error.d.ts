declare const _Error: ErrorConstructor;
export declare namespace Interval {
    namespace Error {
        class InvalidValue extends _Error {
            constructor();
        }
        class NotEnoughValues extends _Error {
            constructor(functionName: string);
        }
        class InvalidResult extends _Error {
            constructor(functionName: string, sum: number);
        }
    }
}
export {};
