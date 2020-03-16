//###  Module  ###//
import {MidiValue_Minimum, MidiValue_Maximum} from "./Constants"
import DefaultValues                          from "./DefaultValues"
import {Note as ErrorContainer}               from "./Error"
import {_BPM_Manager          }               from "../BPM_Manager/__Main__"
import {Chord                 }               from "../Chord/__Main__"
import {Interval, _Interval   }               from "../Interval/__Main__"
import {
	Accidental,
	MidiOctave, MidiValue,
	NoteName,
	Pitch, Pitches,
} from "./Types"

//###  App  ###//
import {RelativeTime} from "@/Time/__Main__"
import {Mutable     } from "@/Types/Mutable"


//##############################//
//###  Exports.Class.Public  ###//
//##############################//

export class Note{

	static Error = ErrorContainer.Error

	static get C_Negative1(){return _Note.C_Negative1.clone()}; static get C$_Negative1(){return _Note.C$_Negative1.clone()}; static get Db_Negative1(){return _Note.Db_Negative1.clone()}; static get D_Negative1(){return _Note.D_Negative1.clone()}; static get D$_Negative1(){return _Note.D$_Negative1.clone()}; static get Eb_Negative1(){return _Note.Eb_Negative1.clone()}; static get E_Negative1(){return _Note.E_Negative1.clone()}; static get F_Negative1(){return _Note.F_Negative1.clone()}; static get F$_Negative1(){return _Note.F$_Negative1.clone()}; static get Gb_Negative1(){return _Note.Gb_Negative1.clone()}; static get G_Negative1(){return _Note.G_Negative1.clone()}; static get G$_Negative1(){return _Note.G$_Negative1.clone()}; static get Ab_Negative1(){return _Note.Ab_Negative1.clone()}; static get A_Negative1(){return _Note.A_Negative1.clone()}; static get A$_Negative1(){return _Note.A$_Negative1.clone()}; static get Bb_Negative1(){return _Note.Bb_Negative1.clone()}; static get B_Negative1(){return _Note.B_Negative1.clone()};
	static get C0         (){return _Note.C0         .clone()}; static get C$0         (){return _Note.C$0         .clone()}; static get Db0         (){return _Note.Db0         .clone()}; static get D0         (){return _Note.D0         .clone()}; static get D$0         (){return _Note.D$0         .clone()}; static get Eb0         (){return _Note.Eb0         .clone()}; static get E0         (){return _Note.E0         .clone()}; static get F0         (){return _Note.F0         .clone()}; static get F$0         (){return _Note.F$0         .clone()}; static get Gb0         (){return _Note.Gb0         .clone()}; static get G0         (){return _Note.G0         .clone()}; static get G$0         (){return _Note.G$0         .clone()}; static get Ab0         (){return _Note.Ab0         .clone()}; static get A0         (){return _Note.A0         .clone()}; static get A$0         (){return _Note.A$0         .clone()}; static get Bb0         (){return _Note.Bb0         .clone()}; static get B0         (){return _Note.B0         .clone()};
	static get C1         (){return _Note.C1         .clone()}; static get C$1         (){return _Note.C$1         .clone()}; static get Db1         (){return _Note.Db1         .clone()}; static get D1         (){return _Note.D1         .clone()}; static get D$1         (){return _Note.D$1         .clone()}; static get Eb1         (){return _Note.Eb1         .clone()}; static get E1         (){return _Note.E1         .clone()}; static get F1         (){return _Note.F1         .clone()}; static get F$1         (){return _Note.F$1         .clone()}; static get Gb1         (){return _Note.Gb1         .clone()}; static get G1         (){return _Note.G1         .clone()}; static get G$1         (){return _Note.G$1         .clone()}; static get Ab1         (){return _Note.Ab1         .clone()}; static get A1         (){return _Note.A1         .clone()}; static get A$1         (){return _Note.A$1         .clone()}; static get Bb1         (){return _Note.Bb1         .clone()}; static get B1         (){return _Note.B1         .clone()};
	static get C2         (){return _Note.C2         .clone()}; static get C$2         (){return _Note.C$2         .clone()}; static get Db2         (){return _Note.Db2         .clone()}; static get D2         (){return _Note.D2         .clone()}; static get D$2         (){return _Note.D$2         .clone()}; static get Eb2         (){return _Note.Eb2         .clone()}; static get E2         (){return _Note.E2         .clone()}; static get F2         (){return _Note.F2         .clone()}; static get F$2         (){return _Note.F$2         .clone()}; static get Gb2         (){return _Note.Gb2         .clone()}; static get G2         (){return _Note.G2         .clone()}; static get G$2         (){return _Note.G$2         .clone()}; static get Ab2         (){return _Note.Ab2         .clone()}; static get A2         (){return _Note.A2         .clone()}; static get A$2         (){return _Note.A$2         .clone()}; static get Bb2         (){return _Note.Bb2         .clone()}; static get B2         (){return _Note.B2         .clone()};
	static get C3         (){return _Note.C3         .clone()}; static get C$3         (){return _Note.C$3         .clone()}; static get Db3         (){return _Note.Db3         .clone()}; static get D3         (){return _Note.D3         .clone()}; static get D$3         (){return _Note.D$3         .clone()}; static get Eb3         (){return _Note.Eb3         .clone()}; static get E3         (){return _Note.E3         .clone()}; static get F3         (){return _Note.F3         .clone()}; static get F$3         (){return _Note.F$3         .clone()}; static get Gb3         (){return _Note.Gb3         .clone()}; static get G3         (){return _Note.G3         .clone()}; static get G$3         (){return _Note.G$3         .clone()}; static get Ab3         (){return _Note.Ab3         .clone()}; static get A3         (){return _Note.A3         .clone()}; static get A$3         (){return _Note.A$3         .clone()}; static get Bb3         (){return _Note.Bb3         .clone()}; static get B3         (){return _Note.B3         .clone()};
	static get C4         (){return _Note.C4         .clone()}; static get C$4         (){return _Note.C$4         .clone()}; static get Db4         (){return _Note.Db4         .clone()}; static get D4         (){return _Note.D4         .clone()}; static get D$4         (){return _Note.D$4         .clone()}; static get Eb4         (){return _Note.Eb4         .clone()}; static get E4         (){return _Note.E4         .clone()}; static get F4         (){return _Note.F4         .clone()}; static get F$4         (){return _Note.F$4         .clone()}; static get Gb4         (){return _Note.Gb4         .clone()}; static get G4         (){return _Note.G4         .clone()}; static get G$4         (){return _Note.G$4         .clone()}; static get Ab4         (){return _Note.Ab4         .clone()}; static get A4         (){return _Note.A4         .clone()}; static get A$4         (){return _Note.A$4         .clone()}; static get Bb4         (){return _Note.Bb4         .clone()}; static get B4         (){return _Note.B4         .clone()};
	static get C5         (){return _Note.C5         .clone()}; static get C$5         (){return _Note.C$5         .clone()}; static get Db5         (){return _Note.Db5         .clone()}; static get D5         (){return _Note.D5         .clone()}; static get D$5         (){return _Note.D$5         .clone()}; static get Eb5         (){return _Note.Eb5         .clone()}; static get E5         (){return _Note.E5         .clone()}; static get F5         (){return _Note.F5         .clone()}; static get F$5         (){return _Note.F$5         .clone()}; static get Gb5         (){return _Note.Gb5         .clone()}; static get G5         (){return _Note.G5         .clone()}; static get G$5         (){return _Note.G$5         .clone()}; static get Ab5         (){return _Note.Ab5         .clone()}; static get A5         (){return _Note.A5         .clone()}; static get A$5         (){return _Note.A$5         .clone()}; static get Bb5         (){return _Note.Bb5         .clone()}; static get B5         (){return _Note.B5         .clone()};
	static get C6         (){return _Note.C6         .clone()}; static get C$6         (){return _Note.C$6         .clone()}; static get Db6         (){return _Note.Db6         .clone()}; static get D6         (){return _Note.D6         .clone()}; static get D$6         (){return _Note.D$6         .clone()}; static get Eb6         (){return _Note.Eb6         .clone()}; static get E6         (){return _Note.E6         .clone()}; static get F6         (){return _Note.F6         .clone()}; static get F$6         (){return _Note.F$6         .clone()}; static get Gb6         (){return _Note.Gb6         .clone()}; static get G6         (){return _Note.G6         .clone()}; static get G$6         (){return _Note.G$6         .clone()}; static get Ab6         (){return _Note.Ab6         .clone()}; static get A6         (){return _Note.A6         .clone()}; static get A$6         (){return _Note.A$6         .clone()}; static get Bb6         (){return _Note.Bb6         .clone()}; static get B6         (){return _Note.B6         .clone()};
	static get C7         (){return _Note.C7         .clone()}; static get C$7         (){return _Note.C$7         .clone()}; static get Db7         (){return _Note.Db7         .clone()}; static get D7         (){return _Note.D7         .clone()}; static get D$7         (){return _Note.D$7         .clone()}; static get Eb7         (){return _Note.Eb7         .clone()}; static get E7         (){return _Note.E7         .clone()}; static get F7         (){return _Note.F7         .clone()}; static get F$7         (){return _Note.F$7         .clone()}; static get Gb7         (){return _Note.Gb7         .clone()}; static get G7         (){return _Note.G7         .clone()}; static get G$7         (){return _Note.G$7         .clone()}; static get Ab7         (){return _Note.Ab7         .clone()}; static get A7         (){return _Note.A7         .clone()}; static get A$7         (){return _Note.A$7         .clone()}; static get Bb7         (){return _Note.Bb7         .clone()}; static get B7         (){return _Note.B7         .clone()};
	static get C8         (){return _Note.C8         .clone()}; static get C$8         (){return _Note.C$8         .clone()}; static get Db8         (){return _Note.Db8         .clone()}; static get D8         (){return _Note.D8         .clone()}; static get D$8         (){return _Note.D$8         .clone()}; static get Eb8         (){return _Note.Eb8         .clone()}; static get E8         (){return _Note.E8         .clone()}; static get F8         (){return _Note.F8         .clone()}; static get F$8         (){return _Note.F$8         .clone()}; static get Gb8         (){return _Note.Gb8         .clone()}; static get G8         (){return _Note.G8         .clone()}; static get G$8         (){return _Note.G$8         .clone()}; static get Ab8         (){return _Note.Ab8         .clone()}; static get A8         (){return _Note.A8         .clone()}; static get A$8         (){return _Note.A$8         .clone()}; static get Bb8         (){return _Note.Bb8         .clone()}; static get B8         (){return _Note.B8         .clone()};
	static get C9         (){return _Note.C9         .clone()}; static get C$9         (){return _Note.C$9         .clone()}; static get Db9         (){return _Note.Db9         .clone()}; static get D9         (){return _Note.D9         .clone()}; static get D$9         (){return _Note.D$9         .clone()}; static get Eb9         (){return _Note.Eb9         .clone()}; static get E9         (){return _Note.E9         .clone()}; static get F9         (){return _Note.F9         .clone()}; static get F$9         (){return _Note.F$9         .clone()}; static get Gb9         (){return _Note.Gb9         .clone()}; static get G9         (){return _Note.G9         .clone()};

