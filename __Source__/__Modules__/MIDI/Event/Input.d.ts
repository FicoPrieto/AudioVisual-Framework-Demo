import { Input as $Input, _Input } from "../Input";
import { Note } from "@/Music/__Main__";
import { MidiValue } from "@/Music/Note/Types";
export declare namespace Input {
    class ChannelAftertouch extends $Input {
        protected static get _statusToChannel_Map(): _Input.ChannelMap;
        readonly pressure: MidiValue;
        constructor(channel: $Input.Channel, pressure: MidiValue);
    }
    class ControlChange extends $Input {
        protected static get _statusToChannel_Map(): _Input.ChannelMap;
        readonly id: MidiValue;
        readonly value: MidiValue;
        constructor(channel: $Input.Channel, id: MidiValue, value: MidiValue);
    }
    class NoteOff extends $Input {
        protected static get _statusToChannel_Map(): _Input.ChannelMap;
        readonly note: Note;
        constructor(channel: $Input.Channel, noteValue: MidiValue, velocity: MidiValue);
    }
    class NoteOn extends $Input {
        protected static get _statusToChannel_Map(): _Input.ChannelMap;
        readonly note: Note;
        constructor(channel: $Input.Channel, noteValue: MidiValue, velocity: MidiValue);
    }
    class PitchBend extends $Input {
        protected static get _statusToChannel_Map(): _Input.ChannelMap;
        readonly leastSignificantByte: MidiValue;
        readonly mostSignificantByte: MidiValue;
        constructor(channel: $Input.Channel, leastSignificantByte: MidiValue, mostSignificantByte: MidiValue);
    }
    class PolyphonicAftertouch extends $Input {
        protected static get _statusToChannel_Map(): _Input.ChannelMap;
        readonly note: MidiValue;
        readonly pressure: MidiValue;
        constructor(channel: $Input.Channel, note: MidiValue, pressure: MidiValue);
    }
    class ProgramChange extends $Input {
        protected static get _statusToChannel_Map(): _Input.ChannelMap;
        readonly program: MidiValue;
        constructor(channel: $Input.Channel, program: MidiValue);
    }
}
