//###  Module  ###//
import DataMap                          from "./DataMap"
import {Interval as ErrorContainer    } from "./Error"
import {AbsoluteOctave, RelativeOctave} from "../Note/Constants"
import {Note                          } from "../Note/__Main__"
import {NoteName, MidiValue           } from "../Note/Types"

//###  App  ###//
import {Mutable} from "@/Types/Mutable"


//##############################//
//###  Exports.Class.Public  ###//
//##############################//

export class Interval{

	static Error = ErrorContainer.Error

	readonly relativeValue: number
	readonly absoluteValue: number
	readonly shortName:     string
	readonly longName:      string
	readonly shortType:     string
	readonly longType:      string

	constructor(absoluteValue:number){
		if(absoluteValue === null)
			{return}

		if(absoluteValue < 0)
			{throw new Interval.Error.InvalidValue()}

		const octave            = Math.floor(absoluteValue / AbsoluteOctave)
		const baseAbsoluteValue = (absoluteValue % AbsoluteOctave)

		const baseInterval = DataMap.AbsoluteValue_To_BaseInterval[baseAbsoluteValue]

		const relativeValue = (baseInterval.relativeValue + (octave * RelativeOctave))

		return _Interval.construct_From_Data({
			shortType: baseInterval.shortType,
			relativeValue,
			absoluteValue,
		})
	}

	degree(root:(Note|NoteName|MidiValue)){
		return null
	}

	static add(...intervals:(Interval | number)[]){
		if(intervals.length < 2)
			{throw new Interval.Error.NotEnoughValues("add")}

		const sum = intervals.reduce((total:number, interval:Interval) => (
			(interval instanceof Interval)
			? (total + interval.absoluteValue)
			: (total + interval              )
		), 0) as number

		if(sum < 0)
			{throw new Interval.Error.InvalidResult("add", sum)}

		return new Interval(sum)
	}

	static subtract(...intervals:(Interval | number)[]){
		if(intervals.length < 2)
			{throw new Interval.Error.NotEnoughValues("subtract")}

		const startingValue =
			(intervals[0] instanceof Interval)
			? (intervals[0].absoluteValue * 2)
			: (intervals[0]               * 2)

		const sum = intervals.reduce((total:number, interval:Interval) => (
			(interval instanceof Interval)
			? (total - interval.absoluteValue)
			: (total - interval              )
		), startingValue) as number

		if(sum < 0)
			{throw new Interval.Error.InvalidResult("subtract", sum)}

		return new Interval(sum)
	}

}


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace Interval{
	export const [
		P1,  d2,  A1,  m2,  M2,  d3,  A2,  m3,  M3,  d4,
		A3,  P4,  A4,  d5,  P5,  d6,  A5,  m6,  M6,  d7,
		A6,  m7,  M7,  d8,  A7,  P8,  d9,  A8,  m9,  M9,
		d10, A9,  m10, M10, d11, A10, P11, A11, d12, P12,
		d13, A12, m13, M13, d14, A13, m14, M14, d15, A14, P15
	]: Interval[] = Array(51).fill(undefined)
}


//###################################//
//###  Exports.Namespace.Private  ###//
//###################################//

export namespace _Interval{

	export type IntervalValue = (Interval|number)

	export function construct_From_Data(
		{shortType,        relativeValue,        absoluteValue       }:
		{shortType:string, relativeValue:number, absoluteValue:number}
	){
		const interval = new Interval(null)

		const octave             = Math.floor(absoluteValue / AbsoluteOctave)
		const baseAbsoluteValue  = (absoluteValue % AbsoluteOctave)
		const relativeOffset     = DataMap.ShortType_To_RelativeOffset[shortType]
		const relativeName_Value = (relativeValue - relativeOffset)

		;(interval as Mutable<Interval>).relativeValue = relativeValue
		;(interval as Mutable<Interval>).absoluteValue = absoluteValue
		;(interval as Mutable<Interval>).shortType     = shortType
		;(interval as Mutable<Interval>).longType      = DataMap.ShortType_To_LongType[shortType]
		;(interval as Mutable<Interval>).shortName     = `${shortType}${relativeValue}`
		;(interval as Mutable<Interval>).longName      = DataMap.AbsoluteValue_To_LongName[baseAbsoluteValue](octave, relativeName_Value)

		return interval
	}

	export function ensure_Interval(interval:IntervalValue){
		return (
			(interval instanceof Interval)
			? interval
			: new Interval(interval)
		)
	}

}


//####################//
//###  Initialize  ###//
//####################//

import {DefaultInstances} from "./DefaultInstances"
DefaultInstances.initialize()
