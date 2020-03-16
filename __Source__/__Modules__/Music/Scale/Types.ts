
//#######################//
//###  Exports.Public ###//
//#######################//

export const Degrees = [
	1, 2, 3, 4, 5, 6, 7,
] as const
export type Degree = typeof Degrees[number]

export const ScaleIntervals = ["P1",  "d2",  "A1",  "m2",  "M2",  "d3",  "A2",  "m3",  "M3",  "d4",  "A3",  "P4",  "A4",  "d5",  "P5",  "d6",  "A5",  "m6",  "M6",  "d7",  "A6",  "m7",  "M7",  "d8"] as const
export type  ScaleInterval  = typeof ScaleIntervals[number]
