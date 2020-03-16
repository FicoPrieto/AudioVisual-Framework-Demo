//###  Module  ###//
import {Input, _Input} from "./Input"
import {
	DeviceConnected,
	_DeviceConnected,
	_DeviceDisconnected,
} from "./Event/Connection"


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace Connection{
	export enum Type{
		Input  = "input",
		Output = "output",
	}
}


//###################################//
//###  Exports.Namespace.Private  ###//
//###################################//

export namespace _Connection{
	export let midiAccess: WebMidi.MIDIAccess
}

export function connect(options:WebMidi.MIDIOptions): Promise<{midiConnected:boolean, error:Error}>{
	return new Promise( (resolve, reject) => {
		navigator.requestMIDIAccess(options).then(
			(midiAccess:WebMidi.MIDIAccess) => {
				_Connection.midiAccess = midiAccess
				_Input     .midiAccess = midiAccess

				_initialize_MIDIAccess()

				_Input.ensure_Callbacks()
				DeviceConnected.bind({
					callback: () => _Input.ensure_Callbacks()
				})

				resolve({midiConnected:true, error:null})
			},
			(error:Error) => {
				resolve({midiConnected:false, error})
			}
		)
	})
}


//###################//
//###  Utilities  ###//
//###################//

function _initialize_MIDIAccess(){
	_Connection.midiAccess.onstatechange = (event:WebMidi.MIDIConnectionEvent) => {
		for(const callbackData of [_DeviceConnected.callbacks, _DeviceDisconnected.callbacks]){
			for(const {callback, filter, state} of Object.values(callbackData)){
				const stateMatches  = (event.port.state == state)
				const filterMatches = _event_MeetsFilterCriteria(event, filter)
				if(stateMatches && filterMatches)
					{callback(event)}
			}
		}
	}
}

function _event_MeetsFilterCriteria(event:WebMidi.MIDIConnectionEvent, filter:_DeviceConnected.CallbackFilter){
	filter = (filter || {})

	return (true
		&& ((!filter.devices) || filter.devices.includes(event.port.name)  )
		&& ((!filter.type   ) || (event.port.type == filter.type.valueOf()))
	)
}
