//###  Module  ###//
import {Manager as _Manager} from "./Manager"
import {Group   as _Group  } from "./Group"
import {P5                 } from "../P5/__Main__"


//##############################//
//###  Exports.Class.Public  ###//
//##############################//

export class Animation<State>{

	protected readonly _on_Animate:             _VoidCallback   <State>
	protected readonly _trigger:                _BooleanCallback<State>
	protected readonly _on_End:                 _VoidCallback   <State>
	protected readonly _endCondition:           _BooleanCallback<State>
	protected readonly _on_Cancel:              _VoidCallback   <State>
	protected readonly _state:                  State
	protected readonly _has_State:              boolean
	protected readonly _should_Cancel_OnRemove: boolean

	protected _constructorArguments: _ConstructorArguments
	protected _manager:              (P5)
	protected _group:                _Group<State>
	protected _on_ManagerConnected:  (() => void)

	protected _frame     = 0
	protected _is_Active = false

	readonly tags: string[]

	constructor({
		on_Animate,
		on_End,
		endCondition,
		on_Cancel,
		state,
		tags,
		startImmediately,
	}:{
		on_Animate:        (( self:Animation<State>, renderer:(P5.Renderer), state:State) => void   ),
		on_End?:           (((self:Animation<State>, renderer:(P5.Renderer), state:State) => void   ) | Animation<State> | _Group<State> | Animation.Action.Remove),
		endCondition?:     (( self:Animation<State>, renderer:(P5.Renderer), state:State) => boolean),
		on_Cancel?:        (((self:Animation<State>, renderer:(P5.Renderer), state:State) => void   ) | Animation<State> | _Group<State> | Animation.Action.Remove | Animation.Action.End),
		state?:            State,
		tags?:             string[],
		startImmediately?: boolean,
	}){
		this._constructorArguments = {on_Animate, on_End, endCondition, on_Cancel, state, tags, startImmediately}

		this._on_Animate   = on_Animate
		this._endCondition = (endCondition || (() => false)      )
		this._state        = (state        || ({} as State))
		this.tags          = (tags         || []                 )
		this._has_State    = Boolean(state)


		//###  Set on_End  ###//
		if(on_End instanceof Animation){
			this._on_End = () => {
				this.manager.add(on_End)
				on_End.start()
			}
		}
		else if(on_End === Animation.Action.Remove)
			{this._on_End = (() => this.remove())}
		else
			{this._on_End = (on_End || (() => {}))}

		//###  Set on_Cancel  ###//
		this._should_Cancel_OnRemove = !((on_Cancel in Animation.Action) || (on_Cancel === undefined))
		if(on_Cancel instanceof Animation){
			this._on_Cancel = () => {
				this.manager.add(on_Cancel)
				on_Cancel.start()
			}
		}
		else if(on_Cancel === Animation.Action.End)
			{this._on_Cancel = (() => this.end   ())}
		else if(on_Cancel === Animation.Action.Remove)
			{this._on_Cancel = (() => this.remove())}
		else
			{this._on_Cancel = (on_Cancel || (() => {}))}

		//###  Set _on_ManagerConnected  ###//
		if(
			((startImmediately === true) || (startImmediately === undefined))
			&& !this._group
		){
			this._on_ManagerConnected = () => {this._start()}
		}
		else{
			this._on_ManagerConnected = () => {}
		}
	}

	//###########################//
	//###  Properties.Public  ###//
	//###########################//

	/**
	* Returns the animation's `state`, or its `group`'s `state` if it was not provided with its own `state` in the constructor.
	**/
	get state(): State
		{return (this._group && !this._has_State) ? this._group.state : this._state}

	get frame()
		{return this._frame}

	get is_Active()
		{return this._is_Active}

	get is_Complete()
		{return this._endCondition(this, this.manager.renderer, this.state)}

	get manager(){
		return (
			(this._manager)
			? this._manager
			: (this._group)
				? this._group._manager
				: null
		)
	}

	get group()
		{return this._group}

	//########################//
	//###  Methods.Public  ###//
	//########################//

