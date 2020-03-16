//###  Module  ###//
import {_BPM_Manager} from "../BPM_Manager/__Main__"


//###############//
//###  Setup  ###//
//###############//

const _Error = Error


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace Note{
	export namespace Error{

		export class InvalidDuration extends _Error{
			constructor(value:string){
				super(`\`${value}\` does not match \`${_BPM_Manager.duration_RegEx_String}\``)
				this.name = `Note.${this.constructor.name}`
			}
		}

		export class InvalidResult extends _Error{
			constructor(functionName:string, midiValue:number){
				super(""
					+ `The result of 'Note.${functionName}' must be a valid 'midiValue' between 0 - 127. `
					+ `Current 'midiValue': ${midiValue}`
				)
				this.name = `Note.${this.constructor.name}`
			}
		}

	}
}