	readonly accidental: Accidental
	readonly cents:      number
	readonly hertz:      number
	readonly midiValue:  MidiValue
	readonly name:       NoteName
	readonly octave:     MidiOctave
	readonly pitch:      Pitch

	velocity:  MidiValue
	_delay:    (number|string|RelativeTime|RelativeTime.Components)
	_duration: (number|string|RelativeTime|RelativeTime.Components)

	constructor(
		value: (NoteName|MidiValue),
		options?:{
			velocity?: MidiValue,
			duration?: (number|string|RelativeTime|RelativeTime.Components),
			delay?:    (number|string|RelativeTime|RelativeTime.Components),
		}
	){
		if(value === null)
			{return}

		const referenceNote =
			(typeof value == "string")
			? DataMap.NoteName_To_Note [value]
			: DataMap.MidiValue_To_Note[value]

		return _Note.construct_From_Data(referenceNote, options)
	}

	get delay(): (number|string|RelativeTime|RelativeTime.Components)
		{return _BPM_Manager.get_Duration_InMilliseconds(this._delay)}

	get duration(): (number|string|RelativeTime|RelativeTime.Components)
		{return _BPM_Manager.get_Duration_InMilliseconds(this._duration)}

	get velocityDecimal()
		{return (this.velocity / MidiValue_Maximum)}