	/**
	* Returns a duplicate `Animation` instance, overriding any properties which are provided as arguments.
	*
	* If not provided, `state` & `tags` will copy the animation's current values.
	*
	* If `state` is provided, it will be merged with the animation's current state, with the new state's values taking precedence.
	*
	* All other arguments, left unprovided, will reflect their values as given in the constructor.
	**/
	clone({
		on_Animate,
		on_End,
		endCondition,
		on_Cancel,
		state,
		tags,
		startImmediately,
	}:{
		on_Animate?:       (( self:Animation<State>, renderer:(P5.Renderer), state:State) => void   ),
		on_End?:           (((self:Animation<State>, renderer:(P5.Renderer), state:State) => void   ) | Animation<State> | _Group<State> | Animation.Action.Remove),
		endCondition?:     (( self:Animation<State>, renderer:(P5.Renderer), state:State) => boolean),
		on_Cancel?:        (((self:Animation<State>, renderer:(P5.Renderer), state:State) => void   ) | Animation<State> | _Group<State> | Animation.Action.Remove | Animation.Action.End),
		state?:            Partial<State>,
		tags?:             string[],
		startImmediately?: boolean,
	}={}): this{
		return new (this.constructor as any)({
			state:            {...this.state, ...state},
			on_Animate:       ((on_Animate       === undefined) ? this._constructorArguments.on_Animate       : on_Animate      ),
			on_End:           ((on_End           === undefined) ? this._constructorArguments.on_End           : on_End          ),
			endCondition:     ((endCondition     === undefined) ? this._constructorArguments.endCondition     : endCondition    ),
			on_Cancel:        ((on_Cancel        === undefined) ? this._constructorArguments.on_Cancel        : on_Cancel       ),
			tags:             ((tags             === undefined) ? this.tags                                   : tags            ),
			startImmediately: ((startImmediately === undefined) ? this._constructorArguments.startImmediately : startImmediately),
		})
	}

	start(){
		if(this.manager){
			this._start()
			this.manager.add(this)
		}
		else
			{console.warn("Animation has not yet been added to an `Animation.Manager` instance, and cannot be started.", this.tags)}
	}

	end(){
		this._on_End(this, this.manager.renderer, this.state)
		this.remove()
	}

	cancel(){
		this._on_Cancel(this, this.manager.renderer, this.state)
		this.remove()
	}

	remove(){
		if(this._manager){
			this._manager.remove(this)
			this._reset()
		}
		else
			{console.warn("Animation has not yet been added to an `Animation.Manager` instance, and cannot be cancelled.")}
	}

	//###########################//
	//###  Methods.Protected  ###//
	//###########################//

	protected _animate(){
		if(!this._is_Active)
			{return}
		else if(this.is_Complete)
			{this.end()}
		else{
			this._on_Animate(this, this.manager.renderer, this.state)
			this._frame += 1
		}
	}

	protected _start(){
		this._reset()
		this._is_Active = true
	}

	protected _reset(){
		this._is_Active = false
		this._frame     = 0
	}

}


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace Animation{

	export enum Mode{
		Parallel = "Parallel",
		Queue    = "Queue",
	}

	export enum Action{
		End    = "End",
		Cancel = "Cancel",
		Remove = "Remove",
	}

}


//###################//
//###  Utilities  ###//
//###################//

type _VoidCallback   <State> = ((self:Animation<State>, renderer:(P5.Renderer), state:State) => void   )
type _BooleanCallback<State> = ((self:Animation<State>, renderer:(P5.Renderer), state:State) => boolean)

type _ConstructorArguments = {
	on_Animate:       (( self:Animation<any>, renderer:(P5.Renderer), state:any) => void   ),
	on_End:           (((self:Animation<any>, renderer:(P5.Renderer), state:any) => void   ) | Animation<any> | _Group<any> | Animation.Action.Remove),
	endCondition:     (( self:Animation<any>, renderer:(P5.Renderer), state:any) => boolean),
	on_Cancel:        (((self:Animation<any>, renderer:(P5.Renderer), state:any) => void   ) | Animation<any> | _Group<any> | Animation.Action.Remove | Animation.Action.End),
	state:            any,
	tags:             string[],
	startImmediately: boolean,
}
