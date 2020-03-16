import { RelativeTime } from "@/Time/__Main__";
export declare class BPM_Manager {
    private static _bpm_Source;
    static link(bpm_Source: {
        bpm: number;
    }): void;
    static get beatLength(): RelativeTime;
}
export declare namespace _BPM_Manager {
    const duration_RegEx_String: string;
    function get_Duration_InMilliseconds(value: (number | string | RelativeTime | RelativeTime.Components)): RelativeTime;
}
