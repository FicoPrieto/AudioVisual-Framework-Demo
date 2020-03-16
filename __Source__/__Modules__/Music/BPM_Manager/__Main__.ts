//###  App  ###//
import {RelativeTime} from "@/Time/__Main__"


//##############################//
//###  Exports.Class.Public  ###//
//##############################//

export class BPM_Manager{

	private static _bpm_Source:{bpm:number}

	static link(bpm_Source:{bpm:number})
		{this._bpm_Source = bpm_Source}

	static get beatLength(){
		return (
			this._bpm_Source
			? new RelativeTime({minutes:(1 / this._bpm_Source.bpm)})
			: new RelativeTime({milliseconds:0})
		)
	}

}


//###################################//
//###  Exports.Namespace.Private  ###//
//###################################//

export namespace _BPM_Manager{

	export const duration_RegEx_String = ""
	+ "^("
	+   "((?:(?<count>\\d+)\\s+)?(?<dividend>\\d+)\\/(?<divisor>\\d+)(?<triplet>t)?)"
	+   "|"
	+   "((?<wholeNotes>\\d+))"
	+ ")$"

	export function get_Duration_InMilliseconds(value:(number|string|RelativeTime|RelativeTime.Components)){
		if(typeof value == "number")
			{return new RelativeTime({milliseconds:value})}
		else if(typeof value == "string")
			{return _convert_StringDuration_To_Milliseconds(value)}
		else if(value instanceof RelativeTime)
			{return value}
		else
			{return new RelativeTime(value)}
	}

}


//###################//
//###  Utilities  ###//
//###################//

const _duration_RegEx = new RegExp(_BPM_Manager.duration_RegEx_String, "i")

function _convert_StringDuration_To_Milliseconds(value:string){
	const match = _duration_RegEx.exec(value)

	if(! match)
		{throw new Note.Error.InvalidDuration(value)}

	let {
		count, dividend, divisor, triplet,
		wholeNotes,
	} = match.groups

	let milliseconds: number

	if(wholeNotes)
		{milliseconds = (parseInt(wholeNotes) * BPM_Manager.beatLength.milliseconds)}
	else{
		count = (count || "1")
		const tripletFactor  = (triplet) ? 1.5 : 1
		const durationFactor = (parseInt(count) * (parseInt(dividend) / (parseInt(divisor) * tripletFactor)))
		milliseconds         = (durationFactor * BPM_Manager.beatLength.milliseconds)
	}

	return new RelativeTime({milliseconds})
}


//####################//
//###  Initialize  ###//
//####################//

import {Note} from "../Note/__Main__"
