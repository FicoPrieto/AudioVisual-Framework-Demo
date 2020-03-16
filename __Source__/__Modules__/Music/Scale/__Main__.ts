//###  Module  ###//
import DataMap                      from "./DataMap"
import {ScaleInterval }             from "./Types"
import {_BPM_Manager  }             from "../BPM_Manager/__Main__"
import {Interval      }             from "../Interval/__Main__"
import {Note, _Note   }             from "../Note/__Main__"
import {AbsoluteOctave}             from "../Note/Constants"
import NoteDataMap                  from "../Note/DataMap"
import {NoteName, MidiValue, Pitch} from "../Note/Types"

//###  App  ###//
import {RelativeTime} from "@/Time/__Main__"


//##############################//
//###  Exports.Class.Public  ###//
//##############################//

export class Scale{

	readonly intervals: Interval[]

	constructor(...intervals:(Interval|ScaleInterval)[]){
		this.intervals = []

		for(const interval of intervals){
			if(interval instanceof Interval)
				{this.intervals.push(interval)}
			else{
				const absoluteValue = DataMap.ScaleInterval_To_AbsoluteValue[interval]
				this.intervals.push(new Interval(absoluteValue))
			}
		}
	}

	notes(
		root: Pitch,
		options?:{
			from?:     (Note|NoteName|MidiValue)
			to?:       (Note|NoteName|MidiValue)
			velocity?: MidiValue,
			duration?: (number|string|RelativeTime|RelativeTime.Components),
			delay?:    (number|string|RelativeTime|RelativeTime.Components),
		}
	){
		options = (options || {})

		const inRange_Notes = _Note.get_NoteRange({start:options.from, end:options.to})
		const scalePitches  = _get_ScalePitches(this.intervals, root)

		return (
			inRange_Notes
				.filter(note => scalePitches.includes(note.pitch))
				.map   (note => note.clone(options)              )
		)
	}

}


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace Scale{

	export const [
		Chromatic,              Ionian,                 Dorian,                 Phrygian,              Lydian,
		Mixolydian,             Aeolian,                Locrian,                Aeolian_HarmonicMinor, Locrian_HarmonicMinor_1,
		Ionian_HarmonicMinor,   Dorian_HarmonicMinor,   Phrygian_HarmonicMinor, Lydian_HarmonicMinor,  Locrian_HarmonicMinor_2,
		Aeolian_MelodicMinor_1, Phrygian_MelodicMinor,  Lydian_MelodicMinor_1,  Lydian_MelodicMinor_2, Aeolian_MelodicMinor_2,
		Locrian_MelodicMinor_1, Locrian_MelodicMinor_2, Major,                  HarmonicMinor,         MelodicMinor,
		NaturalMinor,           Bebop_Dominant,         Bebop_Major,            Bebop_HarmonicMinor,   Bebop_MelodicMinor,
		Blues_Major,            Blues_Minor,            Blues_Diminished,       Blues_Pentatonic,      Blues_Rock,
		Gypsy_Major,            Gypsy_Minor,            Gypsy_Hungarian,        Gypsy_Spanish,         Pentatonic_Major,
		Pentatonic_Neutral,     Pentatonic_Rock,        Pentatonic_Scottish,    Pentatonic_Minor,      WholeTone,
		Whole_Half,             Half_Whole,             Augmented,              Byzantine,             Enigmatic_Ascending,
		Enigmatic_Descending,   Hungarian_Major,        Hungarian_Minor,        Neapolitan_Major,      Neapolitan_Minor,
		Overtone,               Prometheus,             Prometheus_Neapolitan,  Spanish_8_Tone,
	]: Scale[] = Array(59).fill(undefined)

	export const A: _Scale.DefaultScales = undefined
	export const Bb:_Scale.DefaultScales = undefined
	export const A$:_Scale.DefaultScales = undefined
	export const B: _Scale.DefaultScales = undefined
	export const C: _Scale.DefaultScales = undefined
	export const C$:_Scale.DefaultScales = undefined
	export const Db:_Scale.DefaultScales = undefined
	export const D: _Scale.DefaultScales = undefined
	export const Eb:_Scale.DefaultScales = undefined
	export const D$:_Scale.DefaultScales = undefined
	export const E: _Scale.DefaultScales = undefined
	export const F: _Scale.DefaultScales = undefined
	export const F$:_Scale.DefaultScales = undefined
	export const Gb:_Scale.DefaultScales = undefined
	export const G: _Scale.DefaultScales = undefined
	export const G$:_Scale.DefaultScales = undefined
	export const Ab:_Scale.DefaultScales = undefined

}

