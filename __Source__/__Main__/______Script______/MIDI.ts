//###  Sketch  ###//
import {Synth} from "./Synth"

//###  App  ###//
import Settings   from "Settings"
import * as _MIDI from "@/MIDI/__Main__"


//###############//
//###  Setup  ###//
//###############//

const PianoColors = Settings.Color.PianoKeys


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace MIDI{

	export async function initialize(){
		const {midiConnected, error} = await _MIDI.connect({sysex:true})
		if(!midiConnected){
			alert(_Invalid_MidiPermissions)
			return {midiConnected, error}
		}

		_bind_ControlerListeners()

		return {midiConnected}
	}

}


//###################//
//###  Utilities  ###//
//###################//

const _Invalid_MidiPermissions = (""
	+ "MIDI permissions must be enabled to control the synthesizer with your MIDI controller."
	+ "\n"
	+ "\nIf you want to use your MIDI controller:"
	+ "\n  - clear your blocked MIDI permission"
	+ "\n  - refresh the page"
	+ "\n  - allow the MIDI permission when prompted"
)

function _bind_ControlerListeners(){
	_MIDI.Event.NoteOn.bind({
		callback: ({note}) => Synth.play_Notes(Synth.Instance.melody, [note], PianoColors.Monochrome_Pressed),
	})
	_MIDI.Event.NoteOff.bind({
		callback: ({note}) => Synth.stop_Notes(Synth.Instance.melody, [note]),
	})
}
