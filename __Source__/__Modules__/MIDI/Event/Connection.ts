//###  Module  ###//
import {Connection} from "../Connection"


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace DeviceConnected{
	export function bind(
		{callback,                                               filter                                            }:
		{callback:((event:WebMidi.MIDIConnectionEvent) => void), filter?:{devices?:string[], type?:Connection.Type}}
	){
		filter = (filter || {})

		const callbackID = _DeviceConnected.callbackID
		_DeviceConnected.callbacks[callbackID] = {callback, filter, state:"connected"}
		_DeviceConnected.callbackID += 1

		return callbackID
	}

	export function unbind(callbackID:number)
		{delete _DeviceConnected.callbacks[callbackID]}
}

export namespace DeviceDisconnected{
	export function bind(
		{callback,                                               filter                                            }:
		{callback:((event:WebMidi.MIDIConnectionEvent) => void), filter?:{devices?:string[], type?:Connection.Type}}
	){
		const callbackID = _DeviceDisconnected.callbackID
		_DeviceDisconnected.callbacks[callbackID] = {callback, filter, state:"disconnected"}
		_DeviceDisconnected.callbackID += 1
		return callbackID
	}

	export function unbind(callbackID:number)
		{delete _DeviceDisconnected.callbacks[callbackID]}
}


//###################################//
//###  Exports.Namespace.Private  ###//
//###################################//

export namespace _DeviceConnected{
	export let callbackID = 0
	export let callbacks:{[id:number]:_ConnectionCallback} = {}

	export type CallbackFilter = {
		devices?: string[],
		type?:    Connection.Type,
	}
}

export namespace _DeviceDisconnected{
	export let callbackID = 0
	export let callbacks:{[id:number]:_ConnectionCallback} = {}
}


//###################//
//###  Utilities  ###//
//###################//

type _ConnectionCallback = {
	callback: ((event:WebMidi.MIDIConnectionEvent) => void),
	state:    WebMidi.MIDIPortDeviceState,
	filter:   _DeviceConnected.CallbackFilter,
}

