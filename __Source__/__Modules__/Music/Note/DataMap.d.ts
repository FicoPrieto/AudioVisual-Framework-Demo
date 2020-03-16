import { Note } from "./__Main__";
import { MidiValue, NoteName, Pitch, PitchVariable, Pitch_Flat, PitchVariable_Flat, Pitch_Sharp, PitchVariable_Sharp } from "./Types";
export default class {
    static readonly MidiValue_To_Note: {
        [key in MidiValue]: Note;
    };
    static readonly NoteName_To_Note: {
        [key in NoteName]: Note;
    };
    static readonly FlatPitch_To_SharpPitch: {
        [key in Pitch]: Pitch_Sharp;
    };
    static readonly FlatPitchVariable_To_SharpPitchVariable: {
        [key in PitchVariable]: PitchVariable_Sharp;
    };
    static readonly SharpPitch_To_FlatPitch: {
        [key in Pitch]: Pitch_Flat;
    };
    static readonly SharpPitchVariable_To_FlatPitchVariable: {
        [key in PitchVariable]: PitchVariable_Flat;
    };
}
