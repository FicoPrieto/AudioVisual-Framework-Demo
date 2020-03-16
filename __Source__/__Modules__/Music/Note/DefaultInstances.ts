//###  Reference  ###//
// http://www.tonalsoft.com/pub/news/pitch-bend.aspx

//###  Module  ###//
import {Note, _Note} from "./__Main__"


//##############################//
//###  Exports.Class.Public  ###//
//##############################//

export class DefaultInstances{
	static initialize(){
		_initialize_Individual_Notes()
		_initialize_All_Notes()
	}
}


//#########################//
//###  Exports.Private  ###//
//#########################//

export const _NoteData = [
	{variableName:"C_Negative1",  data:{accidental:null, cents:-6900, hertz:8.1757989156,     midiValue:0,   name:"C-1",  octave:-1, pitch:"C" }},
	{variableName:"C$_Negative1", data:{accidental:"#",  cents:-6800, hertz:8.6619572180,     midiValue:1,   name:"C#-1", octave:-1, pitch:"C#"}},
	{variableName:"Db_Negative1", data:{accidental:"b",  cents:-6800, hertz:8.6619572180,     midiValue:1,   name:"Db-1", octave:-1, pitch:"C#"}},
	{variableName:"D_Negative1",  data:{accidental:null, cents:-6700, hertz:9.1770239974,     midiValue:2,   name:"D-1",  octave:-1, pitch:"D" }},
	{variableName:"D$_Negative1", data:{accidental:"#",  cents:-6600, hertz:9.7227182413,     midiValue:3,   name:"D#-1", octave:-1, pitch:"D#"}},
	{variableName:"Eb_Negative1", data:{accidental:"b",  cents:-6600, hertz:9.7227182413,     midiValue:3,   name:"Eb-1", octave:-1, pitch:"D#"}},
	{variableName:"E_Negative1",  data:{accidental:null, cents:-6500, hertz:10.3008611535,    midiValue:4,   name:"E-1",  octave:-1, pitch:"E" }},
	{variableName:"F_Negative1",  data:{accidental:null, cents:-6400, hertz:10.9133822323,    midiValue:5,   name:"F-1",  octave:-1, pitch:"F" }},
	{variableName:"F$_Negative1", data:{accidental:"#",  cents:-6300, hertz:11.5623257097,    midiValue:6,   name:"F#-1", octave:-1, pitch:"F#"}},
	{variableName:"Gb_Negative1", data:{accidental:"b",  cents:-6300, hertz:11.5623257097,    midiValue:6,   name:"Gb-1", octave:-1, pitch:"F#"}},
	{variableName:"G_Negative1",  data:{accidental:null, cents:-6200, hertz:12.2498573744,    midiValue:7,   name:"G-1",  octave:-1, pitch:"G" }},
	{variableName:"G$_Negative1", data:{accidental:"#",  cents:-6100, hertz:12.9782717994,    midiValue:8,   name:"G#-1", octave:-1, pitch:"G#"}},
	{variableName:"Ab_Negative1", data:{accidental:"b",  cents:-6100, hertz:12.9782717994,    midiValue:8,   name:"Ab-1", octave:-1, pitch:"G#"}},
	{variableName:"A_Negative1",  data:{accidental:null, cents:-6000, hertz:13.7500000000,    midiValue:9,   name:"A-1",  octave:-1, pitch:"A" }},
	{variableName:"A$_Negative1", data:{accidental:"#",  cents:-5900, hertz:14.5676175474,    midiValue:10,  name:"A#-1", octave:-1, pitch:"A#"}},
	{variableName:"Bb_Negative1", data:{accidental:"b",  cents:-5900, hertz:14.5676175474,    midiValue:10,  name:"Bb-1", octave:-1, pitch:"A#"}},
	{variableName:"B_Negative1",  data:{accidental:null, cents:-5800, hertz:15.4338531643,    midiValue:11,  name:"B-1",  octave:-1, pitch:"B" }},
	{variableName:"C0",           data:{accidental:null, cents:-5700, hertz:16.3515978313,    midiValue:12,  name:"C0",   octave:0,  pitch:"C" }},
	{variableName:"C$0",          data:{accidental:"#",  cents:-5600, hertz:17.3239144361,    midiValue:13,  name:"C#0",  octave:0,  pitch:"C#"}},
	{variableName:"Db0",          data:{accidental:"b",  cents:-5600, hertz:17.3239144361,    midiValue:13,  name:"Db0",  octave:0,  pitch:"C#"}},
	{variableName:"D0",           data:{accidental:null, cents:-5500, hertz:18.3540479948,    midiValue:14,  name:"D0",   octave:0,  pitch:"D" }},
	{variableName:"D$0",          data:{accidental:"#",  cents:-5400, hertz:19.4454364826,    midiValue:15,  name:"D#0",  octave:0,  pitch:"D#"}},
	{variableName:"Eb0",          data:{accidental:"b",  cents:-5400, hertz:19.4454364826,    midiValue:15,  name:"Eb0",  octave:0,  pitch:"D#"}},
	{variableName:"E0",           data:{accidental:null, cents:-5300, hertz:20.6017223071,    midiValue:16,  name:"E0",   octave:0,  pitch:"E" }},
	{variableName:"F0",           data:{accidental:null, cents:-5200, hertz:21.8267644646,    midiValue:17,  name:"F0",   octave:0,  pitch:"F" }},
	{variableName:"F$0",          data:{accidental:"#",  cents:-5100, hertz:23.1246514195,    midiValue:18,  name:"F#0",  octave:0,  pitch:"F#"}},
	{variableName:"Gb0",          data:{accidental:"b",  cents:-5100, hertz:23.1246514195,    midiValue:18,  name:"Gb0",  octave:0,  pitch:"F#"}},
	{variableName:"G0",           data:{accidental:null, cents:-5000, hertz:24.4997147489,    midiValue:19,  name:"G0",   octave:0,  pitch:"G" }},
	{variableName:"G$0",          data:{accidental:"#",  cents:-4900, hertz:25.9565435987,    midiValue:20,  name:"G#0",  octave:0,  pitch:"G#"}},
	{variableName:"Ab0",          data:{accidental:"b",  cents:-4900, hertz:25.9565435987,    midiValue:20,  name:"Ab0",  octave:0,  pitch:"G#"}},
	{variableName:"A0",           data:{accidental:null, cents:-4800, hertz:27.5000000000,    midiValue:21,  name:"A0",   octave:0,  pitch:"A" }},
	{variableName:"A$0",          data:{accidental:"#",  cents:-4700, hertz:29.1352350949,    midiValue:22,  name:"A#0",  octave:0,  pitch:"A#"}},
	{variableName:"Bb0",          data:{accidental:"b",  cents:-4700, hertz:29.1352350949,    midiValue:22,  name:"Bb0",  octave:0,  pitch:"A#"}},
	{variableName:"B0",           data:{accidental:null, cents:-4600, hertz:30.8677063285,    midiValue:23,  name:"B0",   octave:0,  pitch:"B" }},
	{variableName:"C1",           data:{accidental:null, cents:-4500, hertz:32.7031956626,    midiValue:24,  name:"C1",   octave:1,  pitch:"C" }},
	{variableName:"C$1",          data:{accidental:"#",  cents:-4400, hertz:34.6478288721,    midiValue:25,  name:"C#1",  octave:1,  pitch:"C#"}},
	{variableName:"Db1",          data:{accidental:"b",  cents:-4400, hertz:34.6478288721,    midiValue:25,  name:"Db1",  octave:1,  pitch:"C#"}},
	{variableName:"D1",           data:{accidental:null, cents:-4300, hertz:36.7080959897,    midiValue:26,  name:"D1",   octave:1,  pitch:"D" }},
	{variableName:"D$1",          data:{accidental:"#",  cents:-4200, hertz:38.8908729653,    midiValue:27,  name:"D#1",  octave:1,  pitch:"D#"}},
	{variableName:"Eb1",          data:{accidental:"b",  cents:-4200, hertz:38.8908729653,    midiValue:27,  name:"Eb1",  octave:1,  pitch:"D#"}},
	{variableName:"E1",           data:{accidental:null, cents:-4100, hertz:41.2034446141,    midiValue:28,  name:"E1",   octave:1,  pitch:"E" }},
	{variableName:"F1",           data:{accidental:null, cents:-4000, hertz:43.6535289291,    midiValue:29,  name:"F1",   octave:1,  pitch:"F" }},
	{variableName:"F$1",          data:{accidental:"#",  cents:-3900, hertz:46.2493028390,    midiValue:30,  name:"F#1",  octave:1,  pitch:"F#"}},
	{variableName:"Gb1",          data:{accidental:"b",  cents:-3900, hertz:46.2493028390,    midiValue:30,  name:"Gb1",  octave:1,  pitch:"F#"}},
	{variableName:"G1",           data:{accidental:null, cents:-3800, hertz:48.9994294977,    midiValue:31,  name:"G1",   octave:1,  pitch:"G" }},
	{variableName:"G$1",          data:{accidental:"#",  cents:-3700, hertz:51.9130871975,    midiValue:32,  name:"G#1",  octave:1,  pitch:"G#"}},
	{variableName:"Ab1",          data:{accidental:"b",  cents:-3700, hertz:51.9130871975,    midiValue:32,  name:"Ab1",  octave:1,  pitch:"G#"}},
	{variableName:"A1",           data:{accidental:null, cents:-3600, hertz:55,               midiValue:33,  name:"A1",   octave:1,  pitch:"A" }},
	{variableName:"A$1",          data:{accidental:"#",  cents:-3500, hertz:58.2704701898,    midiValue:34,  name:"A#1",  octave:1,  pitch:"A#"}},
	{variableName:"Bb1",          data:{accidental:"b",  cents:-3500, hertz:58.2704701898,    midiValue:34,  name:"Bb1",  octave:1,  pitch:"A#"}},
	{variableName:"B1",           data:{accidental:null, cents:-3400, hertz:61.7354126570,    midiValue:35,  name:"B1",   octave:1,  pitch:"B" }},
	{variableName:"C2",           data:{accidental:null, cents:-3300, hertz:65.4063913251,    midiValue:36,  name:"C2",   octave:2,  pitch:"C" }},
	{variableName:"C$2",          data:{accidental:"#",  cents:-3200, hertz:69.2956577442,    midiValue:37,  name:"C#2",  octave:2,  pitch:"C#"}},
	{variableName:"Db2",          data:{accidental:"b",  cents:-3200, hertz:69.2956577442,    midiValue:37,  name:"Db2",  octave:2,  pitch:"C#"}},
	{variableName:"D2",           data:{accidental:null, cents:-3100, hertz:73.4161919794,    midiValue:38,  name:"D2",   octave:2,  pitch:"D" }},
	{variableName:"D$2",          data:{accidental:"#",  cents:-3000, hertz:77.7817459305,    midiValue:39,  name:"D#2",  octave:2,  pitch:"D#"}},
	{variableName:"Eb2",          data:{accidental:"b",  cents:-3000, hertz:77.7817459305,    midiValue:39,  name:"Eb2",  octave:2,  pitch:"D#"}},
	{variableName:"E2",           data:{accidental:null, cents:-2900, hertz:82.4068892282,    midiValue:40,  name:"E2",   octave:2,  pitch:"E" }},
	{variableName:"F2",           data:{accidental:null, cents:-2800, hertz:87.3070578583,    midiValue:41,  name:"F2",   octave:2,  pitch:"F" }},
	{variableName:"F$2",          data:{accidental:"#",  cents:-2700, hertz:92.4986056779,    midiValue:42,  name:"F#2",  octave:2,  pitch:"F#"}},
	{variableName:"Gb2",          data:{accidental:"b",  cents:-2700, hertz:92.4986056779,    midiValue:42,  name:"Gb2",  octave:2,  pitch:"F#"}},
	{variableName:"G2",           data:{accidental:null, cents:-2600, hertz:97.9988589954,    midiValue:43,  name:"G2",   octave:2,  pitch:"G" }},
	{variableName:"G$2",          data:{accidental:"#",  cents:-2500, hertz:103.8261743950,   midiValue:44,  name:"G#2",  octave:2,  pitch:"G#"}},
	{variableName:"Ab2",          data:{accidental:"b",  cents:-2500, hertz:103.8261743950,   midiValue:44,  name:"Ab2",  octave:2,  pitch:"G#"}},
	{variableName:"A2",           data:{accidental:null, cents:-2400, hertz:110,              midiValue:45,  name:"A2",   octave:2,  pitch:"A" }},
	{variableName:"A$2",          data:{accidental:"#",  cents:-2300, hertz:116.5409403795,   midiValue:46,  name:"A#2",  octave:2,  pitch:"A#"}},
	{variableName:"Bb2",          data:{accidental:"b",  cents:-2300, hertz:116.5409403795,   midiValue:46,  name:"Bb2",  octave:2,  pitch:"A#"}},
	{variableName:"B2",           data:{accidental:null, cents:-2200, hertz:123.4708253140,   midiValue:47,  name:"B2",   octave:2,  pitch:"B" }},
	{variableName:"C3",           data:{accidental:null, cents:-2100, hertz:130.8127826503,   midiValue:48,  name:"C3",   octave:3,  pitch:"C" }},
	{variableName:"C$3",          data:{accidental:"#",  cents:-2000, hertz:138.5913154884,   midiValue:49,  name:"C#3",  octave:3,  pitch:"C#"}},
	{variableName:"Db3",          data:{accidental:"b",  cents:-2000, hertz:138.5913154884,   midiValue:49,  name:"Db3",  octave:3,  pitch:"C#"}},
	{variableName:"D3",           data:{accidental:null, cents:-1900, hertz:146.8323839587,   midiValue:50,  name:"D3",   octave:3,  pitch:"D" }},
	{variableName:"D$3",          data:{accidental:"#",  cents:-1800, hertz:155.5634918610,   midiValue:51,  name:"D#3",  octave:3,  pitch:"D#"}},
	{variableName:"Eb3",          data:{accidental:"b",  cents:-1800, hertz:155.5634918610,   midiValue:51,  name:"Eb3",  octave:3,  pitch:"D#"}},
	{variableName:"E3",           data:{accidental:null, cents:-1700, hertz:164.8137784564,   midiValue:52,  name:"E3",   octave:3,  pitch:"E" }},
	{variableName:"F3",           data:{accidental:null, cents:-1600, hertz:174.6141157165,   midiValue:53,  name:"F3",   octave:3,  pitch:"F" }},
	{variableName:"F$3",          data:{accidental:"#",  cents:-1500, hertz:184.9972113558,   midiValue:54,  name:"F#3",  octave:3,  pitch:"F#"}},
	{variableName:"Gb3",          data:{accidental:"b",  cents:-1500, hertz:184.9972113558,   midiValue:54,  name:"Gb3",  octave:3,  pitch:"F#"}},
	{variableName:"G3",           data:{accidental:null, cents:-1400, hertz:195.9977179909,   midiValue:55,  name:"G3",   octave:3,  pitch:"G" }},
	{variableName:"G$3",          data:{accidental:"#",  cents:-1300, hertz:207.6523487900,   midiValue:56,  name:"G#3",  octave:3,  pitch:"G#"}},
	{variableName:"Ab3",          data:{accidental:"b",  cents:-1300, hertz:207.6523487900,   midiValue:56,  name:"Ab3",  octave:3,  pitch:"G#"}},
	{variableName:"A3",           data:{accidental:null, cents:-1200, hertz:220,              midiValue:57,  name:"A3",   octave:3,  pitch:"A" }},
	{variableName:"A$3",          data:{accidental:"#",  cents:-1100, hertz:233.0818807590,   midiValue:58,  name:"A#3",  octave:3,  pitch:"A#"}},
	{variableName:"Bb3",          data:{accidental:"b",  cents:-1100, hertz:233.0818807590,   midiValue:58,  name:"Bb3",  octave:3,  pitch:"A#"}},
	{variableName:"B3",           data:{accidental:null, cents:-1000, hertz:246.9416506281,   midiValue:59,  name:"B3",   octave:3,  pitch:"B" }},
	{variableName:"C4",           data:{accidental:null, cents:-900,  hertz:261.6255653006,   midiValue:60,  name:"C4",   octave:4,  pitch:"C" }},
	{variableName:"C$4",          data:{accidental:"#",  cents:-800,  hertz:277.1826309769,   midiValue:61,  name:"C#4",  octave:4,  pitch:"C#"}},
	{variableName:"Db4",          data:{accidental:"b",  cents:-800,  hertz:277.1826309769,   midiValue:61,  name:"Db4",  octave:4,  pitch:"C#"}},
	{variableName:"D4",           data:{accidental:null, cents:-700,  hertz:293.6647679174,   midiValue:62,  name:"D4",   octave:4,  pitch:"D" }},
	{variableName:"D$4",          data:{accidental:"#",  cents:-600,  hertz:311.1269837221,   midiValue:63,  name:"D#4",  octave:4,  pitch:"D#"}},
	{variableName:"Eb4",          data:{accidental:"b",  cents:-600,  hertz:311.1269837221,   midiValue:63,  name:"Eb4",  octave:4,  pitch:"D#"}},
	{variableName:"E4",           data:{accidental:null, cents:-500,  hertz:329.6275569129,   midiValue:64,  name:"E4",   octave:4,  pitch:"E" }},
	{variableName:"F4",           data:{accidental:null, cents:-400,  hertz:349.2282314330,   midiValue:65,  name:"F4",   octave:4,  pitch:"F" }},
	{variableName:"F$4",          data:{accidental:"#",  cents:-300,  hertz:369.9944227116,   midiValue:66,  name:"F#4",  octave:4,  pitch:"F#"}},
	{variableName:"Gb4",          data:{accidental:"b",  cents:-300,  hertz:369.9944227116,   midiValue:66,  name:"Gb4",  octave:4,  pitch:"F#"}},
	{variableName:"G4",           data:{accidental:null, cents:-200,  hertz:391.9954359817,   midiValue:67,  name:"G4",   octave:4,  pitch:"G" }},
	{variableName:"G$4",          data:{accidental:"#",  cents:-100,  hertz:415.3046975799,   midiValue:68,  name:"G#4",  octave:4,  pitch:"G#"}},
	{variableName:"Ab4",          data:{accidental:"b",  cents:-100,  hertz:415.3046975799,   midiValue:68,  name:"Ab4",  octave:4,  pitch:"G#"}},
	{variableName:"A4",           data:{accidental:null, cents:0,     hertz:440,              midiValue:69,  name:"A4",   octave:4,  pitch:"A" }},
	{variableName:"A$4",          data:{accidental:"#",  cents:100,   hertz:466.1637615181,   midiValue:70,  name:"A#4",  octave:4,  pitch:"A#"}},
	{variableName:"Bb4",          data:{accidental:"b",  cents:100,   hertz:466.1637615181,   midiValue:70,  name:"Bb4",  octave:4,  pitch:"A#"}},
	{variableName:"B4",           data:{accidental:null, cents:200,   hertz:493.8833012561,   midiValue:71,  name:"B4",   octave:4,  pitch:"B" }},
	{variableName:"C5",           data:{accidental:null, cents:300,   hertz:523.2511306012,   midiValue:72,  name:"C5",   octave:5,  pitch:"C" }},
	{variableName:"C$5",          data:{accidental:"#",  cents:400,   hertz:554.3652619537,   midiValue:73,  name:"C#5",  octave:5,  pitch:"C#"}},
	{variableName:"Db5",          data:{accidental:"b",  cents:400,   hertz:554.3652619537,   midiValue:73,  name:"Db5",  octave:5,  pitch:"C#"}},
	{variableName:"D5",           data:{accidental:null, cents:500,   hertz:587.3295358348,   midiValue:74,  name:"D5",   octave:5,  pitch:"D" }},
	{variableName:"D$5",          data:{accidental:"#",  cents:600,   hertz:622.2539674442,   midiValue:75,  name:"D#5",  octave:5,  pitch:"D#"}},
	{variableName:"Eb5",          data:{accidental:"b",  cents:600,   hertz:622.2539674442,   midiValue:75,  name:"Eb5",  octave:5,  pitch:"D#"}},
	{variableName:"E5",           data:{accidental:null, cents:700,   hertz:659.2551138257,   midiValue:76,  name:"E5",   octave:5,  pitch:"E" }},
	{variableName:"F5",           data:{accidental:null, cents:800,   hertz:698.4564628660,   midiValue:77,  name:"F5",   octave:5,  pitch:"F" }},
	{variableName:"F$5",          data:{accidental:"#",  cents:900,   hertz:739.9888454233,   midiValue:78,  name:"F#5",  octave:5,  pitch:"F#"}},
	{variableName:"Gb5",          data:{accidental:"b",  cents:900,   hertz:739.9888454233,   midiValue:78,  name:"Gb5",  octave:5,  pitch:"F#"}},
	{variableName:"G5",           data:{accidental:null, cents:1000,  hertz:783.9908719635,   midiValue:79,  name:"G5",   octave:5,  pitch:"G" }},
	{variableName:"G$5",          data:{accidental:"#",  cents:1100,  hertz:830.6093951599,   midiValue:80,  name:"G#5",  octave:5,  pitch:"G#"}},
	{variableName:"Ab5",          data:{accidental:"b",  cents:1100,  hertz:830.6093951599,   midiValue:80,  name:"Ab5",  octave:5,  pitch:"G#"}},
	{variableName:"A5",           data:{accidental:null, cents:1200,  hertz:880,              midiValue:81,  name:"A5",   octave:5,  pitch:"A" }},
	{variableName:"A$5",          data:{accidental:"#",  cents:1300,  hertz:932.3275230362,   midiValue:82,  name:"A#5",  octave:5,  pitch:"A#"}},
	{variableName:"Bb5",          data:{accidental:"b",  cents:1300,  hertz:932.3275230362,   midiValue:82,  name:"Bb5",  octave:5,  pitch:"A#"}},
	{variableName:"B5",           data:{accidental:null, cents:1400,  hertz:987.7666025122,   midiValue:83,  name:"B5",   octave:5,  pitch:"B" }},
	{variableName:"C6",           data:{accidental:null, cents:1500,  hertz:1046.5022612024,  midiValue:84,  name:"C6",   octave:6,  pitch:"C" }},
	{variableName:"C$6",          data:{accidental:"#",  cents:1600,  hertz:1108.7305239075,  midiValue:85,  name:"C#6",  octave:6,  pitch:"C#"}},
	{variableName:"Db6",          data:{accidental:"b",  cents:1600,  hertz:1108.7305239075,  midiValue:85,  name:"Db6",  octave:6,  pitch:"C#"}},
	{variableName:"D6",           data:{accidental:null, cents:1700,  hertz:1174.6590716696,  midiValue:86,  name:"D6",   octave:6,  pitch:"D" }},
	{variableName:"D$6",          data:{accidental:"#",  cents:1800,  hertz:1244.5079348883,  midiValue:87,  name:"D#6",  octave:6,  pitch:"D#"}},
	{variableName:"Eb6",          data:{accidental:"b",  cents:1800,  hertz:1244.5079348883,  midiValue:87,  name:"Eb6",  octave:6,  pitch:"D#"}},
	{variableName:"E6",           data:{accidental:null, cents:1900,  hertz:1318.5102276515,  midiValue:88,  name:"E6",   octave:6,  pitch:"E" }},
	{variableName:"F6",           data:{accidental:null, cents:2000,  hertz:1396.9129257320,  midiValue:89,  name:"F6",   octave:6,  pitch:"F" }},
	{variableName:"F$6",          data:{accidental:"#",  cents:2100,  hertz:1479.9776908465,  midiValue:90,  name:"F#6",  octave:6,  pitch:"F#"}},
	{variableName:"Gb6",          data:{accidental:"b",  cents:2100,  hertz:1479.9776908465,  midiValue:90,  name:"Gb6",  octave:6,  pitch:"F#"}},
	{variableName:"G6",           data:{accidental:null, cents:2200,  hertz:1567.9817439270,  midiValue:91,  name:"G6",   octave:6,  pitch:"G" }},
	{variableName:"G$6",          data:{accidental:"#",  cents:2300,  hertz:1661.2187903198,  midiValue:92,  name:"G#6",  octave:6,  pitch:"G#"}},
	{variableName:"Ab6",          data:{accidental:"b",  cents:2300,  hertz:1661.2187903198,  midiValue:92,  name:"Ab6",  octave:6,  pitch:"G#"}},
	{variableName:"A6",           data:{accidental:null, cents:2400,  hertz:1760,             midiValue:93,  name:"A6",   octave:6,  pitch:"A" }},
	{variableName:"A$6",          data:{accidental:"#",  cents:2500,  hertz:1864.6550460724,  midiValue:94,  name:"A#6",  octave:6,  pitch:"A#"}},
	{variableName:"Bb6",          data:{accidental:"b",  cents:2500,  hertz:1864.6550460724,  midiValue:94,  name:"Bb6",  octave:6,  pitch:"A#"}},
	{variableName:"B6",           data:{accidental:null, cents:2600,  hertz:1975.5332050245,  midiValue:95,  name:"B6",   octave:6,  pitch:"B" }},
	{variableName:"C7",           data:{accidental:null, cents:2700,  hertz:2093.0045224048,  midiValue:96,  name:"C7",   octave:7,  pitch:"C" }},
	{variableName:"C$7",          data:{accidental:"#",  cents:2800,  hertz:2217.4610478150,  midiValue:97,  name:"C#7",  octave:7,  pitch:"C#"}},
	{variableName:"Db7",          data:{accidental:"b",  cents:2800,  hertz:2217.4610478150,  midiValue:97,  name:"Db7",  octave:7,  pitch:"C#"}},
	{variableName:"D7",           data:{accidental:null, cents:2900,  hertz:2349.3181433393,  midiValue:98,  name:"D7",   octave:7,  pitch:"D" }},
	{variableName:"D$7",          data:{accidental:"#",  cents:3000,  hertz:2489.0158697766,  midiValue:99,  name:"D#7",  octave:7,  pitch:"D#"}},
	{variableName:"Eb7",          data:{accidental:"b",  cents:3000,  hertz:2489.0158697766,  midiValue:99,  name:"Eb7",  octave:7,  pitch:"D#"}},
	{variableName:"E7",           data:{accidental:null, cents:3100,  hertz:2637.0204553030,  midiValue:100, name:"E7",   octave:7,  pitch:"E" }},
	{variableName:"F7",           data:{accidental:null, cents:3200,  hertz:2793.8258514640,  midiValue:101, name:"F7",   octave:7,  pitch:"F" }},
	{variableName:"F$7",          data:{accidental:"#",  cents:3300,  hertz:2959.9553816931,  midiValue:102, name:"F#7",  octave:7,  pitch:"F#"}},
	{variableName:"Gb7",          data:{accidental:"b",  cents:3300,  hertz:2959.9553816931,  midiValue:102, name:"Gb7",  octave:7,  pitch:"F#"}},
	{variableName:"G7",           data:{accidental:null, cents:3400,  hertz:3135.9634878540,  midiValue:103, name:"G7",   octave:7,  pitch:"G" }},
	{variableName:"G$7",          data:{accidental:"#",  cents:3500,  hertz:3322.4375806396,  midiValue:104, name:"G#7",  octave:7,  pitch:"G#"}},
	{variableName:"Ab7",          data:{accidental:"b",  cents:3500,  hertz:3322.4375806396,  midiValue:104, name:"Ab7",  octave:7,  pitch:"G#"}},
	{variableName:"A7",           data:{accidental:null, cents:3600,  hertz:3520,             midiValue:105, name:"A7",   octave:7,  pitch:"A" }},
	{variableName:"A$7",          data:{accidental:"#",  cents:3700,  hertz:3729.3100921447,  midiValue:106, name:"A#7",  octave:7,  pitch:"A#"}},
	{variableName:"Bb7",          data:{accidental:"b",  cents:3700,  hertz:3729.3100921447,  midiValue:106, name:"Bb7",  octave:7,  pitch:"A#"}},
	{variableName:"B7",           data:{accidental:null, cents:3800,  hertz:3951.0664100490,  midiValue:107, name:"B7",   octave:7,  pitch:"B" }},
	{variableName:"C8",           data:{accidental:null, cents:3900,  hertz:4186.0090448096,  midiValue:108, name:"C8",   octave:8,  pitch:"C" }},
	{variableName:"C$8",          data:{accidental:"#",  cents:4000,  hertz:4434.9220956300,  midiValue:109, name:"C#8",  octave:8,  pitch:"C#"}},
	{variableName:"Db8",          data:{accidental:"b",  cents:4000,  hertz:4434.9220956300,  midiValue:109, name:"Db8",  octave:8,  pitch:"C#"}},
	{variableName:"D8",           data:{accidental:null, cents:4100,  hertz:4698.6362866785,  midiValue:110, name:"D8",   octave:8,  pitch:"D" }},
	{variableName:"D$8",          data:{accidental:"#",  cents:4200,  hertz:4978.0317395533,  midiValue:111, name:"D#8",  octave:8,  pitch:"D#"}},
	{variableName:"Eb8",          data:{accidental:"b",  cents:4200,  hertz:4978.0317395533,  midiValue:111, name:"Eb8",  octave:8,  pitch:"D#"}},
	{variableName:"E8",           data:{accidental:null, cents:4300,  hertz:5274.0409106059,  midiValue:112, name:"E8",   octave:8,  pitch:"E" }},
	{variableName:"F8",           data:{accidental:null, cents:4400,  hertz:5587.6517029281,  midiValue:113, name:"F8",   octave:8,  pitch:"F" }},
	{variableName:"F$8",          data:{accidental:"#",  cents:4500,  hertz:5919.9107633862,  midiValue:114, name:"F#8",  octave:8,  pitch:"F#"}},
	{variableName:"Gb8",          data:{accidental:"b",  cents:4500,  hertz:5919.9107633862,  midiValue:114, name:"Gb8",  octave:8,  pitch:"F#"}},
	{variableName:"G8",           data:{accidental:null, cents:4600,  hertz:6271.92697571,    midiValue:115, name:"G8",   octave:8,  pitch:"G" }},
	{variableName:"G$8",          data:{accidental:"#",  cents:4700,  hertz:6644.8751612791,  midiValue:116, name:"G#8",  octave:8,  pitch:"G#"}},
	{variableName:"Ab8",          data:{accidental:"b",  cents:4700,  hertz:6644.8751612791,  midiValue:116, name:"Ab8",  octave:8,  pitch:"G#"}},
	{variableName:"A8",           data:{accidental:null, cents:4800,  hertz:7040,             midiValue:117, name:"A8",   octave:8,  pitch:"A" }},
	{variableName:"A$8",          data:{accidental:"#",  cents:4900,  hertz:7458.6201842894,  midiValue:118, name:"A#8",  octave:8,  pitch:"A#"}},
	{variableName:"Bb8",          data:{accidental:"b",  cents:4900,  hertz:7458.6201842894,  midiValue:118, name:"Bb8",  octave:8,  pitch:"A#"}},
	{variableName:"B8",           data:{accidental:null, cents:5000,  hertz:7902.1328200980,  midiValue:119, name:"B8",   octave:8,  pitch:"B" }},
	{variableName:"C9",           data:{accidental:null, cents:5100,  hertz:8372.0180896192,  midiValue:120, name:"C9",   octave:9,  pitch:"C" }},
	{variableName:"C$9",          data:{accidental:"#",  cents:5200,  hertz:8869.8441912599,  midiValue:121, name:"C#9",  octave:9,  pitch:"C#"}},
	{variableName:"Db9",          data:{accidental:"b",  cents:5200,  hertz:8869.8441912599,  midiValue:121, name:"Db9",  octave:9,  pitch:"C#"}},
	{variableName:"D9",           data:{accidental:null, cents:5300,  hertz:9397.2725733570,  midiValue:122, name:"D9",   octave:9,  pitch:"D" }},
	{variableName:"D$9",          data:{accidental:"#",  cents:5400,  hertz:9956.0634791066,  midiValue:123, name:"D#9",  octave:9,  pitch:"D#"}},
	{variableName:"Eb9",          data:{accidental:"b",  cents:5400,  hertz:9956.0634791066,  midiValue:123, name:"Eb9",  octave:9,  pitch:"D#"}},
	{variableName:"E9",           data:{accidental:null, cents:5500,  hertz:10548.0818212118, midiValue:124, name:"E9",   octave:9,  pitch:"E" }},
	{variableName:"F9",           data:{accidental:null, cents:5600,  hertz:11175.3034058561, midiValue:125, name:"F9",   octave:9,  pitch:"F" }},
	{variableName:"F$9",          data:{accidental:"#",  cents:5700,  hertz:11839.8215267723, midiValue:126, name:"F#9",  octave:9,  pitch:"F#"}},
	{variableName:"Gb9",          data:{accidental:"b",  cents:5700,  hertz:11839.8215267723, midiValue:126, name:"Gb9",  octave:9,  pitch:"F#"}},
	{variableName:"G9",           data:{accidental:null, cents:5800,  hertz:12543.8539514160, midiValue:127, name:"G9",   octave:9,  pitch:"G" }},
]


//###############//
//###  Utils  ###//
//###############//

function _initialize_Individual_Notes(){
	for(const {variableName, data} of _NoteData)
		{(_Note as any)[variableName] = _Note.construct_From_Data(data as any)}
}

function _initialize_All_Notes(){
	const All_Notes       = []
	const All_Notes_Sharp = []
	const All_Notes_Flat  = []

	for(const {variableName} of _NoteData){
		const note = Object.freeze((Note as any)[variableName] as Note)

		All_Notes.push(note)

		if(["#", null].includes(note.accidental))
			{All_Notes_Sharp.push(note)}

		if(["b", null].includes(note.accidental))
			{All_Notes_Flat.push(note)}
	}

	;(_Note as any).All_Notes       = All_Notes
	;(_Note as any).All_Notes_Sharp = All_Notes_Sharp
	;(_Note as any).All_Notes_Flat  = All_Notes_Flat
}
