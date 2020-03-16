//###  Sketch  ###//
import {P5} from "./P5"

//###  App  ###//
import Settings      from "Settings"
import {Note, Chord} from "@/Music/__Main__"
import {_Note      } from "@/Music/Note/__Main__"
import {NoteName   } from "@/Music/Note/Types"
import {ToneManager} from "@/Tone/__Main__"
import {Mutable    } from "@/Types/Mutable"

//###  NPM  ###//
import * as Tone from "tone"


//###############//
//###  Setup  ###//
//###############//

const _PianoColors = Settings.Color.PianoKeys


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace Synth{

	export namespace Instance{
		export let chord:  Tone.PolySynth
		export let melody: Tone.PolySynth
	}

	export enum KeyState{
		Pressed,
		Unpressed,
	}

	export type KeyColor = {whiteKey:string, blackKey:string}

	export function initialize(
		{bpm       }:
		{bpm:number}
	){
		ToneManager.initialize()
		ToneManager.bpm = bpm

		_initialize_Synths()
		_PianoInteraction_Listeners.start()
	}

	export function play_Notes(synth:Tone.PolySynth, source:(Note[]|Chord), colors?:KeyColor){
		colors = (colors || _PianoColors.Monochrome_Pressed)
		for(const {name:noteName, velocityDecimal} of _get_Notes(source)){
			synth.triggerAttack(noteName, undefined, velocityDecimal)
			_update_Piano({
				keyState: KeyState.Pressed,
				synth,
				noteName,
				colors,
			})
		}
	}

	export function stop_Notes(synth:Tone.PolySynth, source?:(Note[]|Chord)){
		if(source){
			for(const {name:noteName} of _get_Notes(source)){
				synth.triggerRelease(noteName)
				_update_Piano({
					keyState: KeyState.Unpressed,
					colors:   _PianoColors.Monochrome_Unpressed,
					synth,
					noteName,
				})
			}
		}
		else{
			synth.releaseAll()
			for(const {name:noteName} of _Note.All_Notes_Sharp)
				_update_Piano({
					keyState: KeyState.Unpressed,
					colors:   _PianoColors.Monochrome_Unpressed,
					synth,
					noteName,
				})
		}
	}

}


//###################//
//###  Utilities  ###//
//###################//

const _KeyState = Synth.KeyState
type  _KeyState = Synth.KeyState

function _initialize_Synths(){
	const chord = new Tone.PolySynth({voice:Tone.Synth, volume:-16}).toDestination()
	chord.connect(new Tone.PingPongDelay({delayTime:0.25, feedback:0.5, wet:0.5, maxDelay:8}).toDestination())
	chord.connect(new Tone.Reverb(4).toDestination())
	chord.set({
		envelope: {attack:0.65, decay:0.2, sustain:1.0, release:0.8}
	})
	Synth.Instance.chord = chord

	const melody = new Tone.PolySynth({voice:Tone.Synth, volume:-16} as any).toDestination()
	melody.connect(new Tone.PingPongDelay({delayTime:0.5, feedback:0.3, wet:0.3, maxDelay:2}).toDestination())
	melody.connect(new Tone.Reverb(4).toDestination())
	melody.set({
		oscillator: {type:"sine"},
		envelope:   {attack:0.5, decay:0.2, sustain:1.0, release:0.8}
	})
	Synth.Instance.melody = melody
}

function _get_Notes(source:(Note[]|Chord)){
	return (
		(source instanceof Chord)
		? source.notes
		: source
	)
}

function _update_Piano(
	{synth,                noteName,          keyState,           colors               }:
	{synth:Tone.PolySynth, noteName:NoteName, keyState:_KeyState, colors:Synth.KeyColor}
){
	const key = (document.querySelector(`#Piano > .key[data-note="${noteName}"]`) as HTMLElement)
	if(!key)
		{return}

	if(synth == Synth.Instance.chord)
		{key.classList.add("chord")}
	else
		{key.classList.remove("chord")}

	const keyColor = key.matches(".white") ? "white" : "black"
	if(keyColor=="white")
		{key.style.backgroundColor = colors.whiteKey}
	else
		{key.style.backgroundColor = colors.blackKey}

	P5.keyEffect(key, noteName, keyState, colors)
}


//#############################//
//###  Utilities.Listeners  ###//
//#############################//

namespace _PianoInteraction_Listeners{

	let _keyState:_KeyState = _KeyState.Unpressed

	const _touchedKeys:{[key:number]:NoteName} = {}
	const _pressedKeys:{[key:string]:boolean } = {}

