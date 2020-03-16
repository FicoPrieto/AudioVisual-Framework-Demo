//###  NPM  ###//
import {isNative, isFunction} from "lodash"


//########################//
//###  Exports.Public  ###//
//########################//

export function is_ArrowFunction(func:((...args:any[]) => any)){
	if(! isFunction(func))
		{return false}
	else if(isNative(func))
		{return false}
	else if((func as any).prototype === undefined)
		{return true}
	else
		{return false}
}

export function bind(func:((...args:any[]) => any), context:any){
	if(is_ArrowFunction(func)){
		function wrapper (...args:any[]){
			const _func = eval((func as any).toString())
			return _func(...args)
		}

		return wrapper.bind(context)
	}
	else
		{return func.bind(context)}
}
