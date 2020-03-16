//###  Module  ###//
import {Chord as ErrorContainer        } from "./Error"
import {_BPM_Manager                   } from "../BPM_Manager/__Main__"
import {Interval, _Interval            } from "../Interval/__Main__"
import {Note, _Note                    } from "../Note/__Main__"
import {NoteName, MidiOctave, MidiValue} from "../Note/Types"

//###  App  ###//
import {RelativeTime} from "@/Time/__Main__"


//##############################//
//###  Exports.Class.Public  ###//
//##############################//

export class Chord{

	static Error = ErrorContainer.Error

	readonly _notes: Readonly<Note[]>

	velocity: MidiValue
	duration: RelativeTime
	delay:    RelativeTime

	constructor(
		notes: (Note|NoteName|MidiValue)[],
		options?:{
			velocity?: MidiValue,
			duration?: (number|string|RelativeTime|RelativeTime.Components),
			delay?:    (number|string|RelativeTime|RelativeTime.Components),
		}
	)
	constructor({
		root,
		intervals,
		velocity,
		duration,
		delay
	}:{
		root:      (Note|NoteName|MidiValue),
		intervals: ((Interval|number)[] | Readonly<Interval[]>),
		velocity?: MidiValue,
		duration?: (number|string|RelativeTime|RelativeTime.Components),
		delay?:    (number|string|RelativeTime|RelativeTime.Components),
	})
	constructor(arg_1:(_Note.Value[]|_NotesFromIntervals_Options), arg_2?:_Note.Options){
		const {notes, options} =
			((arg_1 as _NotesFromIntervals_Options).root)
			? {notes:null,                     options:(arg_1         as _NotesFromIntervals_Options)}
			: {notes:(arg_1 as _Note.Value[]), options:((arg_2 || {}) as _Note.Options              )}

		this.velocity = (options.velocity) ? options.velocity                                           : null
		this.duration = (options.duration) ? _BPM_Manager.get_Duration_InMilliseconds(options.duration) : null
		this.delay    = (options.delay   ) ? _BPM_Manager.get_Duration_InMilliseconds(options.delay   ) : null

		if(notes)
			{this._notes = _get_Notes_From_Notes(notes, options)}
		else
			{this._notes = _get_Notes_From_Intervals(options as _NotesFromIntervals_Options)}

		this._notes = _remove_DuplicateNotes(this._notes)

		if(this._notes.length < 1)
			{throw new Chord.Error.NotEnoughValues()}
	}

	get notes()
		{return this._notes.map(note => note.clone())}

	alter(alterations:{[index:number]:{add?:(Interval|number), subtract?:(Interval|number)}}){
		const notes = this.notes

		for(const [index, adjustment] of Object.entries(alterations)){
			const _index = parseInt(index)
			if((_index >= (this._notes.length)) || (_index < 0))
				{throw new Chord.Error.InvalidNoteIndex("alter", _index)}

			for(const [operation, value] of Object.entries(adjustment))
				{notes[index] = notes[index][operation](value)}
		}

		return notes
	}

	static add(...notes:(Chord|Note)[]){
		const _notes:Note[] = []
		for(const note of notes){
			if(note instanceof Chord)
				{_notes.push(...note.notes)}
			else
				{_notes.push(note)}
		}

		return new Chord(_notes)
	}