	export function start(){
		const piano = document.getElementById("Piano")
		for(const key of ([...piano.children] as HTMLElement[])){
			const noteName = (key.dataset.note as NoteName)

			//###  Press  ###//
			key.addEventListener("mousedown",  _on_Pressed(noteName))
			key.addEventListener("touchstart", _on_Pressed(noteName))
			//###  Enter  ###//
			key.addEventListener("mouseover", _on_Enter_Mouse(noteName))
			//###  Leave  ###//
			key.addEventListener("mouseleave", _on_Leave_Mouse(noteName))
			//###  Unpress  ###//
			key.addEventListener("mouseup",     _on_Unpressed_Mouse(noteName))
			key.addEventListener("touchend",    _on_Unpressed_Mouse(noteName))
			key.addEventListener("touchcancel", _on_Unpressed_Mouse(noteName))

			//################################################//
			//##  ToDo:                                     ##//
			//##    finish implementing touchmove handling  ##//
			//##    (emulate mouseover)                     ##//
			//################################################//

			// //###  Press  ###//
			// key.addEventListener("mousedown",  _on_Pressed(noteName))
			// key.addEventListener("touchstart", _on_Pressed(noteName))
			// //###  Enter  ###//
			// key.addEventListener("mouseover", _on_Enter_Mouse(noteName))
			// key.addEventListener("touchmove", _on_Enter_Touch(        ))
			// //###  Leave  ###//
			// key.addEventListener("mouseleave", _on_Leave_Mouse(noteName))
			// //###  Unpress  ###//
			// key.addEventListener("mouseup",     _on_Unpressed_Mouse(noteName))
			// key.addEventListener("touchend",    _on_Unpressed_Touch(        ))
			// key.addEventListener("touchcancel", _on_Unpressed_Touch(        ))
		}
	}

	function _on_Pressed(noteName:NoteName){
		return (event:(MouseEvent|TouchEvent)) => {
			if(! _is_TargetNote(event, noteName))
				{return}
			_keyState = _KeyState.Pressed
			// console.log("on_Pressed", noteName)
			_play_Key(noteName)
		}
	}

	function _on_Enter_Mouse(noteName:NoteName){
		return (event:MouseEvent) => {
			if(! _is_TargetNote(event, noteName))
				{return}

			// console.log("on_Enter_Mouse", noteName)
			const note_IsPressed = _pressedKeys[noteName]
			if((_keyState == _KeyState.Pressed) && !(note_IsPressed))
				{_play_Key(noteName)}
		}
	}

	// function _on_Enter_Touch(){
	// 	return (event:TouchEvent) => {
	// 		for(const touch of (event as TouchEvent).changedTouches){
	// 			_stop_LastTouch_Key(touch)
	// 			const noteName = _get_LastTouch_NoteName(touch)

	// 			const note_IsPressed = (
	// 				_pressedKeys[noteName]
	// 				|| (_touchedKeys[touch.identifier] == noteName)
	// 			)


	// 			console.log("on_Enter_Touch.touchEnter", touch)
	// 			if(noteName && !note_IsPressed){
	// 				_play_Key(noteName)
	// 				_touchedKeys[touch.identifier] = noteName
	// 				// console.log("on_Enter_Touch.touchEnter", noteName)
	// 				// const newEvent    = (({...event} as any) as Mutable<MouseEvent>)
	// 				// newEvent.target   = key
	// 				// const newNoteName = (key.dataset.note as NoteName)
	// 				// _on_Enter_Mouse(newNoteName)(newEvent)
	// 			}
	// 		}
	// 	}
	// }

	function _on_Leave_Mouse(noteName:NoteName){
		return (event:MouseEvent) => {
			if(! _is_TargetNote(event, noteName))
				{return}
			// console.log("on_Leave_Mouse", noteName)
			if(_keyState === _KeyState.Pressed)
				{_stop_Key(noteName)}
		}
	}

	function _on_Unpressed_Mouse(noteName:NoteName){
		return (event:MouseEvent) => {
			if(! _is_TargetNote(event, noteName))
				{return}
			_keyState = _KeyState.Unpressed
			// console.log("on_Unpressed_Mouse", noteName)
			_stop_Key(noteName)
		}
	}

	// function _on_Unpressed_Touch(){
	// 	return (event:TouchEvent) => {
	// 		for(const touch of (event as TouchEvent).changedTouches){
	// 			_stop_LastTouch_Key(touch)
	// 			delete _touchedKeys[touch.identifier]

	// 			const noteName = _get_LastTouch_NoteName(touch)

	// 			console.log("_on_Unpressed_Touch", touch)
	// 			if(noteName){
	// 				_stop_Key(noteName)
	// 				// console.log("_on_Unpressed_Touch", noteName)
	// 				// const newEvent    = (({...event} as any) as Mutable<MouseEvent>)
	// 				// newEvent.target   = key
	// 				// const newNoteName = (key.dataset.note as NoteName)
	// 				// _on_Enter_Mouse(newNoteName)(newEvent)
	// 			}
	// 		}
	// 	}
	// }

	function _get_LastTouch_NoteName(touch:Touch){
		const element = document.elementFromPoint(touch.clientX, touch.clientY)
		const key     = element.matches("#Piano > .key") ? (element as HTMLElement) : null
		return ((key) ? (key.dataset.note as NoteName) : null)
	}

	function _play_Key(noteName:NoteName){
		Synth.play_Notes(Synth.Instance.melody, [new Note(noteName)], _PianoColors.Monochrome_Pressed)
		_pressedKeys[noteName] = true
	}

	function _stop_Key(noteName:NoteName){
		Synth.stop_Notes(Synth.Instance.melody, [new Note(noteName)])
		delete _pressedKeys[noteName]
	}

	function _stop_LastTouch_Key(touch:Touch){
		const lastKey = _touchedKeys[touch.identifier]
		if(lastKey)
			{_stop_Key(lastKey)}
	}

	function _is_TargetNote(event:(MouseEvent|TouchEvent), noteName:NoteName)
		{return ((event.target as HTMLElement).dataset.note == noteName) }

}
