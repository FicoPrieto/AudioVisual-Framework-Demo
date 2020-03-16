import { Interval as ErrorContainer } from "./Error";
import { Note } from "../Note/__Main__";
import { NoteName, MidiValue } from "../Note/Types";
export declare class Interval {
    static Error: typeof ErrorContainer.Error;
    readonly relativeValue: number;
    readonly absoluteValue: number;
    readonly shortName: string;
    readonly longName: string;
    readonly shortType: string;
    readonly longType: string;
    constructor(absoluteValue: number);
    degree(root: (Note | NoteName | MidiValue)): any;
    static add(...intervals: (Interval | number)[]): Interval;
    static subtract(...intervals: (Interval | number)[]): Interval;
}
export declare namespace Interval {
    const P1: Interval, d2: Interval, A1: Interval, m2: Interval, M2: Interval, d3: Interval, A2: Interval, m3: Interval, M3: Interval, d4: Interval, A3: Interval, P4: Interval, A4: Interval, d5: Interval, P5: Interval, d6: Interval, A5: Interval, m6: Interval, M6: Interval, d7: Interval, A6: Interval, m7: Interval, M7: Interval, d8: Interval, A7: Interval, P8: Interval, d9: Interval, A8: Interval, m9: Interval, M9: Interval, d10: Interval, A9: Interval, m10: Interval, M10: Interval, d11: Interval, A10: Interval, P11: Interval, A11: Interval, d12: Interval, P12: Interval, d13: Interval, A12: Interval, m13: Interval, M13: Interval, d14: Interval, A13: Interval, m14: Interval, M14: Interval, d15: Interval, A14: Interval, P15: Interval;
}
export declare namespace _Interval {
    type IntervalValue = (Interval | number);
    function construct_From_Data({ shortType, relativeValue, absoluteValue }: {
        shortType: string;
        relativeValue: number;
        absoluteValue: number;
    }): Interval;
    function ensure_Interval(interval: IntervalValue): Interval;
}
