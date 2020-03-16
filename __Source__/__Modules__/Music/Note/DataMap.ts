//###  Module  ###//
import {Note} from "./__Main__"
import {
	MidiValue,
	NoteName,
	Pitch,       PitchVariable,
	Pitch_Flat,  PitchVariable_Flat,
	Pitch_Sharp, PitchVariable_Sharp,
} from "./Types"


//###############################//
//###  Exports.Default.Public ###//
//###############################//

export default class{

	static readonly MidiValue_To_Note: {[key in MidiValue]: Note} = {
		0:  Note.C_Negative1, 1:  Note.C$_Negative1, 2:  Note.D_Negative1, 3:  Note.D$_Negative1, 4:  Note.E_Negative1, 5:  Note.F_Negative1, 6:  Note.F$_Negative1, 7:  Note.G_Negative1, 8:  Note.G$_Negative1, 9:  Note.A_Negative1, 10: Note.A$_Negative1, 11: Note.B_Negative1,
		12: Note.C0,          13: Note.C$0,          14: Note.D0,          15: Note.D$0,          16: Note.E0,          17: Note.F0,          18: Note.F$0,          19: Note.G0,          20: Note.G$0,          21: Note.A0,          22: Note.A$0,          23: Note.B0,
		24: Note.C1,          25: Note.C$1,          26: Note.D1,          27: Note.D$1,          28: Note.E1,          29: Note.F1,          30: Note.F$1,          31: Note.G1,          32: Note.G$1,          33: Note.A1,          34: Note.A$1,          35: Note.B1,
		36: Note.C2,          37: Note.C$2,          38: Note.D2,          39: Note.D$2,          40: Note.E2,          41: Note.F2,          42: Note.F$2,          43: Note.G2,          44: Note.G$2,          45: Note.A2,          46: Note.A$2,          47: Note.B2,
		48: Note.C3,          49: Note.C$3,          50: Note.D3,          51: Note.D$3,          52: Note.E3,          53: Note.F3,          54: Note.F$3,          55: Note.G3,          56: Note.G$3,          57: Note.A3,          58: Note.A$3,          59: Note.B3,
		60: Note.C4,          61: Note.C$4,          62: Note.D4,          63: Note.D$4,          64: Note.E4,          65: Note.F4,          66: Note.F$4,          67: Note.G4,          68: Note.G$4,          69: Note.A4,          70: Note.A$4,          71: Note.B4,
		72: Note.C5,          73: Note.C$5,          74: Note.D5,          75: Note.D$5,          76: Note.E5,          77: Note.F5,          78: Note.F$5,          79: Note.G5,          80: Note.G$5,          81: Note.A5,          82: Note.A$5,          83: Note.B5,
		84: Note.C6,          85: Note.C$6,          86: Note.D6,          87: Note.D$6,          88: Note.E6,          89: Note.F6,          90: Note.F$6,          91: Note.G6,          92: Note.G$6,          93: Note.A6,          94: Note.A$6,          95: Note.B6,
		96: Note.C7,          97: Note.C$7,          98: Note.D7,          99: Note.D$7,          100:Note.E7,          101:Note.F7,          102:Note.F$7,          103:Note.G7,          104:Note.G$7,          105:Note.A7,          106:Note.A$7,          107:Note.B7,
		108:Note.C8,          109:Note.C$8,          110:Note.D8,          111:Note.D$8,          112:Note.E8,          113:Note.F8,          114:Note.F$8,          115:Note.G8,          116:Note.G$8,          117:Note.A8,          118:Note.A$8,          119:Note.B8,
		120:Note.C9,          121:Note.C$9,          122:Note.D9,          123:Note.D$9,          124:Note.E9,          125:Note.F9,          126:Note.F$9,          127:Note.G9,
	}

