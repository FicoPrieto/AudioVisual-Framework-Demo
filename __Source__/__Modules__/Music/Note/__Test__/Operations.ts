//###  Module  ###//
import {Note    } from "../__Main__"
import {Chord   } from "../../Chord/__Main__"
import {Interval} from "../../Interval/__Main__"


//###########################//
//###  Test.Instance.add  ###//
//###########################//

test("Instance.add", ()=>{
	//###  Absolute Intervals  ###//
	expect(Note.C4.add(-12)).toMatchObject(Note.C3 )
	expect(Note.C4.add(-11)).toMatchObject(Note.C$3)
	expect(Note.C4.add(-10)).toMatchObject(Note.D3 )
	expect(Note.C4.add(-9 )).toMatchObject(Note.D$3)
	expect(Note.C4.add(-8 )).toMatchObject(Note.E3 )
	expect(Note.C4.add(-7 )).toMatchObject(Note.F3 )
	expect(Note.C4.add(-6 )).toMatchObject(Note.F$3)
	expect(Note.C4.add(-5 )).toMatchObject(Note.G3 )
	expect(Note.C4.add(-4 )).toMatchObject(Note.G$3)
	expect(Note.C4.add(-3 )).toMatchObject(Note.A3 )
	expect(Note.C4.add(-2 )).toMatchObject(Note.A$3)
	expect(Note.C4.add(-1 )).toMatchObject(Note.B3 )
	expect(Note.C4.add(0  )).toMatchObject(Note.C4 )
	expect(Note.C4.add(1  )).toMatchObject(Note.C$4)
	expect(Note.C4.add(2  )).toMatchObject(Note.D4 )
	expect(Note.C4.add(3  )).toMatchObject(Note.D$4)
	expect(Note.C4.add(4  )).toMatchObject(Note.E4 )
	expect(Note.C4.add(5  )).toMatchObject(Note.F4 )
	expect(Note.C4.add(6  )).toMatchObject(Note.F$4)
	expect(Note.C4.add(7  )).toMatchObject(Note.G4 )
	expect(Note.C4.add(8  )).toMatchObject(Note.G$4)
	expect(Note.C4.add(9  )).toMatchObject(Note.A4 )
	expect(Note.C4.add(10 )).toMatchObject(Note.A$4)
	expect(Note.C4.add(11 )).toMatchObject(Note.B4 )
	expect(Note.C4.add(12 )).toMatchObject(Note.C5 )

	//###  Relative Intervals  ###//
	expect(Note.C4.add(Interval.P1)).toMatchObject(Note.C4 )
	expect(Note.C4.add(Interval.m2)).toMatchObject(Note.C$4)
	expect(Note.C4.add(Interval.M2)).toMatchObject(Note.D4 )
	expect(Note.C4.add(Interval.m3)).toMatchObject(Note.D$4)
	expect(Note.C4.add(Interval.M3)).toMatchObject(Note.E4 )
	expect(Note.C4.add(Interval.P4)).toMatchObject(Note.F4 )
	expect(Note.C4.add(Interval.d5)).toMatchObject(Note.F$4)
	expect(Note.C4.add(Interval.P5)).toMatchObject(Note.G4 )
	expect(Note.C4.add(Interval.m6)).toMatchObject(Note.G$4)
	expect(Note.C4.add(Interval.M6)).toMatchObject(Note.A4 )
	expect(Note.C4.add(Interval.m7)).toMatchObject(Note.A$4)
	expect(Note.C4.add(Interval.M7)).toMatchObject(Note.B4 )
	expect(Note.C4.add(Interval.P8)).toMatchObject(Note.C5 )
})


//#########################//
//###  Test.Static.add  ###//
//#########################//

