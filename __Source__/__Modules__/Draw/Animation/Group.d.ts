/// <reference types="p5" />
import { Animation } from "./Animation";
import { P5 } from "../P5/__Main__";
export declare class Group<State> extends Animation<State> {
    mode: Animation.Mode;
    repeatCount: (boolean | number);
    private readonly _animations;
    private _animationLoop;
    private _repeatIndex;
    constructor({ mode, repeatCount, on_End, endCondition, on_Cancel, state, tags, startImmediately, }?: {
        mode?: Animation.Mode;
        repeatCount?: (boolean | number);
        on_End?: (((self: Animation<State>, renderer: (P5.Renderer), state: State) => void) | Animation<State> | Group<State> | Animation.Action.Remove);
        endCondition?: ((self: Animation<State>, renderer: (P5.Renderer), state: State) => boolean);
        on_Cancel?: (((self: Animation<State>, renderer: (P5.Renderer), state: State) => void) | Animation<State> | Group<State> | Animation.Action.Remove | Animation.Action.End);
        state?: State;
        tags?: string[];
        startImmediately?: boolean;
    });
    get repeatIndex(): number;
    add(...animations: (Animation<State> | Group<State>)[]): this;
    private get _canRepeat();
    protected _animate(): void;
    protected _reset(): void;
    private _animate_Parallel;
    private _animate_Queue;
    private _start_NextInQueue;
    private _set_NextInQueue;
    private _update_AnimationLoop;
    private _reset_AnimationLoop;
}
export declare namespace Group {
}
