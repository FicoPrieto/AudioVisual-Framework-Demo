//###  Sketch  ###//
import "~/__Main__/______Style______/__Main__.styl"
import {MIDI     } from "./MIDI"
import {P5       } from "./P5"
import {Synth    } from "./Synth"
import {Utilities} from "./Utilities"

//###  App  ###//
import Settings      from "Settings"
import {Note, Chord} from "@/Music/__Main__"
import {MidiValue  } from "@/Music/Note/Types"
import {ToneManager} from "@/Tone/__Main__"

//###  NPM  ###//
import ripple     from "ripple-js"
import MicroModal from "micromodal"
import * as Tone  from "tone"


//###############//
//###  Setup  ###//
//###############//

const {expose}    = Utilities
const PianoColors = Settings.Color.PianoKeys

const _buttonContainer = document.getElementById("ButtonContainer")


//##############//
//###  Main  ###//
//##############//

class __Main__{

	static async _initialize(){
		Utilities.disable_ElementDragging()

		_initialize_PageComponents()
		Synth.initialize({bpm:45})
		P5.initialize()
		initialize_AudioSequence()
		await MIDI.initialize()
	}

	@expose
	static async toggle_AudioSequence(){
		const is_Starting = _buttonContainer.classList.contains("start")
		_update_ButtonContainer(is_Starting)
		_toggle_SynthPlayback(is_Starting)
	}

}


//######################//
//###  Sketch.Audio  ###//
//######################//

async function initialize_AudioSequence(){
	for(let i = 0; (i < 100); i++){

		let notes:        Note[][] = Array(4).fill([])
		let changeUp:     {[key:number]:boolean} = {}
		let octaveOffset: number
		let velocity:     MidiValue
		let duration:     Tone.Unit.Time

		//################//
		//###  Chords  ###//
		//################//

		duration = {"4t":1}
		velocity = 50
		notes[0] = Chord.D.MinorThirteenth(3, {velocity}).alter({0:{subtract:12}                             })
		notes[1] = Chord.C.MajorSeventh   (3, {velocity}).alter({0:{add:4}, 1:{add:8}, 2:{add:12}, 3:{add:12}})
		if((i % 4) != 3){
			notes[2] = Chord.B.MinorSeventh             (3, {velocity}).notes
			notes[3] = Chord.Bb.MajorSeven_SharpEleventh(3, {velocity}).notes
		}
		else{
			notes[2] = [Note.B3, Note.Eb4, Note.F$4, Note.C5].map(note => note.clone({velocity}))
			notes[3] = [Note.A3, Note.D$4, Note.F$4, Note.B4].map(note => note.clone({velocity}))
		}
		play(i, Synth.Instance.chord, notes, duration, PianoColors.Purple)

		//###############//
		//###  Notes  ###//
		//###############//

		duration = {"16n":1, "32t":-1}
		velocity = 40
		notes[0] = [Note.A6.clone({velocity:35})]
		notes[1] = [Note.B6.clone({velocity   })]
		notes[2] = [Note.C6.clone({velocity   })]
		notes[3] = [Note.E6.clone({velocity   })]
		play(i, Synth.Instance.melody, notes, duration, PianoColors.Pink)

		if((i % 4) == 3){
			duration = {"16t":1}
			velocity = 55
			notes[0] = [Note.G5.clone({velocity})]
			notes[1] = [Note.E6.clone({velocity})]
			notes[2] = [Note.C6.clone({velocity})]
			notes[3] = [Note.B5.clone({velocity})]
			play(i, Synth.Instance.melody, notes, duration, PianoColors.Blue)
		}

		if((i % 3) == 0){
			duration     = {"16t":1, "32t":-1}
			changeUp[1]  = ((i % 4 ) == 0)
			octaveOffset = (changeUp[1]) ? 12  : 0
			velocity     = (changeUp[1]) ? 120 : 60
			notes[0]     = [Note.G5.subtract(octaveOffset).clone({velocity})]
			notes[1]     = [Note.E5.subtract(octaveOffset).clone({velocity})]
			notes[2]     = [Note.C5.subtract(octaveOffset).clone({velocity})]
			notes[3]     = [Note.B4.subtract(octaveOffset).clone({velocity})]
			play(i, Synth.Instance.melody, notes, duration, PianoColors.Green)
		}

	}
}


