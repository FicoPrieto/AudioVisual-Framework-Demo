//###  App  ###//
import Settings from "../../../__Source__/__Main__/Settings.json"

//###  NPM  ###//
import loaderUtils from "loader-utils"


//########################//
//###  Export.Default  ###//
//########################//

export default function(source:string){
	const options   = loaderUtils.getOptions(this)
	const replacers = ((options.replace as _Replacer[]) || [])

	for(const {regEx, replacement} of replacers){
		if(typeof replacement == "string")
			{source = source.replace(regEx, replacement)}
		else
			{source = replacement(source, regEx)}
	}

	return source
}


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace RegEx_Preset{

	export const interpolate_String:_Replacer = {
		regEx:       /\$\{\{"(.*?)"\}\}/gm,
		replacement: "$1",
	}

//########################################//
//##  ToDo:                             ##//
//##    finish implementing evaluators  ##//
//########################################//

	// export const evaluate_String:_Replacer = {
	// 	regEx:       /\$\{\{(.+?)\}\}/gm,
	// 	replacement: (source, regEx) => {
	// 		// return source.replace(regEx, (match, capture) =>
	// 		// return (match) ? `${eval(match[1])}` : source
	// 	},
	// }

	// export const interpolate_Setting:_Replacer = {
	// 	regEx:       /\$\{\{Settings\.(.+?)\}\}/gm,
	// 	replacement: (source, regEx) => {
	// 		// return source.replace(regEx, (match, capture) =>
	// 		// return (match) ? `${_evaluate_Setting(match[1])}` : source
	// 	},
	// }

	export namespace Pug{
		export const Attribute_LeadingWhitespace:_Replacer = {
			regEx:       /^(\s*[A-Za-z0-9_#.]+)\s+(\(.*\))/gm,
			replacement: "$1$2",
		}
	}

	export namespace Stylus{
		export const Attribute_LeadingWhitespace:_Replacer = {
			regEx:       /^(\s*[A-Za-z0-9_#.]+)\s+(\(.*\))/gm,
			replacement: "$1$2",
		}
	}

}


//###################//
//###  Utilities  ###//
//###################//

type _Replacer = (
	{regEx:RegExp, replacement:((source:string, regEx:RegExp) => string)}
	| {regEx:RegExp, replacement:string}
)

function _evaluate_Setting(setting:string)
	{return Function(`"use strict"; return this.${setting}`).bind(Settings)()}
