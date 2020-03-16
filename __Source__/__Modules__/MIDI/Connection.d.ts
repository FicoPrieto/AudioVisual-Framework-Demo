/// <reference types="webmidi" />
export declare namespace Connection {
    enum Type {
        Input = "input",
        Output = "output"
    }
}
export declare namespace _Connection {
    let midiAccess: WebMidi.MIDIAccess;
}
export declare function connect(options: WebMidi.MIDIOptions): Promise<{
    midiConnected: boolean;
    error: Error;
}>;