	static readonly NoteName_To_Note: {[key in NoteName]: Note} = {
		"C-1":Note.C_Negative1, "C#-1":Note.C$_Negative1, "Db-1":Note.Db_Negative1, "D-1":Note.D_Negative1, "D#-1":Note.D$_Negative1, "Eb-1":Note.Eb_Negative1, "E-1":Note.E_Negative1, "F-1":Note.F_Negative1, "F#-1":Note.F$_Negative1, "Gb-1":Note.Gb_Negative1, "G-1":Note.G_Negative1, "G#-1":Note.G$_Negative1, "Ab-1":Note.Ab_Negative1, "A-1":Note.A_Negative1, "A#-1":Note.A$_Negative1, "Bb-1":Note.Bb_Negative1, "B-1":Note.B_Negative1,
		"C0": Note.C0,          "C#0": Note.C$0,          "Db0": Note.Db0,          "D0": Note.D0,          "D#0": Note.D$0,          "Eb0": Note.Eb0,          "E0": Note.E0,          "F0": Note.F0,          "F#0": Note.F$0,          "Gb0": Note.Gb0,          "G0": Note.G0,          "G#0": Note.G$0,          "Ab0": Note.Ab0,          "A0": Note.A0,          "A#0": Note.A$0,          "Bb0": Note.Bb0,          "B0": Note.B0,
		"C1": Note.C1,          "C#1": Note.C$1,          "Db1": Note.Db1,          "D1": Note.D1,          "D#1": Note.D$1,          "Eb1": Note.Eb1,          "E1": Note.E1,          "F1": Note.F1,          "F#1": Note.F$1,          "Gb1": Note.Gb1,          "G1": Note.G1,          "G#1": Note.G$1,          "Ab1": Note.Ab1,          "A1": Note.A1,          "A#1": Note.A$1,          "Bb1": Note.Bb1,          "B1": Note.B1,
		"C2": Note.C2,          "C#2": Note.C$2,          "Db2": Note.Db2,          "D2": Note.D2,          "D#2": Note.D$2,          "Eb2": Note.Eb2,          "E2": Note.E2,          "F2": Note.F2,          "F#2": Note.F$2,          "Gb2": Note.Gb2,          "G2": Note.G2,          "G#2": Note.G$2,          "Ab2": Note.Ab2,          "A2": Note.A2,          "A#2": Note.A$2,          "Bb2": Note.Bb2,          "B2": Note.B2,
		"C3": Note.C3,          "C#3": Note.C$3,          "Db3": Note.Db3,          "D3": Note.D3,          "D#3": Note.D$3,          "Eb3": Note.Eb3,          "E3": Note.E3,          "F3": Note.F3,          "F#3": Note.F$3,          "Gb3": Note.Gb3,          "G3": Note.G3,          "G#3": Note.G$3,          "Ab3": Note.Ab3,          "A3": Note.A3,          "A#3": Note.A$3,          "Bb3": Note.Bb3,          "B3": Note.B3,
		"C4": Note.C4,          "C#4": Note.C$4,          "Db4": Note.Db4,          "D4": Note.D4,          "D#4": Note.D$4,          "Eb4": Note.Eb4,          "E4": Note.E4,          "F4": Note.F4,          "F#4": Note.F$4,          "Gb4": Note.Gb4,          "G4": Note.G4,          "G#4": Note.G$4,          "Ab4": Note.Ab4,          "A4": Note.A4,          "A#4": Note.A$4,          "Bb4": Note.Bb4,          "B4": Note.B4,
		"C5": Note.C5,          "C#5": Note.C$5,          "Db5": Note.Db5,          "D5": Note.D5,          "D#5": Note.D$5,          "Eb5": Note.Eb5,          "E5": Note.E5,          "F5": Note.F5,          "F#5": Note.F$5,          "Gb5": Note.Gb5,          "G5": Note.G5,          "G#5": Note.G$5,          "Ab5": Note.Ab5,          "A5": Note.A5,          "A#5": Note.A$5,          "Bb5": Note.Bb5,          "B5": Note.B5,
		"C6": Note.C6,          "C#6": Note.C$6,          "Db6": Note.Db6,          "D6": Note.D6,          "D#6": Note.D$6,          "Eb6": Note.Eb6,          "E6": Note.E6,          "F6": Note.F6,          "F#6": Note.F$6,          "Gb6": Note.Gb6,          "G6": Note.G6,          "G#6": Note.G$6,          "Ab6": Note.Ab6,          "A6": Note.A6,          "A#6": Note.A$6,          "Bb6": Note.Bb6,          "B6": Note.B6,
		"C7": Note.C7,          "C#7": Note.C$7,          "Db7": Note.Db7,          "D7": Note.D7,          "D#7": Note.D$7,          "Eb7": Note.Eb7,          "E7": Note.E7,          "F7": Note.F7,          "F#7": Note.F$7,          "Gb7": Note.Gb7,          "G7": Note.G7,          "G#7": Note.G$7,          "Ab7": Note.Ab7,          "A7": Note.A7,          "A#7": Note.A$7,          "Bb7": Note.Bb7,          "B7": Note.B7,
		"C8": Note.C8,          "C#8": Note.C$8,          "Db8": Note.Db8,          "D8": Note.D8,          "D#8": Note.D$8,          "Eb8": Note.Eb8,          "E8": Note.E8,          "F8": Note.F8,          "F#8": Note.F$8,          "Gb8": Note.Gb8,          "G8": Note.G8,          "G#8": Note.G$8,          "Ab8": Note.Ab8,          "A8": Note.A8,          "A#8": Note.A$8,          "Bb8": Note.Bb8,          "B8": Note.B8,
		"C9": Note.C9,          "C#9": Note.C$9,          "Db9": Note.Db9,          "D9": Note.D9,          "D#9": Note.D$9,          "Eb9": Note.Eb9,          "E9": Note.E9,          "F9": Note.F9,          "F#9": Note.F$9,          "Gb9": Note.Gb9,          "G9": Note.G9,
	}

