//###  Module  ###//
import * as Connection from "../Event/Connection"
import {Input}         from "../Event/Input"


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace Event{

	//###  Connection  ###//
	export const DeviceConnected    = Connection.DeviceConnected
	export const DeviceDisconnected = Connection.DeviceDisconnected

	//###  Input  ###//
	export const ChannelAftertouch    = Input.ChannelAftertouch
	export const ControlChange        = Input.ControlChange
	export const NoteOff              = Input.NoteOff
	export const NoteOn               = Input.NoteOn
	export const PitchBend            = Input.PitchBend
	export const PolyphonicAftertouch = Input.PolyphonicAftertouch
	export const ProgramChange        = Input.ProgramChange

}
