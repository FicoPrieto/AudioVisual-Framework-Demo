//###  Module  ###//
import {Interval} from "../__Main__"


//##################//
//###  Test.add  ###//
//##################//

test("add", ()=>{
	//###  [BaseIntervals] Interval + Interval  ###//
	expect(Interval.add(Interval.P1, Interval.P1 )).toMatchObject(Interval.P1 )
	expect(Interval.add(Interval.P1, Interval.m2 )).toMatchObject(Interval.m2 )
	expect(Interval.add(Interval.P1, Interval.M2 )).toMatchObject(Interval.M2 )
	expect(Interval.add(Interval.P1, Interval.m3 )).toMatchObject(Interval.m3 )
	expect(Interval.add(Interval.P1, Interval.M3 )).toMatchObject(Interval.M3 )
	expect(Interval.add(Interval.P1, Interval.P4 )).toMatchObject(Interval.P4 )
	expect(Interval.add(Interval.P1, Interval.d5 )).toMatchObject(Interval.d5 )
	expect(Interval.add(Interval.P1, Interval.P5 )).toMatchObject(Interval.P5 )
	expect(Interval.add(Interval.P1, Interval.m6 )).toMatchObject(Interval.m6 )
	expect(Interval.add(Interval.P1, Interval.M6 )).toMatchObject(Interval.M6 )
	expect(Interval.add(Interval.P1, Interval.m7 )).toMatchObject(Interval.m7 )
	expect(Interval.add(Interval.P1, Interval.M7 )).toMatchObject(Interval.M7 )
	expect(Interval.add(Interval.P1, Interval.P8 )).toMatchObject(Interval.P8 )
	expect(Interval.add(Interval.P1, Interval.m9 )).toMatchObject(Interval.m9 )
	expect(Interval.add(Interval.P1, Interval.M9 )).toMatchObject(Interval.M9 )
	expect(Interval.add(Interval.P1, Interval.m10)).toMatchObject(Interval.m10)
	expect(Interval.add(Interval.P1, Interval.M10)).toMatchObject(Interval.M10)
	expect(Interval.add(Interval.P1, Interval.P11)).toMatchObject(Interval.P11)
	expect(Interval.add(Interval.P1, Interval.d12)).toMatchObject(Interval.d12)
	expect(Interval.add(Interval.P1, Interval.P12)).toMatchObject(Interval.P12)
	expect(Interval.add(Interval.P1, Interval.m13)).toMatchObject(Interval.m13)
	expect(Interval.add(Interval.P1, Interval.M13)).toMatchObject(Interval.M13)
	expect(Interval.add(Interval.P1, Interval.m14)).toMatchObject(Interval.m14)
	expect(Interval.add(Interval.P1, Interval.M14)).toMatchObject(Interval.M14)
	expect(Interval.add(Interval.P1, Interval.P15)).toMatchObject(Interval.P15)

	//###  [BaseIntervals] Interval + AbsoluteValue  ###//
	expect(Interval.add(Interval.P1, 0 )).toMatchObject(Interval.P1 )
	expect(Interval.add(Interval.P1, 1 )).toMatchObject(Interval.m2 )
	expect(Interval.add(Interval.P1, 2 )).toMatchObject(Interval.M2 )
	expect(Interval.add(Interval.P1, 3 )).toMatchObject(Interval.m3 )
	expect(Interval.add(Interval.P1, 4 )).toMatchObject(Interval.M3 )
	expect(Interval.add(Interval.P1, 5 )).toMatchObject(Interval.P4 )
	expect(Interval.add(Interval.P1, 6 )).toMatchObject(Interval.d5 )
	expect(Interval.add(Interval.P1, 7 )).toMatchObject(Interval.P5 )
	expect(Interval.add(Interval.P1, 8 )).toMatchObject(Interval.m6 )
	expect(Interval.add(Interval.P1, 9 )).toMatchObject(Interval.M6 )
	expect(Interval.add(Interval.P1, 10)).toMatchObject(Interval.m7 )
	expect(Interval.add(Interval.P1, 11)).toMatchObject(Interval.M7 )
	expect(Interval.add(Interval.P1, 12)).toMatchObject(Interval.P8 )
	expect(Interval.add(Interval.P1, 13)).toMatchObject(Interval.m9 )
	expect(Interval.add(Interval.P1, 14)).toMatchObject(Interval.M9 )
	expect(Interval.add(Interval.P1, 15)).toMatchObject(Interval.m10)
	expect(Interval.add(Interval.P1, 16)).toMatchObject(Interval.M10)
	expect(Interval.add(Interval.P1, 17)).toMatchObject(Interval.P11)
	expect(Interval.add(Interval.P1, 18)).toMatchObject(Interval.d12)
	expect(Interval.add(Interval.P1, 19)).toMatchObject(Interval.P12)
	expect(Interval.add(Interval.P1, 20)).toMatchObject(Interval.m13)
	expect(Interval.add(Interval.P1, 21)).toMatchObject(Interval.M13)
	expect(Interval.add(Interval.P1, 22)).toMatchObject(Interval.m14)
	expect(Interval.add(Interval.P1, 23)).toMatchObject(Interval.M14)
	expect(Interval.add(Interval.P1, 24)).toMatchObject(Interval.P15)

	//###  [BaseIntervals] AbsoluteValue + AbsoluteValue  ###//
	expect(Interval.add(0, 0 )).toMatchObject(Interval.P1 )
	expect(Interval.add(0, 1 )).toMatchObject(Interval.m2 )
	expect(Interval.add(0, 2 )).toMatchObject(Interval.M2 )
	expect(Interval.add(0, 3 )).toMatchObject(Interval.m3 )
	expect(Interval.add(0, 4 )).toMatchObject(Interval.M3 )
	expect(Interval.add(0, 5 )).toMatchObject(Interval.P4 )
	expect(Interval.add(0, 6 )).toMatchObject(Interval.d5 )
	expect(Interval.add(0, 7 )).toMatchObject(Interval.P5 )
	expect(Interval.add(0, 8 )).toMatchObject(Interval.m6 )
	expect(Interval.add(0, 9 )).toMatchObject(Interval.M6 )
	expect(Interval.add(0, 10)).toMatchObject(Interval.m7 )
	expect(Interval.add(0, 11)).toMatchObject(Interval.M7 )
	expect(Interval.add(0, 12)).toMatchObject(Interval.P8 )
	expect(Interval.add(0, 13)).toMatchObject(Interval.m9 )
	expect(Interval.add(0, 14)).toMatchObject(Interval.M9 )
	expect(Interval.add(0, 15)).toMatchObject(Interval.m10)
	expect(Interval.add(0, 16)).toMatchObject(Interval.M10)
	expect(Interval.add(0, 17)).toMatchObject(Interval.P11)
	expect(Interval.add(0, 18)).toMatchObject(Interval.d12)
	expect(Interval.add(0, 19)).toMatchObject(Interval.P12)
	expect(Interval.add(0, 20)).toMatchObject(Interval.m13)
	expect(Interval.add(0, 21)).toMatchObject(Interval.M13)
	expect(Interval.add(0, 22)).toMatchObject(Interval.m14)
	expect(Interval.add(0, 23)).toMatchObject(Interval.M14)
	expect(Interval.add(0, 24)).toMatchObject(Interval.P15)

	//###  BaseInterval + Mixed  ###//
	expect(Interval.add(Interval.P1, new Interval(0))).toMatchObject(new Interval(0))
	expect(Interval.add(Interval.P1, Interval.P1    )).toMatchObject(new Interval(0))
	expect(Interval.add(Interval.P1, 0              )).toMatchObject(new Interval(0))
	expect(Interval.add(Interval.P1, new Interval(0))).toMatchObject(Interval.P1    )
	expect(Interval.add(Interval.P1, Interval.P1    )).toMatchObject(Interval.P1    )
	expect(Interval.add(Interval.P1, 0              )).toMatchObject(Interval.P1    )
	//-----------------------------------------------------------------------------//
	expect(Interval.add(Interval.m2, new Interval(0))).toMatchObject(new Interval(1))
	expect(Interval.add(Interval.m2, Interval.P1    )).toMatchObject(new Interval(1))
	expect(Interval.add(Interval.m2, 0              )).toMatchObject(new Interval(1))
	expect(Interval.add(Interval.m2, new Interval(0))).toMatchObject(Interval.m2    )
	expect(Interval.add(Interval.m2, Interval.P1    )).toMatchObject(Interval.m2    )
	expect(Interval.add(Interval.m2, 0              )).toMatchObject(Interval.m2    )

	//###  Interval + Mixed  ###//
	expect(Interval.add(new Interval(0), new Interval(0))).toMatchObject(new Interval(0))
	expect(Interval.add(new Interval(0), Interval.P1    )).toMatchObject(new Interval(0))
	expect(Interval.add(new Interval(0), 0              )).toMatchObject(new Interval(0))
	expect(Interval.add(new Interval(0), new Interval(0))).toMatchObject(Interval.P1    )
	expect(Interval.add(new Interval(0), Interval.P1    )).toMatchObject(Interval.P1    )
	expect(Interval.add(new Interval(0), 0              )).toMatchObject(Interval.P1    )
	//---------------------------------------------------------------------------------//
	expect(Interval.add(new Interval(1), new Interval(0))).toMatchObject(new Interval(1))
	expect(Interval.add(new Interval(1), Interval.P1    )).toMatchObject(new Interval(1))
	expect(Interval.add(new Interval(1), 0              )).toMatchObject(new Interval(1))
	expect(Interval.add(new Interval(1), new Interval(0))).toMatchObject(Interval.m2    )
	expect(Interval.add(new Interval(1), Interval.P1    )).toMatchObject(Interval.m2    )
	expect(Interval.add(new Interval(1), 0              )).toMatchObject(Interval.m2    )

	//###  Number + Mixed  ###//
	expect(Interval.add(0, new Interval(0))).toMatchObject(new Interval(0))
	expect(Interval.add(0, Interval.P1    )).toMatchObject(new Interval(0))
	expect(Interval.add(0, 0              )).toMatchObject(new Interval(0))
	expect(Interval.add(0, new Interval(0))).toMatchObject(Interval.P1    )
	expect(Interval.add(0, Interval.P1    )).toMatchObject(Interval.P1    )
	expect(Interval.add(0, 0              )).toMatchObject(Interval.P1    )
	//-------------------------------------------------------------------//
	expect(Interval.add(1, new Interval(0))).toMatchObject(new Interval(1))
	expect(Interval.add(1, Interval.P1    )).toMatchObject(new Interval(1))
	expect(Interval.add(1, 0              )).toMatchObject(new Interval(1))
	expect(Interval.add(1, new Interval(0))).toMatchObject(Interval.m2    )
	expect(Interval.add(1, Interval.P1    )).toMatchObject(Interval.m2    )
	expect(Interval.add(1, 0              )).toMatchObject(Interval.m2    )

	//###  Octaves  ###//
	expect(Interval.add(0,  12              )).toMatchObject(Interval.P8                                          )
	expect(Interval.add(0,  24              )).toMatchObject(Interval.P15                                         )
	expect(Interval.add(12, 12              )).toMatchObject(Interval.P15                                         )
	expect(Interval.add(0,  new Interval(12))).toMatchObject(Interval.P8                                          )
	expect(Interval.add(0,  new Interval(24))).toMatchObject(Interval.P15                                         )
	expect(Interval.add(0,  new Interval(36))).toMatchObject({relativeValue:22, absoluteValue:36, shortName:"P22"})
	expect(Interval.add(0,  new Interval(48))).toMatchObject({relativeValue:29, absoluteValue:48, shortName:"P29"})

	//###  Misc  ###//
	expect(Interval.add(Interval.M3, Interval.m3                  )).toMatchObject(Interval.P5 )
	expect(Interval.add(Interval.M3, Interval.m3, Interval.P8     )).toMatchObject(Interval.P12)
	expect(Interval.add(Interval.M3, Interval.m3, new Interval(12))).toMatchObject(Interval.P12)
	expect(Interval.add(Interval.M3, Interval.m3, 12              )).toMatchObject(Interval.P12)
	//----------------------------------------------------------------------------------------//
	expect(Interval.add(Interval.P5, Interval.M3                  )).toMatchObject(Interval.M7 )
	expect(Interval.add(Interval.P5, Interval.M3, Interval.P8     )).toMatchObject(Interval.M14)
	expect(Interval.add(Interval.P5, Interval.M3, new Interval(12))).toMatchObject(Interval.M14)
	expect(Interval.add(Interval.P5, Interval.M3, 12              )).toMatchObject(Interval.M14)
	//----------------------------------------------------------------------------------------//
	expect(Interval.add(Interval.d5, Interval.A4                  )).toMatchObject(Interval.P8 )
	expect(Interval.add(Interval.d5, Interval.A4, Interval.P8     )).toMatchObject(Interval.P15)
	expect(Interval.add(Interval.d5, Interval.A4, new Interval(12))).toMatchObject(Interval.P15)
	expect(Interval.add(Interval.d5, Interval.A4, 12              )).toMatchObject(Interval.P15)
})