//##########################//
//###  Utilities.Sketch  ###//
//##########################//

function play(i:number, synth:Tone.PolySynth, noteGroups:Note[][], time:{[duration:string]:number}, colors:Synth.KeyColor){
	noteGroups = noteGroups.map(group =>
		group.map(note =>
			note.clone()
		)
	)

	ToneManager.schedule({time, multiplier:(1+(8*i)), callback:(notes:Note[], colors:Synth.KeyColor)=>{Synth.play_Notes(synth, notes, colors)}, args:[noteGroups[0], colors]})
	ToneManager.schedule({time, multiplier:(2+(8*i)), callback:(notes:Note[]                       )=>{Synth.stop_Notes(synth, notes        )}, args:[noteGroups[0]        ]})
	ToneManager.schedule({time, multiplier:(3+(8*i)), callback:(notes:Note[], colors:Synth.KeyColor)=>{Synth.play_Notes(synth, notes, colors)}, args:[noteGroups[1], colors]})
	ToneManager.schedule({time, multiplier:(4+(8*i)), callback:(notes:Note[]                       )=>{Synth.stop_Notes(synth, notes        )}, args:[noteGroups[1]        ]})
	ToneManager.schedule({time, multiplier:(5+(8*i)), callback:(notes:Note[], colors:Synth.KeyColor)=>{Synth.play_Notes(synth, notes, colors)}, args:[noteGroups[2], colors]})
	ToneManager.schedule({time, multiplier:(6+(8*i)), callback:(notes:Note[]                       )=>{Synth.stop_Notes(synth, notes        )}, args:[noteGroups[2]        ]})
	ToneManager.schedule({time, multiplier:(7+(8*i)), callback:(notes:Note[], colors:Synth.KeyColor)=>{Synth.play_Notes(synth, notes, colors)}, args:[noteGroups[3], colors]})
	ToneManager.schedule({time, multiplier:(8+(8*i)), callback:(notes:Note[]                       )=>{Synth.stop_Notes(synth, notes        )}, args:[noteGroups[3]        ]})
}


//###########################//
//###  Utilities.Private  ###//
//###########################//

function _initialize_PageComponents(){
	MicroModal.init()
	MicroModal.show("Modal", {
		closeTrigger:        "close-modal",
		disableScroll:       true,
		disableFocus:        true,
		awaitCloseAnimation: true,
		debugMode:           true,
	})

	;(document.querySelector("#ControlDescription code") as HTMLElement)
		.onclick = () => console.log("I said <button>, not <code> 🤦‍♂️")

	try{ripple.registerRipples()}
	catch{/* throws error, still works ¯\_(ツ)_/¯ */}
}

function _update_ButtonContainer(is_Starting:boolean){
	if(is_Starting){
		_buttonContainer.classList.remove("start")
		_buttonContainer.classList.add   ("stop" )
	}
	else{
		_buttonContainer.classList.remove("stop" )
		_buttonContainer.classList.add   ("start")
	}
}

function _toggle_SynthPlayback(is_Starting:boolean){
	setTimeout(() => {
		if(is_Starting)
			{ToneManager.Transport.start()}
		else{
			ToneManager.Transport.stop()
			ToneManager.Transport.reset()
			Synth.stop_Notes(Synth.Instance.chord )
			Synth.stop_Notes(Synth.Instance.melody)
			initialize_AudioSequence()
		}
	}, 700)
}


//####################//
//###  Initialize  ###//
//####################//

__Main__._initialize()
