import { Interval } from "./__Main__";
export default class {
    static readonly ShortType_To_LongType: {
        P: string;
        m: string;
        M: string;
        d: string;
        A: string;
    };
    static readonly ShortType_To_RelativeOffset: {
        P: number;
        m: number;
        M: number;
        d: number;
        A: number;
    };
    static readonly AbsoluteValue_To_LongName: {
        0: (octave: number, relativeName_Value: number) => string;
        1: (octave: number, relativeName_Value: number) => string;
        2: (octave: number, relativeName_Value: number) => string;
        3: (octave: number, relativeName_Value: number) => string;
        4: (octave: number, relativeName_Value: number) => string;
        5: (octave: number, relativeName_Value: number) => string;
        6: (octave: number, relativeName_Value: number) => string;
        7: (octave: number, relativeName_Value: number) => string;
        8: (octave: number, relativeName_Value: number) => string;
        9: (octave: number, relativeName_Value: number) => string;
        10: (octave: number, relativeName_Value: number) => string;
        11: (octave: number, relativeName_Value: number) => string;
    };
    static get AbsoluteValue_To_BaseInterval(): {
        0: Interval;
        1: Interval;
        2: Interval;
        3: Interval;
        4: Interval;
        5: Interval;
        6: Interval;
        7: Interval;
        8: Interval;
        9: Interval;
        10: Interval;
        11: Interval;
    };
}
