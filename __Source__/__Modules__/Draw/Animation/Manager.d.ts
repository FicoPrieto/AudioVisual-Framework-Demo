import { Animation } from "./Animation";
import { Group } from "./Group";
export declare class Manager<Renderer> {
    _element: HTMLElement;
    readonly renderer: Renderer;
    private _frame;
    private _animations;
    get $(): Renderer;
    get element(): HTMLElement;
    get frame(): number;
    animate(): void;
    add<State, AnimationType extends Animation<State>>(animation: AnimationType): AnimationType;
    add<State, AnimationType extends Animation<State>>(...animations: AnimationType[]): AnimationType[];
    remove_All(): void;
    remove(...animations: ((Animation<any> | Group<any>))[]): void;
    remove_Tagged({ tags, matchAll }: {
        tags: string[];
        matchAll: boolean;
    }): void;
    get_Tagged({ tags, matchAll }: {
        tags: string[];
        matchAll: boolean;
    }): (Animation<any> | Group<any>)[];
}
export declare namespace Manager {
}