//###################################//
//###  Exports.Namespace.Private  ###//
//###################################//

export namespace _Scale{

	export type DefaultScales = {
		 Chromatic:             Note[], Ionian:                Note[], Dorian:                Note[], Phrygian:             Note[], Lydian:                 Note[],
		 Mixolydian:            Note[], Aeolian:               Note[], Locrian:               Note[], Aeolian_HarmonicMinor:Note[], Locrian_HarmonicMinor_1:Note[],
		 Ionian_HarmonicMinor:  Note[], Dorian_HarmonicMinor:  Note[], Phrygian_HarmonicMinor:Note[], Lydian_HarmonicMinor: Note[], Locrian_HarmonicMinor_2:Note[],
		 Aeolian_MelodicMinor_1:Note[], Phrygian_MelodicMinor: Note[], Lydian_MelodicMinor_1: Note[], Lydian_MelodicMinor_2:Note[], Aeolian_MelodicMinor_2: Note[],
		 Locrian_MelodicMinor_1:Note[], Locrian_MelodicMinor_2:Note[], Major:                 Note[], HarmonicMinor:        Note[], MelodicMinor:           Note[],
		 NaturalMinor:          Note[], Bebop_Dominant:        Note[], Bebop_Major:           Note[], Bebop_HarmonicMinor:  Note[], Bebop_MelodicMinor:     Note[],
		 Blues_Major:           Note[], Blues_Minor:           Note[], Blues_Diminished:      Note[], Blues_Pentatonic:     Note[], Blues_Rock:             Note[],
		 Gypsy_Major:           Note[], Gypsy_Minor:           Note[], Gypsy_Hungarian:       Note[], Gypsy_Spanish:        Note[], Pentatonic_Major:       Note[],
		 Pentatonic_Neutral:    Note[], Pentatonic_Rock:       Note[], Pentatonic_Scottish:   Note[], Pentatonic_Minor:     Note[], WholeTone:              Note[],
		 Whole_Half:            Note[], Half_Whole:            Note[], Augmented:             Note[], Byzantine:            Note[], Enigmatic_Ascending:    Note[],
		 Enigmatic_Descending:  Note[], Hungarian_Major:       Note[], Hungarian_Minor:       Note[], Neapolitan_Major:     Note[], Neapolitan_Minor:       Note[],
		 Overtone:              Note[], Prometheus:            Note[], Prometheus_Neapolitan: Note[], Spanish_8_Tone:       Note[],
	}

}


//###################//
//###  Utilities  ###//
//###################//

function _get_ScalePitches(intervals:Interval[], root:Pitch){
	const sharpPitch = NoteDataMap.FlatPitch_To_SharpPitch[root]

	const pitchRoot = _Note.All_Notes_Sharp.find(note => (
		(note.pitch == sharpPitch)
		&& (note.octave == 0)
	))

	const chromaticOctave = [
		pitchRoot.midiValue,
		...new Array(AbsoluteOctave - 1).fill(null).map(
			(_, i) => (pitchRoot.midiValue + (i + 1))
		)
	]

	return (
		chromaticOctave
			.filter(midiValue => (
				intervals.some(interval => {
					const newValue = (pitchRoot.midiValue + interval.absoluteValue)
					return (midiValue == newValue)
				})
			))
			.map(midiValue => new Note(midiValue as MidiValue).pitch)
	)
}


//####################//
//###  Initialize  ###//
//####################//

import {DefaultInstances} from "./DefaultInstances"
DefaultInstances.initialize()
