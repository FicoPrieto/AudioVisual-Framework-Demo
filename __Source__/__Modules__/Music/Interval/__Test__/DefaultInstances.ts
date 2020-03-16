//###  Module  ###//
import {Interval} from "../__Main__"


//###############################//
//###  Test.DefaultInstances  ###//
//###############################//

test("DefaultInstances", ()=>{
	//##########################################################################################################################################################//
	expect(Interval.P1 ).toMatchObject({relativeValue:1,  absoluteValue:0,  shortName:"P1",  longName:"Perfect Unison",     shortType:"P", longType:"Perfect"   })
	expect(Interval.d2 ).toMatchObject({relativeValue:2,  absoluteValue:0,  shortName:"d2",  longName:"Perfect Unison",     shortType:"d", longType:"Diminished"})
	//==========================================================================================================================================================//
	expect(Interval.A1 ).toMatchObject({relativeValue:1,  absoluteValue:1,  shortName:"A1",  longName:"Minor 2nd",          shortType:"A", longType:"Augmented" })
	expect(Interval.m2 ).toMatchObject({relativeValue:2,  absoluteValue:1,  shortName:"m2",  longName:"Minor 2nd",          shortType:"m", longType:"Minor"     })
	//----------------------------------------------------------------------------------------------------------------------------------------------------------//
	expect(Interval.M2 ).toMatchObject({relativeValue:2,  absoluteValue:2,  shortName:"M2",  longName:"Major 2nd",          shortType:"M", longType:"Major"     })
	expect(Interval.d3 ).toMatchObject({relativeValue:3,  absoluteValue:2,  shortName:"d3",  longName:"Major 2nd",          shortType:"d", longType:"Diminished"})
	//==========================================================================================================================================================//
	expect(Interval.A2 ).toMatchObject({relativeValue:2,  absoluteValue:3,  shortName:"A2",  longName:"Minor 3rd",          shortType:"A", longType:"Augmented" })
	expect(Interval.m3 ).toMatchObject({relativeValue:3,  absoluteValue:3,  shortName:"m3",  longName:"Minor 3rd",          shortType:"m", longType:"Minor"     })
	//----------------------------------------------------------------------------------------------------------------------------------------------------------//
	expect(Interval.M3 ).toMatchObject({relativeValue:3,  absoluteValue:4,  shortName:"M3",  longName:"Major 3rd",          shortType:"M", longType:"Major"     })
	expect(Interval.d4 ).toMatchObject({relativeValue:4,  absoluteValue:4,  shortName:"d4",  longName:"Major 3rd",          shortType:"d", longType:"Diminished"})
	//==========================================================================================================================================================//
	expect(Interval.A3 ).toMatchObject({relativeValue:3,  absoluteValue:5,  shortName:"A3",  longName:"Perfect 4th",        shortType:"A", longType:"Augmented" })
	expect(Interval.P4 ).toMatchObject({relativeValue:4,  absoluteValue:5,  shortName:"P4",  longName:"Perfect 4th",        shortType:"P", longType:"Perfect"   })
	//==========================================================================================================================================================//
	expect(Interval.A4 ).toMatchObject({relativeValue:4,  absoluteValue:6,  shortName:"A4",  longName:"Tritone",            shortType:"A", longType:"Augmented" })
	expect(Interval.d5 ).toMatchObject({relativeValue:5,  absoluteValue:6,  shortName:"d5",  longName:"Tritone",            shortType:"d", longType:"Diminished"})
	//==========================================================================================================================================================//
	expect(Interval.P5 ).toMatchObject({relativeValue:5,  absoluteValue:7,  shortName:"P5",  longName:"Perfect 5th",        shortType:"P", longType:"Perfect"   })
	expect(Interval.d6 ).toMatchObject({relativeValue:6,  absoluteValue:7,  shortName:"d6",  longName:"Perfect 5th",        shortType:"d", longType:"Diminished"})
	//==========================================================================================================================================================//
	expect(Interval.A5 ).toMatchObject({relativeValue:5,  absoluteValue:8,  shortName:"A5",  longName:"Minor 6th",          shortType:"A", longType:"Augmented" })
	expect(Interval.m6 ).toMatchObject({relativeValue:6,  absoluteValue:8,  shortName:"m6",  longName:"Minor 6th",          shortType:"m", longType:"Minor"     })
	//----------------------------------------------------------------------------------------------------------------------------------------------------------//
	expect(Interval.M6 ).toMatchObject({relativeValue:6,  absoluteValue:9,  shortName:"M6",  longName:"Major 6th",          shortType:"M", longType:"Major"     })
	expect(Interval.d7 ).toMatchObject({relativeValue:7,  absoluteValue:9,  shortName:"d7",  longName:"Major 6th",          shortType:"d", longType:"Diminished"})
	//==========================================================================================================================================================//
	expect(Interval.A6 ).toMatchObject({relativeValue:6,  absoluteValue:10, shortName:"A6",  longName:"Minor 7th",          shortType:"A", longType:"Augmented" })
	expect(Interval.m7 ).toMatchObject({relativeValue:7,  absoluteValue:10, shortName:"m7",  longName:"Minor 7th",          shortType:"m", longType:"Minor"     })
	//----------------------------------------------------------------------------------------------------------------------------------------------------------//
	expect(Interval.M7 ).toMatchObject({relativeValue:7,  absoluteValue:11, shortName:"M7",  longName:"Major 7th",          shortType:"M", longType:"Major"     })
	expect(Interval.d8 ).toMatchObject({relativeValue:8,  absoluteValue:11, shortName:"d8",  longName:"Major 7th",          shortType:"d", longType:"Diminished"})
	//##########################################################################################################################################################//
	expect(Interval.A7 ).toMatchObject({relativeValue:7,  absoluteValue:12, shortName:"A7",  longName:"1st Octave",         shortType:"A", longType:"Augmented" })
	expect(Interval.P8 ).toMatchObject({relativeValue:8,  absoluteValue:12, shortName:"P8",  longName:"1st Octave",         shortType:"P", longType:"Perfect"   })
	expect(Interval.d9 ).toMatchObject({relativeValue:9,  absoluteValue:12, shortName:"d9",  longName:"1st Octave",         shortType:"d", longType:"Diminished"})
	//==========================================================================================================================================================//
	expect(Interval.A8 ).toMatchObject({relativeValue:8,  absoluteValue:13, shortName:"A8",  longName:"Minor 9th",          shortType:"A", longType:"Augmented" })
	expect(Interval.m9 ).toMatchObject({relativeValue:9,  absoluteValue:13, shortName:"m9",  longName:"Minor 9th",          shortType:"m", longType:"Minor"     })
	//----------------------------------------------------------------------------------------------------------------------------------------------------------//
	expect(Interval.M9 ).toMatchObject({relativeValue:9,  absoluteValue:14, shortName:"M9",  longName:"Major 9th",          shortType:"M", longType:"Major"     })
	expect(Interval.d10).toMatchObject({relativeValue:10, absoluteValue:14, shortName:"d10", longName:"Major 9th",          shortType:"d", longType:"Diminished"})
	//==========================================================================================================================================================//
	expect(Interval.A9 ).toMatchObject({relativeValue:9,  absoluteValue:15, shortName:"A9",  longName:"Minor 10th",         shortType:"A", longType:"Augmented" })
	expect(Interval.m10).toMatchObject({relativeValue:10, absoluteValue:15, shortName:"m10", longName:"Minor 10th",         shortType:"m", longType:"Minor"     })
	//----------------------------------------------------------------------------------------------------------------------------------------------------------//
	expect(Interval.M10).toMatchObject({relativeValue:10, absoluteValue:16, shortName:"M10", longName:"Major 10th",         shortType:"M", longType:"Major"     })
	expect(Interval.d11).toMatchObject({relativeValue:11, absoluteValue:16, shortName:"d11", longName:"Major 10th",         shortType:"d", longType:"Diminished"})
	//==========================================================================================================================================================//
	expect(Interval.A10).toMatchObject({relativeValue:10, absoluteValue:17, shortName:"A10", longName:"Perfect 11th",       shortType:"A", longType:"Augmented" })
	expect(Interval.P11).toMatchObject({relativeValue:11, absoluteValue:17, shortName:"P11", longName:"Perfect 11th",       shortType:"P", longType:"Perfect"   })
	//==========================================================================================================================================================//
	expect(Interval.A11).toMatchObject({relativeValue:11, absoluteValue:18, shortName:"A11", longName:"1st Tritone Octave", shortType:"A", longType:"Augmented" })
	expect(Interval.d12).toMatchObject({relativeValue:12, absoluteValue:18, shortName:"d12", longName:"1st Tritone Octave", shortType:"d", longType:"Diminished"})
	//==========================================================================================================================================================//
	expect(Interval.P12).toMatchObject({relativeValue:12, absoluteValue:19, shortName:"P12", longName:"Perfect 12th",       shortType:"P", longType:"Perfect"   })
	expect(Interval.d13).toMatchObject({relativeValue:13, absoluteValue:19, shortName:"d13", longName:"Perfect 12th",       shortType:"d", longType:"Diminished"})
	//==========================================================================================================================================================//
	expect(Interval.A12).toMatchObject({relativeValue:12, absoluteValue:20, shortName:"A12", longName:"Minor 13th",         shortType:"A", longType:"Augmented" })
	expect(Interval.m13).toMatchObject({relativeValue:13, absoluteValue:20, shortName:"m13", longName:"Minor 13th",         shortType:"m", longType:"Minor"     })
	//----------------------------------------------------------------------------------------------------------------------------------------------------------//
	expect(Interval.M13).toMatchObject({relativeValue:13, absoluteValue:21, shortName:"M13", longName:"Major 13th",         shortType:"M", longType:"Major"     })
	expect(Interval.d14).toMatchObject({relativeValue:14, absoluteValue:21, shortName:"d14", longName:"Major 13th",         shortType:"d", longType:"Diminished"})
	//==========================================================================================================================================================//
	expect(Interval.A13).toMatchObject({relativeValue:13, absoluteValue:22, shortName:"A13", longName:"Minor 14th",         shortType:"A", longType:"Augmented" })
	expect(Interval.m14).toMatchObject({relativeValue:14, absoluteValue:22, shortName:"m14", longName:"Minor 14th",         shortType:"m", longType:"Minor"     })
	//----------------------------------------------------------------------------------------------------------------------------------------------------------//
	expect(Interval.M14).toMatchObject({relativeValue:14, absoluteValue:23, shortName:"M14", longName:"Major 14th",         shortType:"M", longType:"Major"     })
	expect(Interval.d15).toMatchObject({relativeValue:15, absoluteValue:23, shortName:"d15", longName:"Major 14th",         shortType:"d", longType:"Diminished"})
	//##########################################################################################################################################################//
	expect(Interval.A14).toMatchObject({relativeValue:14, absoluteValue:24, shortName:"A14", longName:"2nd Octave",         shortType:"A", longType:"Augmented" })
	expect(Interval.P15).toMatchObject({relativeValue:15, absoluteValue:24, shortName:"P15", longName:"2nd Octave",         shortType:"P", longType:"Perfect"   })
	//##########################################################################################################################################################//
})