//#######################//
//###  Test.subtract  ###//
//#######################//

test("subtract", ()=>{
	//###  [BaseIntervals] Interval - Interval  ###//
	expect(Interval.subtract(Interval.P8, Interval.P1 )).toMatchObject(Interval.P8)
	expect(Interval.subtract(Interval.P8, Interval.m2 )).toMatchObject(Interval.M7)
	expect(Interval.subtract(Interval.P8, Interval.M2 )).toMatchObject(Interval.m7)
	expect(Interval.subtract(Interval.P8, Interval.m3 )).toMatchObject(Interval.M6)
	expect(Interval.subtract(Interval.P8, Interval.M3 )).toMatchObject(Interval.m6)
	expect(Interval.subtract(Interval.P8, Interval.P4 )).toMatchObject(Interval.P5)
	expect(Interval.subtract(Interval.P8, Interval.d5 )).toMatchObject(Interval.d5)
	expect(Interval.subtract(Interval.P8, Interval.P5 )).toMatchObject(Interval.P4)
	expect(Interval.subtract(Interval.P8, Interval.m6 )).toMatchObject(Interval.M3)
	expect(Interval.subtract(Interval.P8, Interval.M6 )).toMatchObject(Interval.m3)
	expect(Interval.subtract(Interval.P8, Interval.m7 )).toMatchObject(Interval.M2)
	expect(Interval.subtract(Interval.P8, Interval.M7 )).toMatchObject(Interval.m2)
	expect(Interval.subtract(Interval.P8, Interval.P8 )).toMatchObject(Interval.P1)

	//###  [BaseIntervals] Interval + AbsoluteValue  ###//
	expect(Interval.subtract(Interval.P8, 0 )).toMatchObject(Interval.P8)
	expect(Interval.subtract(Interval.P8, 1 )).toMatchObject(Interval.M7)
	expect(Interval.subtract(Interval.P8, 2 )).toMatchObject(Interval.m7)
	expect(Interval.subtract(Interval.P8, 3 )).toMatchObject(Interval.M6)
	expect(Interval.subtract(Interval.P8, 4 )).toMatchObject(Interval.m6)
	expect(Interval.subtract(Interval.P8, 5 )).toMatchObject(Interval.P5)
	expect(Interval.subtract(Interval.P8, 6 )).toMatchObject(Interval.d5)
	expect(Interval.subtract(Interval.P8, 7 )).toMatchObject(Interval.P4)
	expect(Interval.subtract(Interval.P8, 8 )).toMatchObject(Interval.M3)
	expect(Interval.subtract(Interval.P8, 9 )).toMatchObject(Interval.m3)
	expect(Interval.subtract(Interval.P8, 10)).toMatchObject(Interval.M2)
	expect(Interval.subtract(Interval.P8, 11)).toMatchObject(Interval.m2)
	expect(Interval.subtract(Interval.P8, 12)).toMatchObject(Interval.P1)

	//###  [BaseIntervals] AbsoluteValue + AbsoluteValue  ###//
	expect(Interval.subtract(12, 0 )).toMatchObject(Interval.P8)
	expect(Interval.subtract(12, 1 )).toMatchObject(Interval.M7)
	expect(Interval.subtract(12, 2 )).toMatchObject(Interval.m7)
	expect(Interval.subtract(12, 3 )).toMatchObject(Interval.M6)
	expect(Interval.subtract(12, 4 )).toMatchObject(Interval.m6)
	expect(Interval.subtract(12, 5 )).toMatchObject(Interval.P5)
	expect(Interval.subtract(12, 6 )).toMatchObject(Interval.d5)
	expect(Interval.subtract(12, 7 )).toMatchObject(Interval.P4)
	expect(Interval.subtract(12, 8 )).toMatchObject(Interval.M3)
	expect(Interval.subtract(12, 9 )).toMatchObject(Interval.m3)
	expect(Interval.subtract(12, 10)).toMatchObject(Interval.M2)
	expect(Interval.subtract(12, 11)).toMatchObject(Interval.m2)
	expect(Interval.subtract(12, 12)).toMatchObject(Interval.P1)

	//###  Octaves  ###//
	expect(Interval.subtract(12,  12              )).toMatchObject(Interval.P1)
	expect(Interval.subtract(24,  12              )).toMatchObject(Interval.P8)
	expect(Interval.subtract(12,  new Interval(12))).toMatchObject(Interval.P1)
	expect(Interval.subtract(24,  new Interval(12))).toMatchObject(Interval.P8)

	// //###  Misc  ###//
	expect(Interval.subtract(Interval.P8,  Interval.m3                  )).toMatchObject(Interval.M6)
	expect(Interval.subtract(Interval.P15, Interval.m3, Interval.P8     )).toMatchObject(Interval.M6)
	expect(Interval.subtract(Interval.P15, Interval.m3, new Interval(12))).toMatchObject(Interval.M6)
	expect(Interval.subtract(Interval.P15, Interval.m3, 12              )).toMatchObject(Interval.M6)
	//---------------------------------------------------------------------------------------------//
	expect(Interval.subtract(Interval.P8,  Interval.M3                  )).toMatchObject(Interval.m6)
	expect(Interval.subtract(Interval.P15, Interval.M3, Interval.P8     )).toMatchObject(Interval.m6)
	expect(Interval.subtract(Interval.P15, Interval.M3, new Interval(12))).toMatchObject(Interval.m6)
	expect(Interval.subtract(Interval.P15, Interval.M3, 12              )).toMatchObject(Interval.m6)
	//---------------------------------------------------------------------------------------------//
	expect(Interval.subtract(Interval.P8,  Interval.P5                  )).toMatchObject(Interval.P4)
	expect(Interval.subtract(Interval.P15, Interval.P5, Interval.P8     )).toMatchObject(Interval.P4)
	expect(Interval.subtract(Interval.P15, Interval.P5, new Interval(12))).toMatchObject(Interval.P4)
	expect(Interval.subtract(Interval.P15, Interval.P5, 12              )).toMatchObject(Interval.P4)
})
