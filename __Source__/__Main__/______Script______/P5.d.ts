import { Synth } from "./Synth";
import Draw from "@/Draw/__Main__";
import { NoteName } from "@/Music/Note/Types";
export declare namespace P5 {
    let Front: Draw.P5;
    let Back: Draw.P5;
    function initialize(): void;
    function keyEffect(key: HTMLElement, noteName: NoteName, keyState: Synth.KeyState, colors: Synth.KeyColor): void;
}
