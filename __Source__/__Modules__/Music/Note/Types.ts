
//#######################//
//###  Exports.Public ###//
//#######################//

export const Accidentals = ["#", "b"] as const
export type  Accidental  = typeof Accidentals[number]

export const MidiOctaves = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const
export type  MidiOctave  = typeof MidiOctaves[number]

export const NoteNames = [
	"C-1", "C#-1", "Db-1", "D-1", "Eb-1", "D#-1", "E-1", "F-1", "F#-1", "Gb-1", "G-1",  "Ab-1", "G#-1", "A-1", "Bb-1", "A#-1", "B-1",
	"C0",  "C#0",  "Db0",  "D0",  "Eb0",  "D#0",  "E0",  "F0",  "F#0",  "Gb0",  "G0",   "Ab0",  "G#0",  "A0",  "Bb0",  "A#0",  "B0",
	"C1",  "C#1",  "Db1",  "D1",  "Eb1",  "D#1",  "E1",  "F1",  "F#1",  "Gb1",  "G1",   "Ab1",  "G#1",  "A1",  "Bb1",  "A#1",  "B1",
	"C2",  "C#2",  "Db2",  "D2",  "Eb2",  "D#2",  "E2",  "F2",  "F#2",  "Gb2",  "G2",   "Ab2",  "G#2",  "A2",  "Bb2",  "A#2",  "B2",
	"C3",  "C#3",  "Db3",  "D3",  "Eb3",  "D#3",  "E3",  "F3",  "F#3",  "Gb3",  "G3",   "Ab3",  "G#3",  "A3",  "Bb3",  "A#3",  "B3",
	"C4",  "C#4",  "Db4",  "D4",  "Eb4",  "D#4",  "E4",  "F4",  "F#4",  "Gb4",  "G4",   "Ab4",  "G#4",  "A4",  "Bb4",  "A#4",  "B4",
	"C5",  "C#5",  "Db5",  "D5",  "Eb5",  "D#5",  "E5",  "F5",  "F#5",  "Gb5",  "G5",   "Ab5",  "G#5",  "A5",  "Bb5",  "A#5",  "B5",
	"C6",  "C#6",  "Db6",  "D6",  "Eb6",  "D#6",  "E6",  "F6",  "F#6",  "Gb6",  "G6",   "Ab6",  "G#6",  "A6",  "Bb6",  "A#6",  "B6",
	"C7",  "C#7",  "Db7",  "D7",  "Eb7",  "D#7",  "E7",  "F7",  "F#7",  "Gb7",  "G7",   "Ab7",  "G#7",  "A7",  "Bb7",  "A#7",  "B7",
	"C8",  "C#8",  "Db8",  "D8",  "Eb8",  "D#8",  "E8",  "F8",  "F#8",  "Gb8",  "G8",   "Ab8",  "G#8",  "A8",  "Bb8",  "A#8",  "B8",
	"C9",  "C#9",  "Db9",  "D9",  "Eb9",  "D#9",  "E9",  "F9",  "F#9",  "Gb9",  "G9",
] as const
export type NoteName = typeof NoteNames[number]

export const MidiValues = [
	0,   1,   2,   3,   4,   5,   6,   7,   8,   9,
	10,  11,  12,  13,  14,  15,  16,  17,  18,  19,
	20,  21,  22,  23,  24,  25,  26,  27,  28,  29,
	30,  31,  32,  33,  34,  35,  36,  37,  38,  39,
	40,  41,  42,  43,  44,  45,  46,  47,  48,  49,
	50,  51,  52,  53,  54,  55,  56,  57,  58,  59,
	60,  61,  62,  63,  64,  65,  66,  67,  68,  69,
	70,  71,  72,  73,  74,  75,  76,  77,  78,  79,
	80,  81,  82,  83,  84,  85,  86,  87,  88,  89,
	90,  91,  92,  93,  94,  95,  96,  97,  98,  99,
	100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
	110, 111, 112, 113, 114, 115, 116, 117, 118, 119,
	120, 121, 122, 123, 124, 125, 126, 127,
] as const
export type MidiValue = typeof MidiValues[number]

export const Pitches = [
	"C", "C#", "Db", "D", "Eb", "D#", "E", "F", "F#", "Gb", "G", "Ab", "G#", "A", "Bb", "A#", "B",
] as const
export type Pitch = typeof Pitches[number]

export const PitchVariables = [
	"C", "C$", "Db", "D", "Eb", "D$", "E", "F", "F$", "Gb", "G", "Ab", "G$", "A", "Bb", "A$", "B",
] as const
export type PitchVariable = typeof PitchVariables[number]

export const Pitches_Flat = [
	"C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B",
] as const
export type Pitch_Flat = typeof Pitches_Flat[number]
export const PitchVariables_Flat = [
	"C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B",
] as const
export type PitchVariable_Flat = typeof PitchVariables_Flat[number]

export const Pitches_Sharp = [
	"C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B",
] as const
export type Pitch_Sharp = typeof Pitches_Sharp[number]
export const SharpPitchVariables = [
	"C", "C$", "D", "D$", "E", "F", "F$", "G", "G$", "A", "A$", "B",
] as const
export type PitchVariable_Sharp = typeof SharpPitchVariables[number]