	clone({
		velocity,
		duration,
		delay,
	}:{
		velocity?: MidiValue,
		duration?: (number|string|RelativeTime|RelativeTime.Components),
		delay?:    (number|string|RelativeTime|RelativeTime.Components),
	}={}){
		return _Note.construct_From_Data(this, {
			velocity: (velocity || this.velocity ),
			duration: (duration || this._duration),
			delay:    (delay    || this._delay   ),
		})
	}

	chord(
		intervals: ((Interval|number)[] | Readonly<Interval[]>),
		options?:{
			velocity?: MidiValue,
			duration?: (number|string|RelativeTime|RelativeTime.Components),
			delay?:    (number|string|RelativeTime|RelativeTime.Components),
		}
	){
		options = (options || {})

		return new Chord({
			intervals,
			root:     this,
			velocity: options.velocity,
			duration: options.duration,
			delay:    options.delay,
		})
	}

	static add(note:(Note|NoteName|MidiValue), interval:(Interval|number))
		{return this._adjust(note, interval, "add")}
	static subtract(note:(Note|NoteName|MidiValue), interval:(Interval|number))
		{return this._adjust(note, interval, "subtract")}

	add(interval:(Interval|number))
		{return Note._adjust(this, interval, "add")}
	subtract(interval:(Interval|number))
		{return Note._adjust(this, interval, "subtract")}

