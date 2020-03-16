//###  Reference  ###//
// http://www.pluck-n-play.com/en/scale-list.html

//###  Module  ###//
import {Scale, _Scale          } from "./__Main__"
import {Interval               } from "../Interval/__Main__"
import {Pitches, PitchVariables} from "../Note/Types"


//###############//
//###  Setup  ###//
//###############//

const I = Interval


//##############################//
//###  Exports.Class.Public  ###//
//##############################//

export class DefaultInstances{
	static initialize(){
		_initialize_Scales()
		_initialize_ScaleNotes()
	}
}


//##############//
//###  Data  ###//
//##############//

const _ScaleData = [
	//-----------------------------------------------------------------------------------------------------------------------------------//
	{scaleName:"Chromatic",               create:(() => new Scale(I.P1, I.A1, I.M2, I.A2, I.M3, I.P4, I.A4, I.P5, I.A5, I.M6, I.A6, I.M7))},
	//  Major & Natural Minor  ----------------------------------------------------------------------------------------------------------//
	{scaleName:"Ionian",                  create:(() => new Scale(I.P1, I.M2, I.M3, I.P4, I.P5, I.M6, I.M7                              ))},
	{scaleName:"Dorian",                  create:(() => new Scale(I.P1, I.M2, I.m3, I.P4, I.P5, I.M6, I.m7                              ))},
	{scaleName:"Phrygian",                create:(() => new Scale(I.P1, I.m2, I.m3, I.P4, I.P5, I.m6, I.m7                              ))},
	{scaleName:"Lydian",                  create:(() => new Scale(I.P1, I.M2, I.M3, I.A4, I.P5, I.M6, I.M7                              ))},
	{scaleName:"Mixolydian",              create:(() => new Scale(I.P1, I.M2, I.M3, I.P4, I.P5, I.M6, I.m7                              ))},
	{scaleName:"Aeolian",                 create:(() => new Scale(I.P1, I.M2, I.m3, I.P4, I.P5, I.m6, I.m7                              ))},
	{scaleName:"Locrian",                 create:(() => new Scale(I.P1, I.m2, I.m3, I.P4, I.d5, I.m6, I.m7                              ))},
	//  Harmonic Minor  -----------------------------------------------------------------------------------------------------------------//
	{scaleName:"Aeolian_HarmonicMinor",   create:(() => new Scale(I.P1, I.M2, I.m3, I.P4, I.P5, I.m6, I.M7                              ))},
	{scaleName:"Locrian_HarmonicMinor_1", create:(() => new Scale(I.P1, I.m2, I.m3, I.P4, I.d5, I.M6, I.m7                              ))},
	{scaleName:"Ionian_HarmonicMinor",    create:(() => new Scale(I.P1, I.M2, I.M3, I.P4, I.A5, I.M6, I.M7                              ))},
	{scaleName:"Dorian_HarmonicMinor",    create:(() => new Scale(I.P1, I.M2, I.m3, I.A4, I.P5, I.M6, I.m7                              ))},
	{scaleName:"Phrygian_HarmonicMinor",  create:(() => new Scale(I.P1, I.m2, I.M3, I.P4, I.P5, I.m6, I.m7                              ))},
	{scaleName:"Lydian_HarmonicMinor",    create:(() => new Scale(I.P1, I.A2, I.M3, I.A4, I.P5, I.M6, I.M7                              ))},
	{scaleName:"Locrian_HarmonicMinor_2", create:(() => new Scale(I.P1, I.m2, I.m3, I.d4, I.d5, I.m6, I.d7                              ))},
	//  Melodic Minor  ------------------------------------------------------------------------------------------------------------------//
	{scaleName:"Aeolian_MelodicMinor_1",  create:(() => new Scale(I.P1, I.M2, I.m3, I.P4, I.P5, I.M6, I.M7                              ))},
	{scaleName:"Phrygian_MelodicMinor",   create:(() => new Scale(I.P1, I.m2, I.m3, I.P4, I.P5, I.M6, I.m7                              ))},
	{scaleName:"Lydian_MelodicMinor_1",   create:(() => new Scale(I.P1, I.M2, I.M3, I.A4, I.A5, I.M6, I.M7                              ))},
	{scaleName:"Lydian_MelodicMinor_2",   create:(() => new Scale(I.P1, I.M2, I.M3, I.A4, I.P5, I.M6, I.m7                              ))},
	{scaleName:"Aeolian_MelodicMinor_2",  create:(() => new Scale(I.P1, I.M2, I.M3, I.P4, I.P5, I.m6, I.m7                              ))},
	{scaleName:"Locrian_MelodicMinor_1",  create:(() => new Scale(I.P1, I.M2, I.m3, I.P4, I.d5, I.m6, I.m7                              ))},
	{scaleName:"Locrian_MelodicMinor_2",  create:(() => new Scale(I.P1, I.m2, I.m3, I.d4, I.d5, I.m6, I.m7                              ))},
	//  Common  -------------------------------------------------------------------------------------------------------------------------//
	{scaleName:"Major",                   create:(() => Scale.Ionian                                                                     )},
	{scaleName:"HarmonicMinor",           create:(() => Scale.Aeolian_HarmonicMinor                                                      )},
	{scaleName:"MelodicMinor",            create:(() => Scale.Aeolian_MelodicMinor_1                                                     )},
	{scaleName:"NaturalMinor",            create:(() => Scale.Aeolian                                                                    )},
	//  Bebop  --------------------------------------------------------------------------------------------------------------------------//
	{scaleName:"Bebop_Dominant",          create:(() => new Scale(I.P1, I.M2, I.M3, I.P4, I.P5, I.M6, I.A6, I.M7                        ))},
	{scaleName:"Bebop_Major",             create:(() => new Scale(I.P1, I.M2, I.M3, I.P4, I.P5, I.m6, I.M6, I.M7                        ))},
	{scaleName:"Bebop_HarmonicMinor",     create:(() => new Scale(I.P1, I.M2, I.m3, I.M3, I.P4, I.P5, I.M6, I.m7                        ))},
	{scaleName:"Bebop_MelodicMinor",      create:(() => new Scale(I.P1, I.M2, I.m3, I.P4, I.P5, I.m6, I.M6, I.M7                        ))},
	//  Blues  --------------------------------------------------------------------------------------------------------------------------//
	{scaleName:"Blues_Major",             create:(() => new Scale(I.P1, I.M2, I.m3, I.M3, I.P5, I.M6                                    ))},
	{scaleName:"Blues_Minor",             create:(() => new Scale(I.P1, I.m3, I.P4, I.d5, I.P5, I.m7                                    ))},
	{scaleName:"Blues_Diminished",        create:(() => new Scale(I.P1, I.m2, I.m3, I.M3, I.d5, I.P5, I.M6, I.m7                        ))},
	{scaleName:"Blues_Pentatonic",        create:(() => new Scale(I.P1, I.m3, I.P4, I.P5, I.m7                                          ))},
	{scaleName:"Blues_Rock",              create:(() => new Scale(I.P1, I.M2, I.m3, I.M3, I.P4, I.d5, I.P5, I.M6, I.m7                  ))},
	//  Gypsy  --------------------------------------------------------------------------------------------------------------------------//
	{scaleName:"Gypsy_Major",             create:(() => new Scale(I.P1, I.m2, I.M3, I.P4, I.P5, I.m6, I.M7                              ))},
	{scaleName:"Gypsy_Minor",             create:(() => new Scale(I.P1, I.M2, I.m3, I.d5, I.P5, I.m6, I.M7                              ))},
	{scaleName:"Gypsy_Hungarian",         create:(() => new Scale(I.P1, I.M2, I.m3, I.A4, I.P5, I.m6, I.m7                              ))},
	{scaleName:"Gypsy_Spanish",           create:(() => new Scale(I.P1, I.m2, I.M3, I.P4, I.P5, I.m6, I.m7                              ))},
	//  Pentatonic  ---------------------------------------------------------------------------------------------------------------------//
	{scaleName:"Pentatonic_Major",        create:(() => new Scale(I.P1, I.M2, I.M3, I.P5, I.M6                                          ))},
	{scaleName:"Pentatonic_Neutral",      create:(() => new Scale(I.P1, I.M2, I.P4, I.P5, I.m7                                          ))},
	{scaleName:"Pentatonic_Rock",         create:(() => new Scale(I.P1, I.m3, I.P4, I.A5, I.m7                                          ))},
	{scaleName:"Pentatonic_Scottish",     create:(() => new Scale(I.P1, I.M2, I.P4, I.P5, I.M6                                          ))},
	{scaleName:"Pentatonic_Minor",        create:(() => new Scale(I.P1, I.m3, I.P4, I.P5, I.m7                                          ))},
	//  Whole / Half  -------------------------------------------------------------------------------------------------------------------//
	{scaleName:"WholeTone",               create:(() => new Scale(I.P1, I.M2, I.M3, I.A4, I.A5, I.A6                                    ))},
	{scaleName:"Whole_Half",              create:(() => new Scale(I.P1, I.M2, I.m3, I.P4, I.A4, I.A5, I.M6, I.M7                        ))},
	{scaleName:"Half_Whole",              create:(() => new Scale(I.P1, I.m2, I.m3, I.M3, I.d5, I.P5, I.M6, I.m7                        ))},
	//  Miscellaneous  ------------------------------------------------------------------------------------------------------------------//
	{scaleName:"Augmented",               create:(() => new Scale(I.P1, I.A2, I.M3, I.P5, I.A5, I.M7                                    ))},
	{scaleName:"Byzantine",               create:(() => new Scale(I.P1, I.m2, I.M3, I.P4, I.P5, I.m6, I.M7                              ))},
	{scaleName:"Enigmatic_Ascending",     create:(() => new Scale(I.P1, I.m2, I.M3, I.A4, I.A5, I.A6, I.M7                              ))},
	{scaleName:"Enigmatic_Descending",    create:(() => new Scale(I.P1, I.m2, I.M3, I.P4, I.m6, I.m7, I.M7                              ))},
	{scaleName:"Hungarian_Major",         create:(() => new Scale(I.P1, I.m3, I.M3, I.d5, I.P5, I.M6, I.m7                              ))},
	{scaleName:"Hungarian_Minor",         create:(() => new Scale(I.P1, I.M2, I.m3, I.d5, I.P5, I.m6, I.M7                              ))},
	{scaleName:"Neapolitan_Major",        create:(() => new Scale(I.P1, I.m2, I.m3, I.P4, I.P5, I.M6, I.M7                              ))},
	{scaleName:"Neapolitan_Minor",        create:(() => new Scale(I.P1, I.m2, I.m3, I.P4, I.P5, I.m6, I.M7                              ))},
	{scaleName:"Overtone",                create:(() => new Scale(I.P1, I.M2, I.M3, I.A4, I.P5, I.M6, I.m7                              ))},
	{scaleName:"Prometheus",              create:(() => new Scale(I.P1, I.M2, I.M3, I.d5, I.M6, I.m7                                    ))},
	{scaleName:"Prometheus_Neapolitan",   create:(() => new Scale(I.P1, I.m2, I.M3, I.d5, I.M6, I.m7                                    ))},
	{scaleName:"Spanish_8_Tone",          create:(() => new Scale(I.P1, I.m2, I.m3, I.M3, I.P4, I.d5, I.m6, I.m7                        ))},
	//-----------------------------------------------------------------------------------------------------------------------------------//
]


//###############//
//###  Utils  ###//
//###############//

function _initialize_Scales(){
	for(const {scaleName, create} of _ScaleData)
		{(Scale as any)[scaleName] = create()}
}

function _initialize_ScaleNotes(){
	Pitches.forEach( (pitch, i) => {
		const pitchVariable = PitchVariables[i]
		const scales: _Scale.DefaultScales = ({} as _Scale.DefaultScales)

		for(const {scaleName} of _ScaleData){
			const scaleNotes = ((Scale as any)[scaleName] as Scale).notes(pitch)
			Object.defineProperty(scales, scaleName, {
				get: () => (
					scaleNotes.map(note => note.clone())
				),
			})
		}

		;(Scale as any)[pitchVariable] = scales
	})
}