	add(...notes:(Chord|Note)[])
		{return Chord.add(...this.notes, ...notes)}

}


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace Chord{

	export const [
		Major,                     MajorSixth,               Six_Nine,                 AddedNinth,              MajorSeventh,
		MajorSeventh_FlatFive,     MajorSeventh_SharpFive,   MajorNinth,               MajorEleventh,           MajorThirteenth,
		MajorSeven_SharpEleventh,  Major_FlatFive,           Minor,                    MinorSixth,              MinorSeventh,
		Minor_AddedNinth,          MinorSix_AddNine,         MinorNinth,               MinorEleventh,           MinorThirteenth,
		Minor_MajorSeventh,        Minor_MajorNinth,         Minor_MajorEleventh,      Minor_MajorThirteenth,   MinorSeven_FlatFive,
		DominantSeventh,           Ninth,                    Eleventh,                 Thirteenth,              Seven_SharpFive,
		Seven_FlatFive,            Seven_FlatNinth,          Seven_SharpNinth,         Nine_SharpFive,          Nine_FlatFive,
		Seven_SharpFive_SharpNine, Seven_SharpFive_FlatNine, Seven_FlatFive_SharpNine, Seven_FlatFive_FlatNine, Seven_SharpEleven,
		Diminished,                DiminishedSeventh,        HalfDiminished,           SuspendedSeventh,        Augmented,
		AugmentedSeventh,          FifthPowerChord,          FlatFifth,                SuspendedSecond,         SuspendedFourth,
	]: Readonly<Interval[]>[] = Array(50).fill(undefined)

	export const A:  _ChordGenerators = undefined
	export const Bb: _ChordGenerators = undefined
	export const A$: _ChordGenerators = undefined
	export const B:  _ChordGenerators = undefined
	export const C:  _ChordGenerators = undefined
	export const C$: _ChordGenerators = undefined
	export const Db: _ChordGenerators = undefined
	export const D:  _ChordGenerators = undefined
	export const Eb: _ChordGenerators = undefined
	export const D$: _ChordGenerators = undefined
	export const E:  _ChordGenerators = undefined
	export const F:  _ChordGenerators = undefined
	export const F$: _ChordGenerators = undefined
	export const Gb: _ChordGenerators = undefined
	export const G:  _ChordGenerators = undefined
	export const Ab: _ChordGenerators = undefined
	export const G$: _ChordGenerators = undefined

	type _ChordGenerators = {
		Major:                    _Chord.Generator, MajorSixth:              _Chord.Generator, Six_Nine:                _Chord.Generator, AddedNinth:             _Chord.Generator, MajorSeventh:       _Chord.Generator,
		MajorSeventh_FlatFive:    _Chord.Generator, MajorSeventh_SharpFive:  _Chord.Generator, MajorNinth:              _Chord.Generator, MajorEleventh:          _Chord.Generator, MajorThirteenth:    _Chord.Generator,
		MajorSeven_SharpEleventh: _Chord.Generator, Major_FlatFive:          _Chord.Generator, Minor:                   _Chord.Generator, MinorSixth:             _Chord.Generator, MinorSeventh:       _Chord.Generator,
		Minor_AddedNinth:         _Chord.Generator, MinorSix_AddNine:        _Chord.Generator, MinorNinth:              _Chord.Generator, MinorEleventh:          _Chord.Generator, MinorThirteenth:    _Chord.Generator,
		Minor_MajorSeventh:       _Chord.Generator, Minor_MajorNinth:        _Chord.Generator, Minor_MajorEleventh:     _Chord.Generator, Minor_MajorThirteenth:  _Chord.Generator, MinorSeven_FlatFive:_Chord.Generator,
		DominantSeventh:          _Chord.Generator, Ninth:                   _Chord.Generator, Eleventh:                _Chord.Generator, Thirteenth:             _Chord.Generator, Seven_SharpFive:    _Chord.Generator,
		Seven_FlatFive:           _Chord.Generator, Seven_FlatNinth:         _Chord.Generator, Seven_SharpNinth:        _Chord.Generator, Nine_SharpFive:         _Chord.Generator, Nine_FlatFive:      _Chord.Generator,
		Seven_SharpFive_SharpNine:_Chord.Generator, Seven_SharpFive_FlatNine:_Chord.Generator, Seven_FlatFive_SharpNine:_Chord.Generator, Seven_FlatFive_FlatNine:_Chord.Generator, Seven_SharpEleven:  _Chord.Generator,
		Diminished:               _Chord.Generator, DiminishedSeventh:       _Chord.Generator, HalfDiminished:          _Chord.Generator, SuspendedSeventh:       _Chord.Generator, Augmented:          _Chord.Generator,
		AugmentedSeventh:         _Chord.Generator, FifthPowerChord:         _Chord.Generator, FlatFifth:               _Chord.Generator, SuspendedSecond:        _Chord.Generator, SuspendedFourth:    _Chord.Generator,
	}

}


//###################################//
//###  Exports.Namespace.Private  ###//
//###################################//

export namespace _Chord{

	export type Generator = (octave:MidiOctave, options?:_Note.Options) => Chord

	export type Alteration = {[index:number]:{
		add?:      (Interval|number),
		subtract?: (Interval|number)
	}}

	export const All_IntervalArrays: Readonly<Interval[]>[] = []

}


//###################//
//###  Utilities  ###//
//###################//

interface _NotesFromIntervals_Options extends _Note.Options{
	root:      (Note|NoteName|MidiValue),
	intervals: ((Interval|number)[] | Readonly<Interval[]>)
}

function _get_Notes_From_Notes(
	notes:  _Note.Value[],
	options:_Note.Options,
){
	return notes.map(note => {
		if(note instanceof Note){
			return new Note(note.midiValue, {
				velocity: (options.velocity || note.velocity),
				duration: (options.duration || note.duration),
				delay:    (options.delay    || note.delay   ),
			})
		}
		else{
			return new Note(note, {
				velocity: options.velocity,
				duration: options.duration,
				delay:    options.delay
			})
		}
	})
}

function _get_Notes_From_Intervals(options:_NotesFromIntervals_Options){
	const {root, intervals, velocity, duration, delay} = options

	const _root =
		(root instanceof Note)
		? new Note(root.midiValue, {
			velocity: (velocity || root.velocity),
			duration: (duration || root.duration),
			delay:    (delay    || root.delay   ),
		})
		: new Note(root, {velocity, duration, delay})

	const _intervals = [Interval.P1, ...intervals]

	const notes = _intervals.map(interval => new Note(
		Note.add(_root, interval).midiValue,
		{
			velocity,
			duration,
			delay,
		}
	))

	return notes
}

function _remove_DuplicateNotes(notes:(Note[]|Readonly<Note[]>)){
	const _notes_MidiValues = []
	const _notes            = []

	for(const note of notes){
		if(! _notes_MidiValues.includes(note.midiValue)){
			_notes_MidiValues.push(note.midiValue)
			_notes.push(note)
		}
	}

	return _notes
}


//####################//
//###  Initialize  ###//
//####################//

import {DefaultInstances} from "./DefaultInstances"
DefaultInstances.initialize()
