import { Chord as ErrorContainer } from "./Error";
import { Interval } from "../Interval/__Main__";
import { Note, _Note } from "../Note/__Main__";
import { NoteName, MidiOctave, MidiValue } from "../Note/Types";
import { RelativeTime } from "@/Time/__Main__";
export declare class Chord {
    static Error: typeof ErrorContainer.Error;
    readonly _notes: Readonly<Note[]>;
    velocity: MidiValue;
    duration: RelativeTime;
    delay: RelativeTime;
    constructor(notes: (Note | NoteName | MidiValue)[], options?: {
        velocity?: MidiValue;
        duration?: (number | string | RelativeTime | RelativeTime.Components);
        delay?: (number | string | RelativeTime | RelativeTime.Components);
    });
    constructor({ root, intervals, velocity, duration, delay }: {
        root: (Note | NoteName | MidiValue);
        intervals: ((Interval | number)[] | Readonly<Interval[]>);
        velocity?: MidiValue;
        duration?: (number | string | RelativeTime | RelativeTime.Components);
        delay?: (number | string | RelativeTime | RelativeTime.Components);
    });
    get notes(): Note[];
    alter(alterations: {
        [index: number]: {
            add?: (Interval | number);
            subtract?: (Interval | number);
        };
    }): Note[];
    static add(...notes: (Chord | Note)[]): Chord;
    add(...notes: (Chord | Note)[]): Chord;
}
export declare namespace Chord {
    export const Major: readonly Interval[], MajorSixth: readonly Interval[], Six_Nine: readonly Interval[], AddedNinth: readonly Interval[], MajorSeventh: readonly Interval[], MajorSeventh_FlatFive: readonly Interval[], MajorSeventh_SharpFive: readonly Interval[], MajorNinth: readonly Interval[], MajorEleventh: readonly Interval[], MajorThirteenth: readonly Interval[], MajorSeven_SharpEleventh: readonly Interval[], Major_FlatFive: readonly Interval[], Minor: readonly Interval[], MinorSixth: readonly Interval[], MinorSeventh: readonly Interval[], Minor_AddedNinth: readonly Interval[], MinorSix_AddNine: readonly Interval[], MinorNinth: readonly Interval[], MinorEleventh: readonly Interval[], MinorThirteenth: readonly Interval[], Minor_MajorSeventh: readonly Interval[], Minor_MajorNinth: readonly Interval[], Minor_MajorEleventh: readonly Interval[], Minor_MajorThirteenth: readonly Interval[], MinorSeven_FlatFive: readonly Interval[], DominantSeventh: readonly Interval[], Ninth: readonly Interval[], Eleventh: readonly Interval[], Thirteenth: readonly Interval[], Seven_SharpFive: readonly Interval[], Seven_FlatFive: readonly Interval[], Seven_FlatNinth: readonly Interval[], Seven_SharpNinth: readonly Interval[], Nine_SharpFive: readonly Interval[], Nine_FlatFive: readonly Interval[], Seven_SharpFive_SharpNine: readonly Interval[], Seven_SharpFive_FlatNine: readonly Interval[], Seven_FlatFive_SharpNine: readonly Interval[], Seven_FlatFive_FlatNine: readonly Interval[], Seven_SharpEleven: readonly Interval[], Diminished: readonly Interval[], DiminishedSeventh: readonly Interval[], HalfDiminished: readonly Interval[], SuspendedSeventh: readonly Interval[], Augmented: readonly Interval[], AugmentedSeventh: readonly Interval[], FifthPowerChord: readonly Interval[], FlatFifth: readonly Interval[], SuspendedSecond: readonly Interval[], SuspendedFourth: readonly Interval[];
    export const A: _ChordGenerators;
    export const Bb: _ChordGenerators;
    export const A$: _ChordGenerators;
    export const B: _ChordGenerators;
    export const C: _ChordGenerators;
    export const C$: _ChordGenerators;
    export const Db: _ChordGenerators;
    export const D: _ChordGenerators;
    export const Eb: _ChordGenerators;
    export const D$: _ChordGenerators;
    export const E: _ChordGenerators;
    export const F: _ChordGenerators;
    export const F$: _ChordGenerators;
    export const Gb: _ChordGenerators;
    export const G: _ChordGenerators;
    export const Ab: _ChordGenerators;
    export const G$: _ChordGenerators;
    type _ChordGenerators = {
        Major: _Chord.Generator;
        MajorSixth: _Chord.Generator;
        Six_Nine: _Chord.Generator;
        AddedNinth: _Chord.Generator;
        MajorSeventh: _Chord.Generator;
        MajorSeventh_FlatFive: _Chord.Generator;
        MajorSeventh_SharpFive: _Chord.Generator;
        MajorNinth: _Chord.Generator;
        MajorEleventh: _Chord.Generator;
        MajorThirteenth: _Chord.Generator;
        MajorSeven_SharpEleventh: _Chord.Generator;
        Major_FlatFive: _Chord.Generator;
        Minor: _Chord.Generator;
        MinorSixth: _Chord.Generator;
        MinorSeventh: _Chord.Generator;
        Minor_AddedNinth: _Chord.Generator;
        MinorSix_AddNine: _Chord.Generator;
        MinorNinth: _Chord.Generator;
        MinorEleventh: _Chord.Generator;
        MinorThirteenth: _Chord.Generator;
        Minor_MajorSeventh: _Chord.Generator;
        Minor_MajorNinth: _Chord.Generator;
        Minor_MajorEleventh: _Chord.Generator;
        Minor_MajorThirteenth: _Chord.Generator;
        MinorSeven_FlatFive: _Chord.Generator;
        DominantSeventh: _Chord.Generator;
        Ninth: _Chord.Generator;
        Eleventh: _Chord.Generator;
        Thirteenth: _Chord.Generator;
        Seven_SharpFive: _Chord.Generator;
        Seven_FlatFive: _Chord.Generator;
        Seven_FlatNinth: _Chord.Generator;
        Seven_SharpNinth: _Chord.Generator;
        Nine_SharpFive: _Chord.Generator;
        Nine_FlatFive: _Chord.Generator;
        Seven_SharpFive_SharpNine: _Chord.Generator;
        Seven_SharpFive_FlatNine: _Chord.Generator;
        Seven_FlatFive_SharpNine: _Chord.Generator;
        Seven_FlatFive_FlatNine: _Chord.Generator;
        Seven_SharpEleven: _Chord.Generator;
        Diminished: _Chord.Generator;
        DiminishedSeventh: _Chord.Generator;
        HalfDiminished: _Chord.Generator;
        SuspendedSeventh: _Chord.Generator;
        Augmented: _Chord.Generator;
        AugmentedSeventh: _Chord.Generator;
        FifthPowerChord: _Chord.Generator;
        FlatFifth: _Chord.Generator;
        SuspendedSecond: _Chord.Generator;
        SuspendedFourth: _Chord.Generator;
    };
    export {};
}
export declare namespace _Chord {
    type Generator = (octave: MidiOctave, options?: _Note.Options) => Chord;
    type Alteration = {
        [index: number]: {
            add?: (Interval | number);
            subtract?: (Interval | number);
        };
    };
    const All_IntervalArrays: Readonly<Interval[]>[];
}
