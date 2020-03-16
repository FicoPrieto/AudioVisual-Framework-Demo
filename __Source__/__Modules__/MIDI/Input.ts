
//##############################//
//###  Exports.Class.Public  ###//
//##############################//

export class Input{

	channel: Input.Channel

	constructor(channel:Input.Channel, ...args:any[])
		{this.channel = channel}

	protected static get _statusToChannel_Map(): _Input.ChannelMap
		{throw new Error(`_statusToChannel_Map not implemented in Input.${this.name}`)}

	static bind<T extends typeof Input>(
		this:T,
		{callback,                                     filter                                                               }:
		{callback:((message:InstanceType<T>) => void), filter?:{devices?:string[], ids?:string[], channels?:Input.Channel[]}}
	){
		filter = (filter || {})

		const inputFilter = {
			devices: filter.devices,
			ids:     filter.ids,
		}

		const webMIDI_Callback = (event:WebMidi.MIDIMessageEvent) => {
			const status         = event.data[0]
			const channel        = this._statusToChannel_Map[status]
			const channelMatches = ((!filter.channels) || filter.channels.includes(channel))

			if(
				channelMatches
				&& _channel_IsValid(channel)
			){
				callback(
					new this(
						channel,
						event.data[1],
						event.data[2],
					) as any
				)
			}
		}

		const callbackID = _Input.callbackID
		const inputs = [..._Input.midiAccess.inputs.values()]
		const input  = inputs.filter(input => _input_Meets_FilterCriteria(input, inputFilter))[0]

		if(input){
			const deviceID = _get_DeviceID(input)
			_Input.callbacks[callbackID] = {deviceID, callback:webMIDI_Callback, filter:inputFilter}
			_Input.callbackID += 1
			return callbackID
		}
		else
			{return null}
	}

	static unbind(callbackID:number)
		{delete _Input.callbacks[callbackID]}

}


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace Input{

	export type Channel = (null|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16)

}


//###################################//
//###  Exports.Namespace.Private  ###//
//###################################//

export namespace _Input{

	export let callbackID = 0
	export const callbacks:{[id:number]:_Callback} = {}

	export type ChannelMap = {[key:number/*MidiValue*/]:Input.Channel}

	export let midiAccess: WebMidi.MIDIAccess

	export function get_Callback(midiConnection:(WebMidi.MIDIInput/*|WebMidi.MIDIOutput*/)){
		const _deviceID = _get_DeviceID(midiConnection)

		return (event:WebMidi.MIDIMessageEvent) => {
			for(const callbackData of [callbacks]){
				for(const {deviceID, callback, filter} of Object.values(callbackData)){
					const idMatches     = (_deviceID == deviceID)
					const filterMatches = _input_Meets_FilterCriteria(midiConnection, filter)
					if(idMatches && filterMatches)
						{callback(event as any)}
				}
			}
		}
	}

	export function ensure_Callbacks(){
		for(const [key, input] of _Input.midiAccess.inputs){
			if(! input.onmidimessage)
				{input.onmidimessage = get_Callback(input)}
		}
	}

}


//###################//
//###  Utilities  ###//
//###################//

type _CallbackFilter = {
	devices?: string[],
	ids?:     string[],
}

type _Callback = {
	deviceID: string,
	callback: ((event:WebMidi.MIDIMessageEvent) => void),
	filter:   _CallbackFilter,
}

function _input_Meets_FilterCriteria(input:WebMidi.MIDIInput, filter:_CallbackFilter){
	filter = (filter || {})

	return (true
		&& ((!filter.devices) || filter.devices.includes(input.name))
		&& ((!filter.ids    ) || filter.ids    .includes(input.id  ))
	)
}

function _get_DeviceID(input:WebMidi.MIDIInput)
	{return `${input.name}-${input.id}`}

function _channel_IsValid(obj:any){
	return (false
		|| (obj === null)
		|| ((typeof obj == "number") && (obj >=1) && (obj <= 16))
	)
}
