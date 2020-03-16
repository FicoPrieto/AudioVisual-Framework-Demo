
//###############//
//###  Setup  ###//
//###############//

const _Error = Error


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace Chord{
	export namespace Error{

		export class NotEnoughValues extends _Error{
			constructor(){
				super(`'Chord' constructor requires at least 1 note.`)
				this.name = `Chord.${this.constructor.name}`
			}
		}

		export class InvalidNoteIndex extends _Error{
			constructor(functionName:string, index:number){
				super(`'Chord.${functionName}' received an invalid note index: ${index}`)
				this.name = `Chord.${this.constructor.name}`
			}
		}

	}
}
