//###  App  ###//
import Settings from "Settings"


//###############//
//###  Setup  ###//
//###############//

window[Settings.ExposedFunction_Key] = {}

const _exposedFunctions = {}


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace Utilities{

	export function disable_ElementDragging()
		{document.documentElement.ondragstart = (() => false)}

	export function expose(target:any, key:string, descriptor:PropertyDescriptor){
		_exposedFunctions                   [target.name] = (_exposedFunctions                   [target.name] || {})
		window[Settings.ExposedFunction_Key][target.name] = (window[Settings.ExposedFunction_Key][target.name] || {})

		if(_exposedFunctions[target.name][key])
			{throw new Error(`${Settings.ExposedFunction_Key}.${target.name}.${key} has already been exposed.`)}

		_exposedFunctions[target.name][key] = true

		window[Settings.ExposedFunction_Key][target.name][key] = descriptor.value
	}

}