test("Instance.add", ()=>{
	//###  Absolute Intervals  ###//
	expect(Note.add("C4", -12)).toMatchObject(Note.C3 )
	expect(Note.add("C4", -11)).toMatchObject(Note.C$3)
	expect(Note.add("C4", -10)).toMatchObject(Note.D3 )
	expect(Note.add("C4", -9 )).toMatchObject(Note.D$3)
	expect(Note.add("C4", -8 )).toMatchObject(Note.E3 )
	expect(Note.add("C4", -7 )).toMatchObject(Note.F3 )
	expect(Note.add("C4", -6 )).toMatchObject(Note.F$3)
	expect(Note.add("C4", -5 )).toMatchObject(Note.G3 )
	expect(Note.add("C4", -4 )).toMatchObject(Note.G$3)
	expect(Note.add("C4", -3 )).toMatchObject(Note.A3 )
	expect(Note.add("C4", -2 )).toMatchObject(Note.A$3)
	expect(Note.add("C4", -1 )).toMatchObject(Note.B3 )
	expect(Note.add("C4", 0  )).toMatchObject(Note.C4 )
	expect(Note.add("C4", 1  )).toMatchObject(Note.C$4)
	expect(Note.add("C4", 2  )).toMatchObject(Note.D4 )
	expect(Note.add("C4", 3  )).toMatchObject(Note.D$4)
	expect(Note.add("C4", 4  )).toMatchObject(Note.E4 )
	expect(Note.add("C4", 5  )).toMatchObject(Note.F4 )
	expect(Note.add("C4", 6  )).toMatchObject(Note.F$4)
	expect(Note.add("C4", 7  )).toMatchObject(Note.G4 )
	expect(Note.add("C4", 8  )).toMatchObject(Note.G$4)
	expect(Note.add("C4", 9  )).toMatchObject(Note.A4 )
	expect(Note.add("C4", 10 )).toMatchObject(Note.A$4)
	expect(Note.add("C4", 11 )).toMatchObject(Note.B4 )
	expect(Note.add("C4", 12 )).toMatchObject(Note.C5 )

	//###  Relative Intervals  ###//
	expect(Note.add("C4", Interval.P1)).toMatchObject(Note.C4 )
	expect(Note.add("C4", Interval.m2)).toMatchObject(Note.C$4)
	expect(Note.add("C4", Interval.M2)).toMatchObject(Note.D4 )
	expect(Note.add("C4", Interval.m3)).toMatchObject(Note.D$4)
	expect(Note.add("C4", Interval.M3)).toMatchObject(Note.E4 )
	expect(Note.add("C4", Interval.P4)).toMatchObject(Note.F4 )
	expect(Note.add("C4", Interval.d5)).toMatchObject(Note.F$4)
	expect(Note.add("C4", Interval.P5)).toMatchObject(Note.G4 )
	expect(Note.add("C4", Interval.m6)).toMatchObject(Note.G$4)
	expect(Note.add("C4", Interval.M6)).toMatchObject(Note.A4 )
	expect(Note.add("C4", Interval.m7)).toMatchObject(Note.A$4)
	expect(Note.add("C4", Interval.M7)).toMatchObject(Note.B4 )
	expect(Note.add("C4", Interval.P8)).toMatchObject(Note.C5 )
})


//################################//
//###  Test.Instance.subtract  ###//
//################################//

test("Instance.subtract", ()=>{
	//###  Absolute Intervals  ###//
	expect(Note.C4.subtract(-12)).toMatchObject(Note.C5 )
	expect(Note.C4.subtract(-11)).toMatchObject(Note.B4 )
	expect(Note.C4.subtract(-10)).toMatchObject(Note.A$4)
	expect(Note.C4.subtract(-9 )).toMatchObject(Note.A4 )
	expect(Note.C4.subtract(-8 )).toMatchObject(Note.G$4)
	expect(Note.C4.subtract(-7 )).toMatchObject(Note.G4 )
	expect(Note.C4.subtract(-6 )).toMatchObject(Note.F$4)
	expect(Note.C4.subtract(-5 )).toMatchObject(Note.F4 )
	expect(Note.C4.subtract(-4 )).toMatchObject(Note.E4 )
	expect(Note.C4.subtract(-3 )).toMatchObject(Note.D$4)
	expect(Note.C4.subtract(-2 )).toMatchObject(Note.D4 )
	expect(Note.C4.subtract(-1 )).toMatchObject(Note.C$4)
	expect(Note.C4.subtract(0  )).toMatchObject(Note.C4 )
	expect(Note.C4.subtract(1  )).toMatchObject(Note.B3 )
	expect(Note.C4.subtract(2  )).toMatchObject(Note.A$3)
	expect(Note.C4.subtract(3  )).toMatchObject(Note.A3 )
	expect(Note.C4.subtract(4  )).toMatchObject(Note.G$3)
	expect(Note.C4.subtract(5  )).toMatchObject(Note.G3 )
	expect(Note.C4.subtract(6  )).toMatchObject(Note.F$3)
	expect(Note.C4.subtract(7  )).toMatchObject(Note.F3 )
	expect(Note.C4.subtract(8  )).toMatchObject(Note.E3 )
	expect(Note.C4.subtract(9  )).toMatchObject(Note.D$3)
	expect(Note.C4.subtract(10 )).toMatchObject(Note.D3 )
	expect(Note.C4.subtract(11 )).toMatchObject(Note.C$3)
	expect(Note.C4.subtract(12 )).toMatchObject(Note.C3 )

	//###  Relative Intervals  ###//
	expect(Note.C4.subtract(Interval.P1)).toMatchObject(Note.C4 )
	expect(Note.C4.subtract(Interval.m2)).toMatchObject(Note.B3 )
	expect(Note.C4.subtract(Interval.M2)).toMatchObject(Note.A$3)
	expect(Note.C4.subtract(Interval.m3)).toMatchObject(Note.A3 )
	expect(Note.C4.subtract(Interval.M3)).toMatchObject(Note.G$3)
	expect(Note.C4.subtract(Interval.P4)).toMatchObject(Note.G3 )
	expect(Note.C4.subtract(Interval.d5)).toMatchObject(Note.F$3)
	expect(Note.C4.subtract(Interval.P5)).toMatchObject(Note.F3 )
	expect(Note.C4.subtract(Interval.m6)).toMatchObject(Note.E3 )
	expect(Note.C4.subtract(Interval.M6)).toMatchObject(Note.D$3)
	expect(Note.C4.subtract(Interval.m7)).toMatchObject(Note.D3 )
	expect(Note.C4.subtract(Interval.M7)).toMatchObject(Note.C$3)
	expect(Note.C4.subtract(Interval.P8)).toMatchObject(Note.C3 )
})


