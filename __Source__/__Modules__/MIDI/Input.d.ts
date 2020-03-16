/// <reference types="webmidi" />
export declare class Input {
    channel: Input.Channel;
    constructor(channel: Input.Channel, ...args: any[]);
    protected static get _statusToChannel_Map(): _Input.ChannelMap;
    static bind<T extends typeof Input>(this: T, { callback, filter }: {
        callback: ((message: InstanceType<T>) => void);
        filter?: {
            devices?: string[];
            ids?: string[];
            channels?: Input.Channel[];
        };
    }): number;
    static unbind(callbackID: number): void;
}
export declare namespace Input {
    type Channel = (null | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16);
}
export declare namespace _Input {
    let callbackID: number;
    const callbacks: {
        [id: number]: _Callback;
    };
    type ChannelMap = {
        [key: number]: Input.Channel;
    };
    let midiAccess: WebMidi.MIDIAccess;
    function get_Callback(midiConnection: (WebMidi.MIDIInput)): (event: WebMidi.MIDIMessageEvent) => void;
    function ensure_Callbacks(): void;
}
declare type _CallbackFilter = {
    devices?: string[];
    ids?: string[];
};
declare type _Callback = {
    deviceID: string;
    callback: ((event: WebMidi.MIDIMessageEvent) => void);
    filter: _CallbackFilter;
};
export {};
