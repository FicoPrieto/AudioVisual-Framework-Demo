import { Note, Chord } from "@/Music/__Main__";
import * as Tone from "tone";
export declare namespace Synth {
    namespace Instance {
        let chord: Tone.PolySynth;
        let melody: Tone.PolySynth;
    }
    enum KeyState {
        Pressed = 0,
        Unpressed = 1
    }
    type KeyColor = {
        whiteKey: string;
        blackKey: string;
    };
    function initialize({ bpm }: {
        bpm: number;
    }): void;
    function play_Notes(synth: Tone.PolySynth, source: (Note[] | Chord), colors?: KeyColor): void;
    function stop_Notes(synth: Tone.PolySynth, source?: (Note[] | Chord)): void;
}
