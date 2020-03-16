//###  Module  ###//
import {Animation as _Animation} from "./Animation"
import {Group     as _Group    } from "./Group"
import {Manager   as _Manager  } from "./Manager"



//########################//
//###  Exports.Public  ###//
//########################//

export class Animation<StateObject> extends _Animation<StateObject>{
}

export namespace Animation{
	export import Manager = _Manager
	export import Group   = _Group
}
