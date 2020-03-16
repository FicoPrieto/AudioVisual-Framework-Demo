export default function (source: string): string;
export declare namespace RegEx_Preset {
    const interpolate_String: _Replacer;
    namespace Pug {
        const Attribute_LeadingWhitespace: _Replacer;
    }
    namespace Stylus {
        const Attribute_LeadingWhitespace: _Replacer;
    }
}
declare type _Replacer = ({
    regEx: RegExp;
    replacement: ((source: string, regEx: RegExp) => string);
} | {
    regEx: RegExp;
    replacement: string;
});
export {};
