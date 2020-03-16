//###  Module  ###//
import {Animation} from "./Animation"
import {P5       } from "../P5/__Main__"

//###  App  ###//
import {Mutable} from "@/Types/Mutable"


//##############################//
//###  Exports.Class.Public  ###//
//##############################//

export class Group<State> extends Animation<State>{

	mode:        Animation.Mode
	repeatCount: (boolean|number)

	private readonly _animations: (Animation<State>|Group<State>)[] = []

	private _animationLoop: (Animation<State>|Group<State>)[] = []
	private _repeatIndex = 0

	constructor({
		mode,
		repeatCount,
		on_End,
		endCondition,
		on_Cancel,
		state,
		tags,
		startImmediately,
	}:{
		mode?:             Animation.Mode,
		repeatCount?:      (boolean|number),
		on_End?:           (((self:Animation<State>, renderer:(P5.Renderer), state:State) => void   ) | Animation<State> | Group<State> | Animation.Action.Remove),
		endCondition?:     (( self:Animation<State>, renderer:(P5.Renderer), state:State) => boolean),
		on_Cancel?:        (((self:Animation<State>, renderer:(P5.Renderer), state:State) => void   ) | Animation<State> | Group<State> | Animation.Action.Remove | Animation.Action.End),
		state?:            State,
		tags?:             string[],
		startImmediately?: boolean,
	}={}){
		super({
			on_Animate: (() => {}),
			on_End, endCondition, on_Cancel, state, tags, startImmediately,
		})

		this.mode        = (mode        === undefined) ? Animation.Mode.Queue : mode
		this.repeatCount = (repeatCount === undefined) ? 1                    : repeatCount
	}

	//###########################//
	//###  Properties.Public  ###//
	//###########################//

	get repeatIndex()
		{return this._repeatIndex}

	//########################//
	//###  Methods.Public  ###//
	//########################//

	add(...animations:(Animation<State>|Group<State>)[]){
		for(const animation of animations)
			{(animation as any)._group = this}

		this._animations   .push(...animations)
		this._animationLoop.push(...animations)

		return this
	}

	//############################//
	//###  Properties.Private  ###//
	//############################//

	private get _canRepeat(){
		return (
			(this.repeatCount === true)
			|| ((typeof this.repeatCount == "number") && (this._repeatIndex < (this.repeatCount - 1)))
		)
	}

	//###########################//
	//###  Methods.Protected  ###//
	//###########################//

	// @override
	protected _animate(){
		if     (!this.is_Active                      ){return                                     }
		else if(this.is_Complete                     ){this.end()                                 }
		else if(this.mode === Animation.Mode.Parallel){this._animate_Parallel(); this._frame += 1;}
		else if(this.mode === Animation.Mode.Queue   ){this._animate_Queue   (); this._frame += 1;}
	}

	// @override
	protected _reset(){
		super._reset()
		this._repeatIndex = 0
	}

	//#########################//
	//###  Methods.Private  ###//
	//#########################//

	private _animate_Parallel(){
		this._animationLoop = this._animationLoop.filter(animation => !animation.is_Complete)
		this._update_AnimationLoop()

		for(const animation of this._animationLoop){
			if(!animation.is_Active)
				{animation.start()}
			(animation as any)._animate()
		}
	}

	private _animate_Queue(){
		if(this._animationLoop.length == 0)
			{return}

		if(this.frame == 0)
			{this._start_NextInQueue()}

		if(this._animationLoop[0].is_Complete)
			{this._set_NextInQueue()}
	}

	private _start_NextInQueue(){
		if(this._animationLoop[0] && !this._animationLoop[0].is_Active)
			{this._animationLoop[0].start()}
	}

	private _set_NextInQueue(){
		const lastAnimation = this._animationLoop.shift()
		lastAnimation.remove()

		this._update_AnimationLoop()
		this._start_NextInQueue()

		if(this._animationLoop.length > 0)
			{this._animate_Queue()}
	}

	private _update_AnimationLoop(){
		if(this._animationLoop.length != 0)
			{return}

		if(this._canRepeat)
			{this._reset_AnimationLoop()}
		else
			{(this._endCondition as Mutable<((state?:State) => boolean)>) = ((state?:State) => true)}
	}

	private _reset_AnimationLoop(){
		this._animationLoop = [...this._animations]
		this._repeatIndex += 1
	}

}


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace Group{
	// required for export @ Animation namespace
}
