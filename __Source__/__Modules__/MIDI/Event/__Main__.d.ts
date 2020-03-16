import * as Connection from "../Event/Connection";
import { Input } from "../Event/Input";
export declare namespace Event {
    const DeviceConnected: typeof Connection.DeviceConnected;
    const DeviceDisconnected: typeof Connection.DeviceDisconnected;
    const ChannelAftertouch: typeof Input.ChannelAftertouch;
    const ControlChange: typeof Input.ControlChange;
    const NoteOff: typeof Input.NoteOff;
    const NoteOn: typeof Input.NoteOn;
    const PitchBend: typeof Input.PitchBend;
    const PolyphonicAftertouch: typeof Input.PolyphonicAftertouch;
    const ProgramChange: typeof Input.ProgramChange;
}
