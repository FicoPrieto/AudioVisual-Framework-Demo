import { Animation } from "../Animation/__Main__";
import _P5 from "p5";
export declare class P5 extends Animation.Manager<P5.Renderer> {
    clear_OnDraw: boolean;
    constructor({ selector, preload, setup, clear_OnDraw }: {
        selector: string;
        preload?: ((p5: P5.Renderer) => void);
        setup?: ((p5: P5.Renderer) => void);
        clear_OnDraw?: boolean;
    });
    private _initialize_P5;
    private _set_ResizeListener;
}
export declare namespace P5 {
    export import $ = _P5;
    export import Renderer = _P5;
}
