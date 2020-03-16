//###  Module  ###//
import {Animation} from "./Animation"
import {Group    } from "./Group"

//###  NPM  ###//
import {castArray} from "lodash"


//##############################//
//###  Exports.Class.Public  ###//
//##############################//

export class Manager<Renderer>{

	_element: HTMLElement

	readonly renderer: Renderer

	private _frame = 0
	private _animations: (Animation<any>|Group<any>)[] = []

	get $()
		{return this.renderer}

	get element()
		{return this._element}

	get frame()
		{return this._frame}

	animate(){
		for(const animation of this._animations)
			{(animation as any)._animate()}

		this._frame += 1
	}

	add<State, AnimationType extends Animation<State>>(animation:AnimationType):       AnimationType
	add<State, AnimationType extends Animation<State>>(...animations:AnimationType[]): AnimationType[]
	add<State, AnimationType extends Animation<State>>(animations:(AnimationType|AnimationType[])): (AnimationType|AnimationType[]){
		const _animations = castArray(animations)

		for(const animation of _animations){
			;(animation as any)._manager = this
			;(animation as any)._on_ManagerConnected()
		}

		this._animations.push(..._animations)

		return animations
	}

	remove_All()
		{this.remove(...this._animations)}

	remove(...animations:((Animation<any>|Group<any>))[]){
		const removed = this._animations.filter(animation => animations.includes(animation))

		for(const animation of removed){
			if(animation.is_Active && (animation as any)._should_Cancel_OnRemove)
				{(animation as any).cancel()}

			;(animation as any)._reset()
		}

		this._animations = this._animations.filter(animation => !removed.includes(animation))
	}

	remove_Tagged(
		{tags,          matchAll        }:
		{tags:string[], matchAll:boolean}
	){
		const filtered   = this.get_Tagged({tags, matchAll})
		this._animations = this._animations.filter(animation => !filtered.includes(animation))
	}

	get_Tagged(
		{tags,          matchAll        }:
		{tags:string[], matchAll:boolean}
	){
		return this._animations.filter(animation =>
			(matchAll)
			? tags.every(tag => animation.tags.includes(tag))
			: tags.some (tag => animation.tags.includes(tag))
		)
	}

}


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace Manager{
	// required for export @ Animation namespace
}
