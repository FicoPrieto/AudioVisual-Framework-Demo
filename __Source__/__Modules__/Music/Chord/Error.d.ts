declare const _Error: ErrorConstructor;
export declare namespace Chord {
    namespace Error {
        class NotEnoughValues extends _Error {
            constructor();
        }
        class InvalidNoteIndex extends _Error {
            constructor(functionName: string, index: number);
        }
    }
}
export {};
