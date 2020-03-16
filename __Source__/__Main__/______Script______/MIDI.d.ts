export declare namespace MIDI {
    function initialize(): Promise<{
        midiConnected: boolean;
        error: Error;
    } | {
        midiConnected: true;
        error?: undefined;
    }>;
}
