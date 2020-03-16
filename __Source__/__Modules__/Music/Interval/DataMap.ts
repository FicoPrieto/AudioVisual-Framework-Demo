//###  Module  ###//
import {Interval, _Interval} from "./__Main__"

//###  NPM  ###//
import ConvertNumber from "number-to-words"


//########################//
//###  Export.Default  ###//
//########################//

export default class{

	static readonly ShortType_To_LongType = {
		P: "Perfect",
		m: "Minor",
		M: "Major",
		d: "Diminished",
		A: "Augmented",
	}

	static readonly ShortType_To_RelativeOffset = {
		P: 0,
		m: 0,
		M: 0,
		d: 1,
		A: -1,
	}

	static readonly AbsoluteValue_To_LongName = {
		0:  (octave:number, relativeName_Value:number) => (octave == 0) ? "Perfect Unison" : `${ConvertNumber.toOrdinal(octave)} Octave`,
		1:  (octave:number, relativeName_Value:number) => `Minor ${ConvertNumber.toOrdinal(relativeName_Value)}`,
		2:  (octave:number, relativeName_Value:number) => `Major ${ConvertNumber.toOrdinal(relativeName_Value)}`,
		3:  (octave:number, relativeName_Value:number) => `Minor ${ConvertNumber.toOrdinal(relativeName_Value)}`,
		4:  (octave:number, relativeName_Value:number) => `Major ${ConvertNumber.toOrdinal(relativeName_Value)}`,
		5:  (octave:number, relativeName_Value:number) => `Perfect ${ConvertNumber.toOrdinal(relativeName_Value)}`,
		6:  (octave:number, relativeName_Value:number) => (octave == 0) ? "Tritone" : `${ConvertNumber.toOrdinal(octave)} Tritone Octave`,
		7:  (octave:number, relativeName_Value:number) => `Perfect ${ConvertNumber.toOrdinal(relativeName_Value)}`,
		8:  (octave:number, relativeName_Value:number) => `Minor ${ConvertNumber.toOrdinal(relativeName_Value)}`,
		9:  (octave:number, relativeName_Value:number) => `Major ${ConvertNumber.toOrdinal(relativeName_Value)}`,
		10: (octave:number, relativeName_Value:number) => `Minor ${ConvertNumber.toOrdinal(relativeName_Value)}`,
		11: (octave:number, relativeName_Value:number) => `Major ${ConvertNumber.toOrdinal(relativeName_Value)}`,
	}

	static get AbsoluteValue_To_BaseInterval(){
		return {
			0:  Interval.P1,
			1:  Interval.m2,
			2:  Interval.M2,
			3:  Interval.m3,
			4:  Interval.M3,
			5:  Interval.P4,
			6:  Interval.d5,
			7:  Interval.P5,
			8:  Interval.m6,
			9:  Interval.M6,
			10: Interval.m7,
			11: Interval.M7,
		}
	}

}
