//###  Module  ###//
import {Interval, _Interval} from "./__Main__"


//##############################//
//###  Exports.Class.Public  ###//
//##############################//

export class DefaultInstances{
	static initialize(){
		//  Perfect Unison  #####################################################################################//
		;(Interval as any).P1  = _Interval.construct_From_Data({shortType:"P", relativeValue:1,  absoluteValue:0 })
		;(Interval as any).d2  = _Interval.construct_From_Data({shortType:"d", relativeValue:2,  absoluteValue:0 })
		//  Minor 2nd  ==========================================================================================//
		;(Interval as any).A1  = _Interval.construct_From_Data({shortType:"A", relativeValue:1,  absoluteValue:1 })
		;(Interval as any).m2  = _Interval.construct_From_Data({shortType:"m", relativeValue:2,  absoluteValue:1 })
		//  Major 2nd  ------------------------------------------------------------------------------------------//
		;(Interval as any).M2  = _Interval.construct_From_Data({shortType:"M", relativeValue:2,  absoluteValue:2 })
		;(Interval as any).d3  = _Interval.construct_From_Data({shortType:"d", relativeValue:3,  absoluteValue:2 })
		//  Minor 3rd  ==========================================================================================//
		;(Interval as any).A2  = _Interval.construct_From_Data({shortType:"A", relativeValue:2,  absoluteValue:3 })
		;(Interval as any).m3  = _Interval.construct_From_Data({shortType:"m", relativeValue:3,  absoluteValue:3 })
		//  Major 3rd  ------------------------------------------------------------------------------------------//
		;(Interval as any).M3  = _Interval.construct_From_Data({shortType:"M", relativeValue:3,  absoluteValue:4 })
		;(Interval as any).d4  = _Interval.construct_From_Data({shortType:"d", relativeValue:4,  absoluteValue:4 })
		//  Perfect 4th  ========================================================================================//
		;(Interval as any).A3  = _Interval.construct_From_Data({shortType:"A", relativeValue:3,  absoluteValue:5 })
		;(Interval as any).P4  = _Interval.construct_From_Data({shortType:"P", relativeValue:4,  absoluteValue:5 })
		//  Tritone  ============================================================================================//
		;(Interval as any).A4  = _Interval.construct_From_Data({shortType:"A", relativeValue:4,  absoluteValue:6 })
		;(Interval as any).d5  = _Interval.construct_From_Data({shortType:"d", relativeValue:5,  absoluteValue:6 })
		//  Perfect 5th  ========================================================================================//
		;(Interval as any).P5  = _Interval.construct_From_Data({shortType:"P", relativeValue:5,  absoluteValue:7 })
		;(Interval as any).d6  = _Interval.construct_From_Data({shortType:"d", relativeValue:6,  absoluteValue:7 })
		//  Minor 6th  ==========================================================================================//
		;(Interval as any).A5  = _Interval.construct_From_Data({shortType:"A", relativeValue:5,  absoluteValue:8 })
		;(Interval as any).m6  = _Interval.construct_From_Data({shortType:"m", relativeValue:6,  absoluteValue:8 })
		//  Major 6th  ------------------------------------------------------------------------------------------//
		;(Interval as any).M6  = _Interval.construct_From_Data({shortType:"M", relativeValue:6,  absoluteValue:9 })
		;(Interval as any).d7  = _Interval.construct_From_Data({shortType:"d", relativeValue:7,  absoluteValue:9 })
		//  Minor 7th  ==========================================================================================//
		;(Interval as any).A6  = _Interval.construct_From_Data({shortType:"A", relativeValue:6,  absoluteValue:10})
		;(Interval as any).m7  = _Interval.construct_From_Data({shortType:"m", relativeValue:7,  absoluteValue:10})
		//  Major 7th  ------------------------------------------------------------------------------------------//
		;(Interval as any).M7  = _Interval.construct_From_Data({shortType:"M", relativeValue:7,  absoluteValue:11})
		;(Interval as any).d8  = _Interval.construct_From_Data({shortType:"d", relativeValue:8,  absoluteValue:11})
		//  1st Octave  #########################################################################################//
		;(Interval as any).A7  = _Interval.construct_From_Data({shortType:"A", relativeValue:7,  absoluteValue:12})
		;(Interval as any).P8  = _Interval.construct_From_Data({shortType:"P", relativeValue:8,  absoluteValue:12})
		;(Interval as any).d9  = _Interval.construct_From_Data({shortType:"d", relativeValue:9,  absoluteValue:12})
		//  Minor 9th  ==========================================================================================//
		;(Interval as any).A8  = _Interval.construct_From_Data({shortType:"A", relativeValue:8,  absoluteValue:13})
		;(Interval as any).m9  = _Interval.construct_From_Data({shortType:"m", relativeValue:9,  absoluteValue:13})
		//  Major 9th  ------------------------------------------------------------------------------------------//
		;(Interval as any).M9  = _Interval.construct_From_Data({shortType:"M", relativeValue:9,  absoluteValue:14})
		;(Interval as any).d10 = _Interval.construct_From_Data({shortType:"d", relativeValue:10, absoluteValue:14})
		//  Minor 10th  =========================================================================================//
		;(Interval as any).A9  = _Interval.construct_From_Data({shortType:"A", relativeValue:9,  absoluteValue:15})
		;(Interval as any).m10 = _Interval.construct_From_Data({shortType:"m", relativeValue:10, absoluteValue:15})
		//  Major 10th  -----------------------------------------------------------------------------------------//
		;(Interval as any).M10 = _Interval.construct_From_Data({shortType:"M", relativeValue:10, absoluteValue:16})
		;(Interval as any).d11 = _Interval.construct_From_Data({shortType:"d", relativeValue:11, absoluteValue:16})
		//  Perfect 11th  =======================================================================================//
		;(Interval as any).A10 = _Interval.construct_From_Data({shortType:"A", relativeValue:10, absoluteValue:17})
		;(Interval as any).P11 = _Interval.construct_From_Data({shortType:"P", relativeValue:11, absoluteValue:17})
		//  1st Tritone Octave  =================================================================================//
		;(Interval as any).A11 = _Interval.construct_From_Data({shortType:"A", relativeValue:11, absoluteValue:18})
		;(Interval as any).d12 = _Interval.construct_From_Data({shortType:"d", relativeValue:12, absoluteValue:18})
		//  Perfect 12th  =======================================================================================//
		;(Interval as any).P12 = _Interval.construct_From_Data({shortType:"P", relativeValue:12, absoluteValue:19})
		;(Interval as any).d13 = _Interval.construct_From_Data({shortType:"d", relativeValue:13, absoluteValue:19})
		//  Minor 13th  =========================================================================================//
		;(Interval as any).A12 = _Interval.construct_From_Data({shortType:"A", relativeValue:12, absoluteValue:20})
		;(Interval as any).m13 = _Interval.construct_From_Data({shortType:"m", relativeValue:13, absoluteValue:20})
		//  Major 13th  -----------------------------------------------------------------------------------------//
		;(Interval as any).M13 = _Interval.construct_From_Data({shortType:"M", relativeValue:13, absoluteValue:21})
		;(Interval as any).d14 = _Interval.construct_From_Data({shortType:"d", relativeValue:14, absoluteValue:21})
		//  Minor 14th  =========================================================================================//
		;(Interval as any).A13 = _Interval.construct_From_Data({shortType:"A", relativeValue:13, absoluteValue:22})
		;(Interval as any).m14 = _Interval.construct_From_Data({shortType:"m", relativeValue:14, absoluteValue:22})
		//  Major 14th  -----------------------------------------------------------------------------------------//
		;(Interval as any).M14 = _Interval.construct_From_Data({shortType:"M", relativeValue:14, absoluteValue:23})
		;(Interval as any).d15 = _Interval.construct_From_Data({shortType:"d", relativeValue:15, absoluteValue:23})
		//  2nd Octave  #########################################################################################//
		;(Interval as any).A14 = _Interval.construct_From_Data({shortType:"A", relativeValue:14, absoluteValue:24})
		;(Interval as any).P15 = _Interval.construct_From_Data({shortType:"P", relativeValue:15, absoluteValue:24})
	}
}
