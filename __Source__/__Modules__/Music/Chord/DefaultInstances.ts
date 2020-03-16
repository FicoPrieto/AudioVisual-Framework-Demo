//###  Reference  ###//
// http://www.guitarhabits.com/how-to-use-chord-formulas-and-their-benefits

//###  Module  ###//
import {Chord, _Chord                                } from "./__Main__"
import {Interval                                     } from "../Interval/__Main__"
import {Note, _Note                                  } from "../Note/__Main__"
import {Pitches, PitchVariables, MidiOctave, NoteName} from "../Note/Types"


//###############//
//###  Setup  ###//
//###############//

const I = Interval


//##############################//
//###  Exports.Class.Public  ###//
//##############################//

export class DefaultInstances{
	static initialize(){
		_initialize_IntervalArrays()
		_initialize_All_IntervalArrays()
		_initialize_ChordGenerators()
	}
}


//###############//
//###  Data  ###//
//###############//

const _ChordData = [
	//  Major  ------------------------------------------------------------------------------------------------------//
	{chordName:"Major",                     create:(() => Object.freeze([I.P1, I.M3, I.P5                          ]))},
	{chordName:"MajorSixth",                create:(() => Object.freeze([I.P1, I.M3, I.P5, I.M6                    ]))},
	{chordName:"Six_Nine",                  create:(() => Object.freeze([I.P1, I.M3, I.P5, I.M6, I.M9              ]))},
	{chordName:"AddedNinth",                create:(() => Object.freeze([I.P1, I.M3, I.P5, I.M9                    ]))},
	{chordName:"MajorSeventh",              create:(() => Object.freeze([I.P1, I.M3, I.P5, I.M7                    ]))},
	{chordName:"MajorSeventh_FlatFive",     create:(() => Object.freeze([I.P1, I.M3, I.d5, I.M7                    ]))},
	{chordName:"MajorSeventh_SharpFive",    create:(() => Object.freeze([I.P1, I.M3, I.A5, I.M7                    ]))},
	{chordName:"MajorNinth",                create:(() => Object.freeze([I.P1, I.M3, I.P5, I.M7, I.M9              ]))},
	{chordName:"MajorEleventh",             create:(() => Object.freeze([I.P1, I.M3, I.P5, I.M7, I.M9, I.P11       ]))},
	{chordName:"MajorThirteenth",           create:(() => Object.freeze([I.P1, I.M3, I.P5, I.M7, I.M9, I.P11, I.M13]))},
	{chordName:"MajorSeven_SharpEleventh",  create:(() => Object.freeze([I.P1, I.M3, I.P5, I.M7, I.A11             ]))},
	{chordName:"Major_FlatFive",            create:(() => Object.freeze([I.P1, I.M3, I.d5                          ]))},
	//  Minor  ------------------------------------------------------------------------------------------------------//
	{chordName:"Minor",                     create:(() => Object.freeze([I.P1, I.m3, I.P5                          ]))},
	{chordName:"MinorSixth",                create:(() => Object.freeze([I.P1, I.m3, I.P5, I.M6                    ]))},
	{chordName:"MinorSeventh",              create:(() => Object.freeze([I.P1, I.m3, I.P5, I.m7                    ]))},
	{chordName:"Minor_AddedNinth",          create:(() => Object.freeze([I.P1, I.m3, I.P5, I.M9                    ]))},
	{chordName:"MinorSix_AddNine",          create:(() => Object.freeze([I.P1, I.m3, I.P5, I.M6, I.M9              ]))},
	{chordName:"MinorNinth",                create:(() => Object.freeze([I.P1, I.m3, I.P5, I.m7, I.M9              ]))},
	{chordName:"MinorEleventh",             create:(() => Object.freeze([I.P1, I.m3, I.P5, I.m7, I.M9, I.P11       ]))},
	{chordName:"MinorThirteenth",           create:(() => Object.freeze([I.P1, I.m3, I.P5, I.m7, I.M9, I.P11, I.M13]))},
	{chordName:"Minor_MajorSeventh",        create:(() => Object.freeze([I.P1, I.m3, I.P5, I.M7                    ]))},
	{chordName:"Minor_MajorNinth",          create:(() => Object.freeze([I.P1, I.m3, I.P5, I.M7, I.M9              ]))},
	{chordName:"Minor_MajorEleventh",       create:(() => Object.freeze([I.P1, I.m3, I.P5, I.M7, I.M9, I.P11       ]))},
	{chordName:"Minor_MajorThirteenth",     create:(() => Object.freeze([I.P1, I.m3, I.P5, I.M7, I.M9, I.P11, I.M13]))},
	{chordName:"MinorSeven_FlatFive",       create:(() => Object.freeze([I.P1, I.m3, I.d5, I.m7                    ]))},
	//  Dominant  ---------------------------------------------------------------------------------------------------//
	{chordName:"DominantSeventh",           create:(() => Object.freeze([I.P1, I.M3, I.P5, I.m7                    ]))},
	{chordName:"Ninth",                     create:(() => Object.freeze([I.P1, I.M3, I.P5, I.m7, I.M9              ]))},
	{chordName:"Eleventh",                  create:(() => Object.freeze([I.P1, I.M3, I.P5, I.m7, I.M9, I.P11       ]))},
	{chordName:"Thirteenth",                create:(() => Object.freeze([I.P1, I.M3, I.P5, I.m7, I.M9, I.P11, I.M13]))},
	{chordName:"Seven_SharpFive",           create:(() => Object.freeze([I.P1, I.M3, I.A5, I.m7                    ]))},
	{chordName:"Seven_FlatFive",            create:(() => Object.freeze([I.P1, I.M3, I.d5, I.m7                    ]))},
	{chordName:"Seven_FlatNinth",           create:(() => Object.freeze([I.P1, I.M3, I.P5, I.m7, I.d9              ]))},
	{chordName:"Seven_SharpNinth",          create:(() => Object.freeze([I.P1, I.M3, I.P5, I.m7, I.A9              ]))},
	{chordName:"Nine_SharpFive",            create:(() => Object.freeze([I.P1, I.M3, I.A5, I.m7, I.M9              ]))},
	{chordName:"Nine_FlatFive",             create:(() => Object.freeze([I.P1, I.M3, I.d5, I.m7, I.M9              ]))},
	{chordName:"Seven_SharpFive_SharpNine", create:(() => Object.freeze([I.P1, I.M3, I.A5, I.m7, I.A9              ]))},
	{chordName:"Seven_SharpFive_FlatNine",  create:(() => Object.freeze([I.P1, I.M3, I.A5, I.m7, I.d9              ]))},
	{chordName:"Seven_FlatFive_SharpNine",  create:(() => Object.freeze([I.P1, I.M3, I.d5, I.m7, I.A9              ]))},
	{chordName:"Seven_FlatFive_FlatNine",   create:(() => Object.freeze([I.P1, I.M3, I.d5, I.m7, I.d9              ]))},
	{chordName:"Seven_SharpEleven",         create:(() => Object.freeze([I.P1, I.M3, I.P5, I.m7, I.A11             ]))},
	//  Miscellaneous  ----------------------------------------------------------------------------------------------//
	{chordName:"Diminished",                create:(() => Object.freeze([I.P1, I.m3, I.d5                          ]))},
	{chordName:"DiminishedSeventh",         create:(() => Object.freeze([I.P1, I.m3, I.d5, I.d7                    ]))},
	{chordName:"HalfDiminished",            create:(() => Object.freeze([I.P1, I.m3, I.d5, I.m7                    ]))},
	{chordName:"SuspendedSeventh",          create:(() => Object.freeze([I.P1, I.P4, I.P5, I.m7                    ]))},
	{chordName:"Augmented",                 create:(() => Object.freeze([I.P1, I.M3, I.A5                          ]))},
	{chordName:"AugmentedSeventh",          create:(() => Object.freeze([I.P1, I.M3, I.A5, I.m7                    ]))},
	{chordName:"FifthPowerChord",           create:(() => Object.freeze([I.P1, I.P5                                ]))},
	{chordName:"FlatFifth",                 create:(() => Object.freeze([I.P1, I.d5                                ]))},
	{chordName:"SuspendedSecond",           create:(() => Object.freeze([I.P1, I.M2, I.P5                          ]))},
	{chordName:"SuspendedFourth",           create:(() => Object.freeze([I.P1, I.P4, I.P5                          ]))},
	//---------------------------------------------------------------------------------------------------------------//
]


//###############//
//###  Utils  ###//
//###############//

function _initialize_IntervalArrays(){
	for(const {chordName, create} of _ChordData)
		{(Chord as any)[chordName] = create()}
}

function _initialize_All_IntervalArrays(){
	(_Chord.All_IntervalArrays as any) =
		_ChordData.map(({chordName}) => (
			(Chord as any)[chordName]
		))
}

function _initialize_ChordGenerators(){
	Pitches.forEach( (pitch, i) => {
		const pitchVariable = PitchVariables[i]
		;(Chord as any)[pitchVariable] = {}

		for(const {chordName} of _ChordData){
			const intervals = ((Chord as any)[chordName] as Readonly<Interval[]>)
 			Chord[pitchVariable][chordName] = (octave:MidiOctave, options?:_Note.Options) => (
				new Chord({
					root: new Note((`${pitch}${octave}` as NoteName)),
					intervals,
					...options,
				})
			)
		}
	})
}