//##############################//
//###  Test.Static.subtract  ###//
//##############################//

test("Instance.subtract", ()=>{
	//###  Absolute Intervals  ###//
	expect(Note.subtract("C4", -12)).toMatchObject(Note.C5 )
	expect(Note.subtract("C4", -11)).toMatchObject(Note.B4 )
	expect(Note.subtract("C4", -10)).toMatchObject(Note.A$4)
	expect(Note.subtract("C4", -9 )).toMatchObject(Note.A4 )
	expect(Note.subtract("C4", -8 )).toMatchObject(Note.G$4)
	expect(Note.subtract("C4", -7 )).toMatchObject(Note.G4 )
	expect(Note.subtract("C4", -6 )).toMatchObject(Note.F$4)
	expect(Note.subtract("C4", -5 )).toMatchObject(Note.F4 )
	expect(Note.subtract("C4", -4 )).toMatchObject(Note.E4 )
	expect(Note.subtract("C4", -3 )).toMatchObject(Note.D$4)
	expect(Note.subtract("C4", -2 )).toMatchObject(Note.D4 )
	expect(Note.subtract("C4", -1 )).toMatchObject(Note.C$4)
	expect(Note.subtract("C4", 0  )).toMatchObject(Note.C4 )
	expect(Note.subtract("C4", 1  )).toMatchObject(Note.B3 )
	expect(Note.subtract("C4", 2  )).toMatchObject(Note.A$3)
	expect(Note.subtract("C4", 3  )).toMatchObject(Note.A3 )
	expect(Note.subtract("C4", 4  )).toMatchObject(Note.G$3)
	expect(Note.subtract("C4", 5  )).toMatchObject(Note.G3 )
	expect(Note.subtract("C4", 6  )).toMatchObject(Note.F$3)
	expect(Note.subtract("C4", 7  )).toMatchObject(Note.F3 )
	expect(Note.subtract("C4", 8  )).toMatchObject(Note.E3 )
	expect(Note.subtract("C4", 9  )).toMatchObject(Note.D$3)
	expect(Note.subtract("C4", 10 )).toMatchObject(Note.D3 )
	expect(Note.subtract("C4", 11 )).toMatchObject(Note.C$3)
	expect(Note.subtract("C4", 12 )).toMatchObject(Note.C3 )

	//###  Relative Intervals  ###//
	expect(Note.subtract("C4", Interval.P1)).toMatchObject(Note.C4 )
	expect(Note.subtract("C4", Interval.m2)).toMatchObject(Note.B3 )
	expect(Note.subtract("C4", Interval.M2)).toMatchObject(Note.A$3)
	expect(Note.subtract("C4", Interval.m3)).toMatchObject(Note.A3 )
	expect(Note.subtract("C4", Interval.M3)).toMatchObject(Note.G$3)
	expect(Note.subtract("C4", Interval.P4)).toMatchObject(Note.G3 )
	expect(Note.subtract("C4", Interval.d5)).toMatchObject(Note.F$3)
	expect(Note.subtract("C4", Interval.P5)).toMatchObject(Note.F3 )
	expect(Note.subtract("C4", Interval.m6)).toMatchObject(Note.E3 )
	expect(Note.subtract("C4", Interval.M6)).toMatchObject(Note.D$3)
	expect(Note.subtract("C4", Interval.m7)).toMatchObject(Note.D3 )
	expect(Note.subtract("C4", Interval.M7)).toMatchObject(Note.C$3)
	expect(Note.subtract("C4", Interval.P8)).toMatchObject(Note.C3 )
})


//####################//
//###  Test.chord  ###//
//####################//

test("chord", ()=>{
	const c4_Major = Chord.C.Major(4).notes

	expect(Note.C4.chord(Chord.Major                            ).notes).toMatchObject(c4_Major)
	expect(Note.C4.chord([Interval.P1, Interval.M3, Interval.P5]).notes).toMatchObject(c4_Major)
	expect(Note.C4.chord([0,           4,           7          ]).notes).toMatchObject(c4_Major)
})
