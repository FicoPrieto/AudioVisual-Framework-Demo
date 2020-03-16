/// <reference types="webmidi" />
import { Connection } from "../Connection";
export declare namespace DeviceConnected {
    function bind({ callback, filter }: {
        callback: ((event: WebMidi.MIDIConnectionEvent) => void);
        filter?: {
            devices?: string[];
            type?: Connection.Type;
        };
    }): number;
    function unbind(callbackID: number): void;
}
export declare namespace DeviceDisconnected {
    function bind({ callback, filter }: {
        callback: ((event: WebMidi.MIDIConnectionEvent) => void);
        filter?: {
            devices?: string[];
            type?: Connection.Type;
        };
    }): number;
    function unbind(callbackID: number): void;
}
export declare namespace _DeviceConnected {
    let callbackID: number;
    let callbacks: {
        [id: number]: _ConnectionCallback;
    };
    type CallbackFilter = {
        devices?: string[];
        type?: Connection.Type;
    };
}
export declare namespace _DeviceDisconnected {
    let callbackID: number;
    let callbacks: {
        [id: number]: _ConnectionCallback;
    };
}
declare type _ConnectionCallback = {
    callback: ((event: WebMidi.MIDIConnectionEvent) => void);
    state: WebMidi.MIDIPortDeviceState;
    filter: _DeviceConnected.CallbackFilter;
};
export {};
