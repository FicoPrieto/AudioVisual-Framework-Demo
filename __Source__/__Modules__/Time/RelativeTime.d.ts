export declare class RelativeTime {
    private _totalMilliseconds;
    constructor(milliseconds?: number);
    constructor(options: {
        milliseconds?: number;
        seconds?: number;
        minutes?: number;
        hours?: number;
    });
    get milliseconds(): number;
    get seconds(): number;
    get minutes(): number;
    get hours(): number;
    get components(): {
        milliseconds: number;
        seconds: number;
        minutes: number;
        hours: number;
    };
    add(milliseconds: number): void;
    add(options: {
        milliseconds?: number;
        seconds?: number;
        minutes?: number;
        hours?: number;
    }): void;
    subtract(milliseconds: number): void;
    subtract(options: {
        milliseconds?: number;
        seconds?: number;
        minutes?: number;
        hours?: number;
    }): void;
    static add(...times: RelativeTime[]): RelativeTime;
    static subtract(...times: RelativeTime[]): RelativeTime;
}
export declare namespace RelativeTime {
    type Components = {
        milliseconds?: number;
        seconds?: number;
        minutes?: number;
        hours?: number;
    };
}
