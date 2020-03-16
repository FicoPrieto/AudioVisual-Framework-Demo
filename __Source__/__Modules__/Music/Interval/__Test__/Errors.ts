//###  Module  ###//
import {Interval} from "../__Main__"


//###########################//
//###  Test.InvalidValue  ###//
//###########################//

test("InvalidValue", ()=>{
	expect(()=>{new Interval(0) }).not.toThrow(Interval.Error.InvalidValue)
	expect(()=>{new Interval(1) }).not.toThrow(Interval.Error.InvalidValue)
	expect(()=>{new Interval(-1)}).toThrow    (Interval.Error.InvalidValue)
})


//##############################//
//###  Test.NotEnoughValues  ###//
//##############################//

test("NotEnoughValues", ()=>{
	expect(()=>{Interval.add     (0, 0)}).not.toThrow(Interval.Error.NotEnoughValues)
	expect(()=>{Interval.subtract(0, 0)}).not.toThrow(Interval.Error.NotEnoughValues)
	expect(()=>{Interval.add     (    )}).toThrow    (Interval.Error.NotEnoughValues)
	expect(()=>{Interval.subtract(    )}).toThrow    (Interval.Error.NotEnoughValues)
	expect(()=>{Interval.add     (0   )}).toThrow    (Interval.Error.NotEnoughValues)
	expect(()=>{Interval.subtract(0   )}).toThrow    (Interval.Error.NotEnoughValues)
})


//############################//
//###  Test.InvalidResult  ###//
//############################//

test("InvalidResult", ()=>{
	expect(()=>{Interval.add     (0, 0 )}).not.toThrow(Interval.Error.InvalidResult)
	expect(()=>{Interval.subtract(0, 0 )}).not.toThrow(Interval.Error.InvalidResult)
	expect(()=>{Interval.add     (0, -1)}).toThrow    (Interval.Error.InvalidResult)
	expect(()=>{Interval.subtract(0,  1)}).toThrow    (Interval.Error.InvalidResult)
})
