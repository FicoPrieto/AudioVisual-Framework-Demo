declare const _Error: ErrorConstructor;
export declare namespace Note {
    namespace Error {
        class InvalidDuration extends _Error {
            constructor(value: string);
        }
        class InvalidResult extends _Error {
            constructor(functionName: string, midiValue: number);
        }
    }
}
export {};
