
//###############//
//###  Setup  ###//
//###############//

const _Error = Error


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace Interval{
	export namespace Error{

		export class InvalidValue extends _Error{
			constructor(){
				super("'absoluteValue' must be a number greater than or equal to zero.")
				this.name = `Interval.${this.constructor.name}`
			}
		}

		export class NotEnoughValues extends _Error{
			constructor(functionName:string){
				super(`'Interval.${functionName}' requires 2 or more arguments.`)
				this.name = `Interval.${this.constructor.name}`
			}
		}

		export class InvalidResult extends _Error{
			constructor(functionName:string, sum:number){
				super(""
					+ `The sum of 'Interval.${functionName}' must have an 'absoluteValue' greater than or equal to zero. `
					+ `Current 'sum': ${sum}`
				)
				this.name = `Interval.${this.constructor.name}`
			}
		}

	}
}
