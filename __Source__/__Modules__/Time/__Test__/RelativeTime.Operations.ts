//###  Module  ###//
import {RelativeTime as Time} from "../__Main__"


//###############//
//###  Setup  ###//
//###############//

let time:       Time
let time_1:     Time
let time_2:     Time
let time_3:     Time
let mergedTime: Time


//##############################//
//###  Test.add.SingleValue  ###//
//##############################//

test("add.SingleValue", async ()=>{

	time = new Time({milliseconds:1})
	time.add(1)
	expect(time.components).toEqual({milliseconds:2, seconds:0, minutes:0, hours:0})

	time = new Time({milliseconds:1})
	time.add({milliseconds:1})
	expect(time.components).toEqual({milliseconds:2, seconds:0, minutes:0, hours:0})

	time = new Time({milliseconds:1})
	time.add({seconds:1})
	expect(time.components).toEqual({milliseconds:1, seconds:1, minutes:0, hours:0})

	time = new Time({milliseconds:1})
	time.add({minutes:1})
	expect(time.components).toEqual({milliseconds:1, seconds:0, minutes:1, hours:0})

	time = new Time({milliseconds:1})
	time.add({hours:1})
	expect(time.components).toEqual({milliseconds:1, seconds:0, minutes:0, hours:1})

	time = new Time({milliseconds:1})
	time.add({milliseconds:1, seconds:1, minutes:1, hours:1})
	expect(time.components).toEqual({milliseconds:2, seconds:1, minutes:1, hours:1})

})


//###################################//
//###  Test.subtract.SingleValue  ###//
//###################################//

test("subtract.SingleValue", async ()=>{

	time = new Time({milliseconds:2})
	time.subtract(1)
	expect(time.components).toEqual({milliseconds:1, seconds:0, minutes:0, hours:0})

	time = new Time({milliseconds:2})
	time.subtract({milliseconds:1})
	expect(time.components).toEqual({milliseconds:1, seconds:0, minutes:0, hours:0})

	time = new Time({seconds:2})
	time.subtract({seconds:1})
	expect(time.components).toEqual({milliseconds:0, seconds:1, minutes:0, hours:0})

	time = new Time({minutes:2})
	time.subtract({minutes:1})
	expect(time.components).toEqual({milliseconds:0, seconds:0, minutes:1, hours:0})

	time = new Time({hours:2})
	time.subtract({hours:1})
	expect(time.components).toEqual({milliseconds:0, seconds:0, minutes:0, hours:1})

	time = new Time({milliseconds:2, seconds:2, minutes:2, hours:2})
	time.subtract({milliseconds:1, seconds:1, minutes:1, hours:1})
	expect(time.components).toEqual({milliseconds:1, seconds:1, minutes:1, hours:1})

})


//#################################//
//###  Test.add.MultipleValues  ###//
//#################################//

test("add.MultipleValues", async ()=>{

	time_1 = new Time({milliseconds:1})
	time_2 = new Time({milliseconds:1})
	time_3 = new Time({milliseconds:1})

	mergedTime = Time.add()
	expect(mergedTime.components).toEqual({milliseconds:0, seconds:0, minutes:0, hours:0})

	mergedTime = Time.add(time_1)
	expect(mergedTime.components).toEqual({milliseconds:1, seconds:0, minutes:0, hours:0})

	mergedTime = Time.add(time_1, time_2)
	expect(mergedTime.components).toEqual({milliseconds:2, seconds:0, minutes:0, hours:0})

	mergedTime = Time.add(time_1, time_2, time_3)
	expect(mergedTime.components).toEqual({milliseconds:3, seconds:0, minutes:0, hours:0})

})


//######################################//
//###  Test.subtract.MultipleValues  ###//
//######################################//

test("subtract.MultipleValues", async ()=>{

	time_1 = new Time({milliseconds:3})
	time_2 = new Time({milliseconds:1})
	time_3 = new Time({milliseconds:1})

	mergedTime = Time.subtract()
	expect(mergedTime.components).toEqual({milliseconds:0, seconds:0, minutes:0, hours:0})

	mergedTime = Time.subtract(time_1)
	expect(mergedTime.components).toEqual({milliseconds:3, seconds:0, minutes:0, hours:0})

	mergedTime = Time.subtract(time_1, time_2)
	expect(mergedTime.components).toEqual({milliseconds:2, seconds:0, minutes:0, hours:0})

	mergedTime = Time.subtract(time_1, time_2, time_3)
	expect(mergedTime.components).toEqual({milliseconds:1, seconds:0, minutes:0, hours:0})

})
