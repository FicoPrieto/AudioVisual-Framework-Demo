//###  Module  ###//
import {Animation} from "../Animation/__Main__"

//###  App  ###//
import {Mutable} from "@/Types/Mutable"

//###  NPM  ###//
import _P5 from "p5"


//##############################//
//###  Exports.Class.Public  ###//
//##############################//

export class P5 extends Animation.Manager<P5.Renderer>{

	clear_OnDraw: boolean

	constructor(
		{selector,        preload,                             setup,                             clear_OnDraw         }:
		{selector:string, preload?:((p5:P5.Renderer) => void), setup?:((p5:P5.Renderer) => void), clear_OnDraw?:boolean}
	){
		super()

		this._element     = document.querySelector(selector) as HTMLElement
		this.clear_OnDraw = (clear_OnDraw === undefined) ? true : clear_OnDraw

		this._initialize_P5({preload, setup})
		this._set_ResizeListener()
	}

	private _initialize_P5(
		{preload,                             setup                            }:
		{preload?:((p5:P5.Renderer) => void), setup?:((p5:P5.Renderer) => void)}
	){
		(this as Mutable<P5>).renderer = new _P5( (p5:_P5) => {
			setup = (setup || (() => {}))

			p5.draw = () => {
				if(this.clear_OnDraw)
					{p5.clear()}

				this.animate()
			}

			if(preload)
				{p5.preload = (() => preload(p5))}

			p5.setup = ()=>{
				p5.createCanvas(this.element.clientWidth, this.element.clientHeight)
				setup(p5)
			}
		}, this.element)
	}

	private _set_ResizeListener(){
		window.addEventListener("resize", ()=>{
			this.renderer.resizeCanvas(this.element.clientWidth, this.element.clientHeight)
		})
	}

}


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace P5{
	export import $        = _P5
	export import Renderer = _P5
}