	private static _adjust(note:_Note.Value, interval:_Interval.IntervalValue, mode:("add"|"subtract")){
		const _note     = _Note    .ensure_Note    (note    )

		const intervalValue =
			(interval instanceof Interval)
			? interval.absoluteValue
			: interval

		const newNote_Index = (
			(mode == "add")
			? _note.midiValue + intervalValue
			: _note.midiValue - intervalValue
		)

		const invalidIndex = ((newNote_Index < MidiValue_Minimum) || (newNote_Index > MidiValue_Maximum))
		if(invalidIndex)
			{throw new Note.Error.InvalidResult(mode, newNote_Index)}

		return new Note((newNote_Index as MidiValue), {
			velocity: _note.velocity,
			duration: _note._duration,
			delay:    _note._delay,
		})
	}

}


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace Note{

	export const [
		C, C$, Db, D, D$, Eb, E, F, F$, Gb, G, G$, Ab, A, A$, Bb, B,
	]: Pitch[] = [...Pitches]

}


//###################################//
//###  Exports.Namespace.Private  ###//
//###################################//

export namespace _Note{

	export type Value = (Note|NoteName|MidiValue)

	export type Options = {
		velocity?: MidiValue,
		duration?: (number|string|RelativeTime|RelativeTime.Components),
		delay?:    (number|string|RelativeTime|RelativeTime.Components),
	}

