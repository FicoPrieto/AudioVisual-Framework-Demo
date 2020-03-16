//###  Module  ###//
import {BPM_Manager, _BPM_Manager} from "./__Main__"

//###  App  ###//
import {RelativeTime} from "@/Time/__Main__"


//#########################//
//###  Test.beatLength  ###//
//#########################//

test("beatLength", ()=>{
	expect(BPM_Manager.beatLength.seconds).toEqual(0)

	BPM_Manager.link({bpm:100})
	expect(BPM_Manager.beatLength.seconds).toEqual(60 / 100) // (oneMinute_InSeconds / bpm)
})


//##########################################//
//###  Test.get_Duration_InMilliseconds  ###//
//##########################################//

test("get_Duration_InMilliseconds", ()=>{
	let duration: RelativeTime
	const bpm = 60
	BPM_Manager.link({bpm})
	const get_Duration = _BPM_Manager.get_Duration_InMilliseconds
	const quarterNote_Milliseconds = ((60000 / bpm) * 0.25) // ((oneMinute_InMilliseconds / bpm) * oneQuarter)

	//###  milliseconds  ###//
	duration = get_Duration(100)
	expect(duration.milliseconds).toEqual(100)
	//---------------------------------------------------------//
	duration = get_Duration(new RelativeTime({milliseconds:100}))
	expect(duration.milliseconds).toEqual(100)
	//---------------------------------------//
	duration = get_Duration({milliseconds:100})
	expect(duration.milliseconds).toEqual(100)

	//###  quarter note  ###//
	duration = get_Duration("1/4")
	expect(duration.milliseconds).toEqual(quarterNote_Milliseconds)
	//-----------------------------------------------------------//
	duration = get_Duration("3 1/4")
	expect(duration.milliseconds).toEqual(quarterNote_Milliseconds * 3)

	//###  quarter note triplet  ###//
	duration = get_Duration("1/4t")
	expect(duration.milliseconds).toEqual((quarterNote_Milliseconds / 3) * 2)
	//---------------------------------------------------------------------//
	duration = get_Duration("3 1/4t")
	expect(duration.milliseconds).toEqual(((quarterNote_Milliseconds / 3) * 2) * 3)

	//###  whole note  ###//
	duration = get_Duration("4 1/4")
	expect(duration.milliseconds).toEqual(quarterNote_Milliseconds * 4)
	//---------------------------------------------------------------//
	duration = get_Duration("1")
	expect(duration.milliseconds).toEqual(quarterNote_Milliseconds * 4)
	//---------------------------------------------------------------//
	duration = get_Duration("3")
	expect(duration.milliseconds).toEqual((quarterNote_Milliseconds * 4) * 3)
})
