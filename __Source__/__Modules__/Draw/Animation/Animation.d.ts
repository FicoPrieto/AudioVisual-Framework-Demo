/// <reference types="p5" />
import { Group as _Group } from "./Group";
import { P5 } from "../P5/__Main__";
export declare class Animation<State> {
    protected readonly _on_Animate: _VoidCallback<State>;
    protected readonly _trigger: _BooleanCallback<State>;
    protected readonly _on_End: _VoidCallback<State>;
    protected readonly _endCondition: _BooleanCallback<State>;
    protected readonly _on_Cancel: _VoidCallback<State>;
    protected readonly _state: State;
    protected readonly _has_State: boolean;
    protected readonly _should_Cancel_OnRemove: boolean;
    protected _constructorArguments: _ConstructorArguments;
    protected _manager: (P5);
    protected _group: _Group<State>;
    protected _on_ManagerConnected: (() => void);
    protected _frame: number;
    protected _is_Active: boolean;
    readonly tags: string[];
    constructor({ on_Animate, on_End, endCondition, on_Cancel, state, tags, startImmediately, }: {
        on_Animate: ((self: Animation<State>, renderer: (P5.Renderer), state: State) => void);
        on_End?: (((self: Animation<State>, renderer: (P5.Renderer), state: State) => void) | Animation<State> | _Group<State> | Animation.Action.Remove);
        endCondition?: ((self: Animation<State>, renderer: (P5.Renderer), state: State) => boolean);
        on_Cancel?: (((self: Animation<State>, renderer: (P5.Renderer), state: State) => void) | Animation<State> | _Group<State> | Animation.Action.Remove | Animation.Action.End);
        state?: State;
        tags?: string[];
        startImmediately?: boolean;
    });
    get state(): State;
    get frame(): number;
    get is_Active(): boolean;
    get is_Complete(): boolean;
    get manager(): P5;
    get group(): _Group<State>;
    clone({ on_Animate, on_End, endCondition, on_Cancel, state, tags, startImmediately, }?: {
        on_Animate?: ((self: Animation<State>, renderer: (P5.Renderer), state: State) => void);
        on_End?: (((self: Animation<State>, renderer: (P5.Renderer), state: State) => void) | Animation<State> | _Group<State> | Animation.Action.Remove);
        endCondition?: ((self: Animation<State>, renderer: (P5.Renderer), state: State) => boolean);
        on_Cancel?: (((self: Animation<State>, renderer: (P5.Renderer), state: State) => void) | Animation<State> | _Group<State> | Animation.Action.Remove | Animation.Action.End);
        state?: Partial<State>;
        tags?: string[];
        startImmediately?: boolean;
    }): this;
    start(): void;
    end(): void;
    cancel(): void;
    remove(): void;
    protected _animate(): void;
    protected _start(): void;
    protected _reset(): void;
}
export declare namespace Animation {
    enum Mode {
        Parallel = "Parallel",
        Queue = "Queue"
    }
    enum Action {
        End = "End",
        Cancel = "Cancel",
        Remove = "Remove"
    }
}
declare type _VoidCallback<State> = ((self: Animation<State>, renderer: (P5.Renderer), state: State) => void);
declare type _BooleanCallback<State> = ((self: Animation<State>, renderer: (P5.Renderer), state: State) => boolean);
declare type _ConstructorArguments = {
    on_Animate: ((self: Animation<any>, renderer: (P5.Renderer), state: any) => void);
    on_End: (((self: Animation<any>, renderer: (P5.Renderer), state: any) => void) | Animation<any> | _Group<any> | Animation.Action.Remove);
    endCondition: ((self: Animation<any>, renderer: (P5.Renderer), state: any) => boolean);
    on_Cancel: (((self: Animation<any>, renderer: (P5.Renderer), state: any) => void) | Animation<any> | _Group<any> | Animation.Action.Remove | Animation.Action.End);
    state: any;
    tags: string[];
    startImmediately: boolean;
};
export {};