	static readonly FlatPitch_To_SharpPitch: {[key in Pitch]: Pitch_Sharp} = {
		"C":"C",  "C#":"C#",  "Db":"C#",  "D":"D",  "D#":"D#",  "Eb":"D#",  "E":"E",  "F":"F",  "F#":"F#",  "Gb":"F#",  "G":"G",  "G#":"G#",  "Ab":"G#",  "A":"A",  "A#":"A#",  "Bb":"A#",  "B":"B",
	}
	static readonly FlatPitchVariable_To_SharpPitchVariable: {[key in PitchVariable]: PitchVariable_Sharp} = {
		"C":"C",  "C$":"C$",  "Db":"C$",  "D":"D",  "D$":"D$",  "Eb":"D$",  "E":"E",  "F":"F",  "F$":"F$",  "Gb":"F$",  "G":"G",  "G$":"G$",  "Ab":"G$",  "A":"A",  "A$":"A$",  "Bb":"A$",  "B":"B",
	}

	static readonly SharpPitch_To_FlatPitch: {[key in Pitch]: Pitch_Flat} = {
		"C":"C",  "C#":"Db",  "Db":"Db",  "D":"D",  "D#":"Eb",  "Eb":"Eb",  "E":"E",  "F":"F",  "F#":"Gb",  "Gb":"Gb",  "G":"G",  "G#":"Ab",  "Ab":"Ab",  "A":"A",  "A#":"Bb",  "Bb":"Bb",  "B":"B",
	}
	static readonly SharpPitchVariable_To_FlatPitchVariable: {[key in PitchVariable]: PitchVariable_Flat} = {
		"C":"C",  "C$":"Db",  "Db":"Db",  "D":"D",  "D$":"Eb",  "Eb":"Eb",  "E":"E",  "F":"F",  "F$":"Gb",  "Gb":"Gb",  "G":"G",  "G$":"Ab",  "Ab":"Ab",  "A":"A",  "A$":"Bb",  "Bb":"Bb",  "B":"B",
	}

}
