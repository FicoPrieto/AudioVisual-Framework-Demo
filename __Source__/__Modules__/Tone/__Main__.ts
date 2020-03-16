//###  App  ###//
import {BPM_Manager } from "@/Music/__Main__"
import {RelativeTime} from "@/Time/__Main__"

//###  NPM  ###//
import * as Tone from "tone"
import StartAudioContext from "startaudiocontext"


//########################//
//###  Exports.Public  ###//
//########################//

export class ToneManager{

	static get beatLength()
		{return new RelativeTime({minutes:(1 / this.bpm)})}

	static get bpm()
		{return Tone.Transport.bpm.value}
	static set bpm(value)
		{Tone.Transport.bpm.value = value}

	private static _scheduledCallbackID   = 0
	private static _scheduledCallbackData = {}

	static initialize(){
		BPM_Manager.link(this)
		StartAudioContext(Tone.context)
	}

	static Transport = class{
		static start()
			{Tone.Transport.start()}
		static stop(){
			Tone.Transport.stop()
			ToneManager._cancel_ScheduledCallbacks()
		}
		static reset(){
			this.stop()
			Tone.Transport.cancel()
			Tone.Transport.position = 0
		}
	}

	static schedule(
		{args,              callback,                         time,                                                         multiplier        }:
		{args?:(any[]|any), callback:((...args:any) => void), time:(RelativeTime|number|string|{[duration:string]:number}), multiplier?:number}
	){
		multiplier       = (multiplier || 1)
		const internalID = this._scheduledCallbackID

		//##########################################################//
		//##  Notes:                                              ##//
		//##    Somewhat helps occasional skipping @ first note   ##//
		//##  ToDo:                                               ##//
		//##    Find a more precise way of sequencing notes       ##//
		//##########################################################//

		const offset = 1

		let seconds: number

		if(time instanceof RelativeTime)
			{seconds = time.seconds}
		else if(typeof time == "number")
			{seconds = (time / 1000)}
		else
			{seconds = Tone.Time(time).toSeconds()}

		seconds = Tone.now() + (seconds * multiplier)

		const _callback =
			(args instanceof Array)
			? () => callback(...args)
			: () => callback(args   )

		const __callback = ()=>{
			Tone.Draw.schedule(() => {
				if(this._scheduledCallbackData[internalID]){
					_callback()
					delete this._scheduledCallbackData[internalID]
				}
			}, seconds + offset)
		}

		const callbackID = Tone.Transport.scheduleOnce(__callback, "+0")

		this._scheduledCallbackData[internalID] = {
			callbackID,
			internalID: internalID,
		}
		this._scheduledCallbackID += 1
	}

	private static _cancel_ScheduledCallbacks(){
		this._scheduledCallbackData = []

		for(const id of Object.keys(this._scheduledCallbackData))
			{{Tone.context.clearTimeout(parseInt(id))}}
	}

}