	export const [
		C_Negative1, C$_Negative1, Db_Negative1, D_Negative1, D$_Negative1, Eb_Negative1, E_Negative1, F_Negative1, F$_Negative1, Gb_Negative1, G_Negative1, G$_Negative1, Ab_Negative1, A_Negative1, A$_Negative1, Bb_Negative1, B_Negative1,
		C0,          C$0,          Db0,          D0,          D$0,          Eb0,          E0,          F0,          F$0,          Gb0,          G0,          G$0,          Ab0,          A0,          A$0,          Bb0,          B0,
		C1,          C$1,          Db1,          D1,          D$1,          Eb1,          E1,          F1,          F$1,          Gb1,          G1,          G$1,          Ab1,          A1,          A$1,          Bb1,          B1,
		C2,          C$2,          Db2,          D2,          D$2,          Eb2,          E2,          F2,          F$2,          Gb2,          G2,          G$2,          Ab2,          A2,          A$2,          Bb2,          B2,
		C3,          C$3,          Db3,          D3,          D$3,          Eb3,          E3,          F3,          F$3,          Gb3,          G3,          G$3,          Ab3,          A3,          A$3,          Bb3,          B3,
		C4,          C$4,          Db4,          D4,          D$4,          Eb4,          E4,          F4,          F$4,          Gb4,          G4,          G$4,          Ab4,          A4,          A$4,          Bb4,          B4,
		C5,          C$5,          Db5,          D5,          D$5,          Eb5,          E5,          F5,          F$5,          Gb5,          G5,          G$5,          Ab5,          A5,          A$5,          Bb5,          B5,
		C6,          C$6,          Db6,          D6,          D$6,          Eb6,          E6,          F6,          F$6,          Gb6,          G6,          G$6,          Ab6,          A6,          A$6,          Bb6,          B6,
		C7,          C$7,          Db7,          D7,          D$7,          Eb7,          E7,          F7,          F$7,          Gb7,          G7,          G$7,          Ab7,          A7,          A$7,          Bb7,          B7,
		C8,          C$8,          Db8,          D8,          D$8,          Eb8,          E8,          F8,          F$8,          Gb8,          G8,          G$8,          Ab8,          A8,          A$8,          Bb8,          B8,
		C9,          C$9,          Db9,          D9,          D$9,          Eb9,          E9,          F9,          F$9,          Gb9,          G9,
	]: Note[] = Array(181).fill(undefined)

	export const All_Notes:       Readonly<Note>[] = undefined
	export const All_Notes_Sharp: Readonly<Note>[] = undefined
	export const All_Notes_Flat:  Readonly<Note>[] = undefined

	export function construct_From_Data(
		{accidental,            cents,        hertz,        midiValue,           name,          octave,            pitch      }:
		{accidental:Accidental, cents:number, hertz:number, midiValue:MidiValue, name:NoteName, octave:MidiOctave, pitch:Pitch},
		options?:Options
	){
		options = (options || {})

		const note = new Note(null)

		;(note as Mutable<Note>).accidental = accidental
		;(note as Mutable<Note>).cents      = cents
		;(note as Mutable<Note>).hertz      = hertz
		;(note as Mutable<Note>).midiValue  = midiValue
		;(note as Mutable<Note>).name       = name
		;(note as Mutable<Note>).octave     = octave
		;(note as Mutable<Note>).pitch      = pitch
		;(note as Mutable<Note>).velocity   = (options.velocity || DefaultValues.velocity)
		;(note as Mutable<Note>)._duration  = (options.duration || DefaultValues.duration)
		;(note as Mutable<Note>)._delay     = (options.delay    || DefaultValues.delay   )

		return note
	}

	export function ensure_Note(note:Value){
		return (
			(note instanceof Note)
			? note
			: new Note(note)
		)
	}

	export function get_MidiValue_From_Note(note:Value){
		if(note instanceof Note)
			{return note.midiValue}
		else if(typeof note == "string")
			{return DataMap.NoteName_To_Note[note].midiValue}
		else
			{return DataMap.MidiValue_To_Note[note].midiValue}
	}

	export function get_NoteRange(
		{start,             end,       accidental            }:
		{start:_Note.Value, end:Value, accidental?:Accidental}
	){
		let from_MidiValue = (start) ? _Note.get_MidiValue_From_Note(start) : MidiValue_Minimum
		let to_MidiValue   = (end  ) ? _Note.get_MidiValue_From_Note(end  ) : MidiValue_Maximum

		if(from_MidiValue > to_MidiValue)
			{[from_MidiValue, to_MidiValue] = [to_MidiValue, from_MidiValue]}

		const allNotes =
			(accidental == "b")
			? All_Notes_Flat
			: All_Notes_Sharp

		return allNotes.filter(note => (
			((note.midiValue >= from_MidiValue)
			&& (note.midiValue <= to_MidiValue))
		))
	}

}


//####################//
//###  Initialize  ###//
//####################//

import {DefaultInstances} from "./DefaultInstances"
DefaultInstances.initialize()

import DataMap from "./DataMap"
