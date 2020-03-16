import { RelativeTime } from "@/Time/__Main__";
export declare class ToneManager {
    static get beatLength(): RelativeTime;
    static get bpm(): number;
    static set bpm(value: number);
    private static _scheduledCallbackID;
    private static _scheduledCallbackData;
    static initialize(): void;
    static Transport: {
        new (): {};
        start(): void;
        stop(): void;
        reset(): void;
    };
    static schedule({ args, callback, time, multiplier }: {
        args?: (any[] | any);
        callback: ((...args: any) => void);
        time: (RelativeTime | number | string | {
            [duration: string]: number;
        });
        multiplier?: number;
    }): void;
    private static _cancel_ScheduledCallbacks;
}
