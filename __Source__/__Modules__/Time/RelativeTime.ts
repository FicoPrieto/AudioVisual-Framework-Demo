
//##############################//
//###  Exports.Class.Public  ###//
//##############################//

export class RelativeTime{

	private _totalMilliseconds: number

	constructor(milliseconds?:number)
	constructor(options:{milliseconds?:number, seconds?:number, minutes?:number, hours?:number})
	constructor(arg:({milliseconds?:number, seconds?:number, minutes?:number, hours?:number}|number)){
		const {milliseconds, seconds, minutes, hours} = _get_Components_From_Arg(arg)

		this._totalMilliseconds = (0
			+ milliseconds
			+ (seconds * 1000   )
			+ (minutes * 60000  )
			+ (hours   * 3600000)
		)
	}

	get milliseconds(){return this._totalMilliseconds            }
	get seconds     (){return (this._totalMilliseconds / 1000   )}
	get minutes     (){return (this._totalMilliseconds / 60000  )}
	get hours       (){return (this._totalMilliseconds / 3600000)}

	get components(){
		let milliseconds = this._totalMilliseconds

		const hours = Math.floor(milliseconds / 3600000)
		milliseconds -= (hours * 3600000)

		const minutes = Math.floor(milliseconds / 60000)
		milliseconds -= (minutes * 60000)

		const seconds = Math.floor(milliseconds / 1000)
		milliseconds -= (seconds * 1000)

		return {
			milliseconds,
			seconds,
			minutes,
			hours,
		}
	}

	add(milliseconds:number):                                                             void
	add(options:{milliseconds?:number, seconds?:number, minutes?:number, hours?:number}): void
	add(arg:({milliseconds?:number, seconds?:number, minutes?:number, hours?:number}|number)){
		const {milliseconds, seconds, minutes, hours} = _get_Components_From_Arg(arg)
		this._totalMilliseconds += milliseconds
		this._totalMilliseconds += (seconds * 1000   )
		this._totalMilliseconds += (minutes * 60000  )
		this._totalMilliseconds += (hours   * 3600000)
	}

	subtract(milliseconds:number):                                                             void
	subtract(options:{milliseconds?:number, seconds?:number, minutes?:number, hours?:number}): void
	subtract(arg:({milliseconds?:number, seconds?:number, minutes?:number, hours?:number}|number)){
		const {milliseconds, seconds, minutes, hours} = _get_Components_From_Arg(arg)
		this._totalMilliseconds -= milliseconds
		this._totalMilliseconds -= (seconds * 1000   )
		this._totalMilliseconds -= (minutes * 60000  )
		this._totalMilliseconds -= (hours   * 3600000)
	}

	static add(...times:RelativeTime[]){
		if(times.length == 0)
			{times.push(new RelativeTime(0))}

		return times.reduce((previousValue, currentValue) => {
			const time = new RelativeTime(previousValue.components)
			time.add(currentValue.components)
			return time
		})
	}

	static subtract(...times:RelativeTime[]){
		if(times.length == 0)
			{times.push(new RelativeTime(0))}

		return times.reduce((previousValue, currentValue) => {
			const time = new RelativeTime(previousValue.components)
			time.subtract(currentValue.components)
			return time
		})
	}

}


//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace RelativeTime{

	export type Components = {
		milliseconds?: number,
		seconds?:      number,
		minutes?:      number,
		hours?:        number,
	}

}


//###################//
//###  Utilities  ###//
//###################//

function _get_Components_From_Arg(arg:({milliseconds?:number, seconds?:number, minutes?:number, hours?:number}|number)){
	const {milliseconds, seconds, minutes, hours} =
		(typeof arg == "number")
		? {hours:0, minutes:0, seconds:0, milliseconds:arg}
		: {...{milliseconds:0, seconds:0, minutes:0, hours:0}, ...arg}

	return {milliseconds, seconds, minutes, hours}
}
