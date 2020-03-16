//###  Module  ###//
import {RelativeTime as Time} from "../__Main__"


//###############//
//###  Setup  ###//
//###############//

let time: Time


//####################//
//###  Test.Basic  ###//
//####################//

test("Basic", async ()=>{

	time = new Time()
	expect(time.milliseconds).toEqual(0)
	expect(time.seconds     ).toEqual(0)
	expect(time.minutes     ).toEqual(0)
	expect(time.hours       ).toEqual(0)
	expect(time.components  ).toEqual({milliseconds:0, seconds:0, minutes:0, hours:0})

	time = new Time(1)
	expect(time.milliseconds).toEqual(1          )
	expect(time.seconds     ).toEqual(1 / 1000   )
	expect(time.minutes     ).toEqual(1 / 60000  )
	expect(time.hours       ).toEqual(1 / 3600000)
	expect(time.components  ).toEqual({milliseconds:1, seconds:0, minutes:0, hours:0})

	time = new Time(1000)
	expect(time.milliseconds).toEqual(1000          )
	expect(time.seconds     ).toEqual(1             )
	expect(time.minutes     ).toEqual(1000 / 60000  )
	expect(time.hours       ).toEqual(1000 / 3600000)
	expect(time.components  ).toEqual({milliseconds:0, seconds:1, minutes:0, hours:0})

	time = new Time({milliseconds:1000})
	expect(time.milliseconds).toEqual(1000          )
	expect(time.seconds     ).toEqual(1             )
	expect(time.minutes     ).toEqual(1000 / 60000  )
	expect(time.hours       ).toEqual(1000 / 3600000)
	expect(time.components  ).toEqual({milliseconds:0, seconds:1, minutes:0, hours:0})

	time = new Time({seconds:1})
	expect(time.milliseconds).toEqual(1000          )
	expect(time.seconds     ).toEqual(1             )
	expect(time.minutes     ).toEqual(1000 / 60000  )
	expect(time.hours       ).toEqual(1000 / 3600000)
	expect(time.components  ).toEqual({milliseconds:0, seconds:1, minutes:0, hours:0})

	time = new Time({seconds:60})
	expect(time.milliseconds).toEqual(60 * 1000)
	expect(time.seconds     ).toEqual(60       )
	expect(time.minutes     ).toEqual(1        )
	expect(time.hours       ).toEqual(1 / 60   )
	expect(time.components  ).toEqual({milliseconds:0, seconds:0, minutes:1, hours:0})

	time = new Time({minutes:1})
	expect(time.milliseconds).toEqual(60 * 1000)
	expect(time.seconds     ).toEqual(60       )
	expect(time.minutes     ).toEqual(1        )
	expect(time.hours       ).toEqual(1 / 60   )
	expect(time.components  ).toEqual({milliseconds:0, seconds:0, minutes:1, hours:0})

	time = new Time({minutes:60})
	expect(time.milliseconds).toEqual(60 * 60000)
	expect(time.seconds     ).toEqual(60 * 60   )
	expect(time.minutes     ).toEqual(60        )
	expect(time.hours       ).toEqual(1         )
	expect(time.components)  .toEqual({milliseconds:0, seconds:0, minutes:0, hours:1})

	time = new Time({hours:1})
	expect(time.milliseconds).toEqual(60 * 60000)
	expect(time.seconds     ).toEqual(60 * 60   )
	expect(time.minutes     ).toEqual(60        )
	expect(time.hours       ).toEqual(1         )
	expect(time.components  ).toEqual({milliseconds:0, seconds:0, minutes:0, hours:1})

})


//##############################//
//###  Test.MixedComponents  ###//
//##############################//

test("MixedComponents", async ()=>{

	time = new Time({milliseconds:1000, seconds:1})
	expect(time.milliseconds).toEqual(2000          )
	expect(time.seconds     ).toEqual(2             )
	expect(time.minutes     ).toEqual(2000 / 60000  )
	expect(time.hours       ).toEqual(2000 / 3600000)
	expect(time.components  ).toEqual({milliseconds:0, seconds:2, minutes:0, hours:0})

	time = new Time({minutes:1, seconds:60})
	expect(time.milliseconds).toEqual(120000          )
	expect(time.seconds     ).toEqual(120             )
	expect(time.minutes     ).toEqual(2               )
	expect(time.hours       ).toEqual(120000 / 3600000)
	expect(time.components  ).toEqual({milliseconds:0, seconds:0, minutes:2, hours:0})

	time = new Time({hours:1, minutes:60})
	expect(time.milliseconds).toEqual(7200000       )
	expect(time.seconds     ).toEqual(7200000 / 1000)
	expect(time.minutes     ).toEqual(120           )
	expect(time.hours       ).toEqual(2             )
	expect(time.components  ).toEqual({milliseconds:0, seconds:0, minutes:0, hours:2})

})


//#######################//
//###  Test.Overflow  ###//
//#######################//

test("Overflow", async ()=>{

	time = new Time(1500)
	expect(time.milliseconds).toEqual(1500          )
	expect(time.seconds     ).toEqual(1.5           )
	expect(time.minutes     ).toEqual(1500 / 60000  )
	expect(time.hours       ).toEqual(1500 / 3600000)
	expect(time.components  ).toEqual({milliseconds:500, seconds:1, minutes:0, hours:0})

	time = new Time({milliseconds:1500})
	expect(time.milliseconds).toEqual(1500          )
	expect(time.seconds     ).toEqual(1.5           )
	expect(time.minutes     ).toEqual(1500 / 60000  )
	expect(time.hours       ).toEqual(1500 / 3600000)
	expect(time.components  ).toEqual({milliseconds:500, seconds:1, minutes:0, hours:0})

	time = new Time({seconds:1.5})
	expect(time.milliseconds).toEqual(1500          )
	expect(time.seconds     ).toEqual(1.5           )
	expect(time.minutes     ).toEqual(1500 / 60000  )
	expect(time.hours       ).toEqual(1500 / 3600000)
	expect(time.components  ).toEqual({milliseconds:500, seconds:1, minutes:0, hours:0})

	time = new Time({minutes:1.5})
	expect(time.milliseconds).toEqual(1.5 * 60000)
	expect(time.seconds     ).toEqual(1.5 * 60   )
	expect(time.minutes     ).toEqual(1.5        )
	expect(time.hours       ).toEqual(1.5 / 60   )
	expect(time.components  ).toEqual({milliseconds:0, seconds:30, minutes:1, hours:0})

	time = new Time({hours:1.5})
	expect(time.milliseconds).toEqual(1.5 * 3600000         )
	expect(time.seconds     ).toEqual(1.5 * (3600000 / 1000))
	expect(time.minutes     ).toEqual(1.5 * 60              )
	expect(time.hours       ).toEqual(1.5                   )
	expect(time.components  ).toEqual({milliseconds:0, seconds:0, minutes:30, hours:1})

})
