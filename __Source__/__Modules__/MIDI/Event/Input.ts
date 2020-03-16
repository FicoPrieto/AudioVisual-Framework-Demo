//###  Reference  ###//
// https://www.midi.org/specifications-old/item/table-2-expanded-messages-list-status-bytes

//###  Module  ###//
import {Input as $Input, _Input} from "../Input"

//###  App  ###//
import {Note     } from "@/Music/__Main__"
import {MidiValue} from "@/Music/Note/Types"


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace Input{

	export class ChannelAftertouch extends $Input{
		protected static get _statusToChannel_Map()
			{return {208:1, 209:2, 210:3, 211:4, 212:5, 213:6, 214:7, 215:8, 216:9, 217:10, 218:11, 219:12, 220:13, 221:14, 222:15, 223:16} as _Input.ChannelMap}

		readonly pressure: MidiValue
		constructor(channel:$Input.Channel, pressure:MidiValue){
			super(channel)
			this.pressure = pressure
		}
	}

	export class ControlChange extends $Input{
		protected static get _statusToChannel_Map()
			{return {176:1, 177:2, 178:3, 179:4, 180:5, 181:6, 182:7, 183:8, 184:9, 185:10, 186:11, 187:12, 188:13, 189:14, 190:15, 191:16} as _Input.ChannelMap}

		readonly id:    MidiValue
		readonly value: MidiValue
		constructor(channel:$Input.Channel, id:MidiValue, value:MidiValue){
			super(channel)
			this.id    = id
			this.value = value
		}
	}

	export class NoteOff extends $Input{
		protected static get _statusToChannel_Map()
			{return {128:1, 129:2, 130:3, 131:4, 132:5, 133:6, 134:7, 135:8, 136:9, 137:10, 138:11, 139:12, 140:13, 141:14, 142:15, 143:16} as _Input.ChannelMap}

		readonly note: Note
		constructor(channel:$Input.Channel, noteValue:MidiValue, velocity:MidiValue){
			super(channel)
			this.note = new Note(noteValue, {velocity})
		}
	}

	export class NoteOn extends $Input{
		protected static get _statusToChannel_Map()
			{return {144:1, 145:2, 146:3, 147:4, 148:5, 149:6, 150:7, 151:8, 152:9, 153:10, 154:11, 155:12, 156:13, 157:14, 158:15, 159:16} as _Input.ChannelMap}

		readonly note: Note
		constructor(channel:$Input.Channel, noteValue:MidiValue, velocity:MidiValue){
			super(channel)
			this.note = new Note(noteValue, {velocity})
		}
	}

	export class PitchBend extends $Input{
		protected static get _statusToChannel_Map()
			{return {224:1, 225:2, 226:3, 227:4, 228:5, 229:6, 230:7, 231:8, 232:9, 233:10, 234:11, 235:12, 236:13, 237:14, 238:15, 239:16} as _Input.ChannelMap}

		readonly leastSignificantByte: MidiValue
		readonly mostSignificantByte:  MidiValue
		constructor(channel:$Input.Channel, leastSignificantByte:MidiValue, mostSignificantByte:MidiValue){
			super(channel)
			this.leastSignificantByte = leastSignificantByte
			this.mostSignificantByte  = mostSignificantByte
		}
	}

	export class PolyphonicAftertouch extends $Input{
		protected static get _statusToChannel_Map()
			{return {160:1, 161:2, 162:3, 163:4, 164:5, 165:6, 166:7, 167:8, 168:9, 169:10, 170:11, 171:12, 172:13, 173:14, 174:15, 175:16} as _Input.ChannelMap}

		readonly note:     MidiValue
		readonly pressure: MidiValue
		constructor(channel:$Input.Channel, note:MidiValue, pressure:MidiValue){
			super(channel)
			this.note     = note
			this.pressure = pressure
		}
	}

	export class ProgramChange extends $Input{
		protected static get _statusToChannel_Map()
			{return {192:1, 193:2, 194:3, 195:4, 196:5, 197:6, 198:7, 199:8, 200:9, 201:10, 202:11, 203:12, 204:13, 205:14, 206:15, 207:16} as _Input.ChannelMap}

		readonly program: MidiValue
		constructor(channel:$Input.Channel, program:MidiValue){
			super(channel)
			this.program = program
		}
	}

}
