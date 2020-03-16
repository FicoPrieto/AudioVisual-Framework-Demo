//###  Module  ###//
import {Note} from "../__Main__"


//############################//
//###  Test.InvalidResult  ###//
//############################//

test("InvalidResult", ()=>{
	//###  Below Minimum MidiValue  ###//
	expect(()=>{Note.C_Negative1.subtract(1 )}).toThrow(Note.Error.InvalidResult)
	expect(()=>{Note.C_Negative1.add     (-1)}).toThrow(Note.Error.InvalidResult)

	//###  Above Maximum MidiValue  ###//
	expect(()=>{Note.G9.add     (1 )}).toThrow(Note.Error.InvalidResult)
	expect(()=>{Note.G9.subtract(-1)}).toThrow(Note.Error.InvalidResult)
})


//##############################//
//###  Test.InvalidDuration  ###//
//##############################//

test("InvalidDuration", ()=>{
	let note: Note

	expect(()=>{note = Note.C4.clone({duration:"1"     }); note.duration}).not.toThrow(Note.Error.InvalidDuration)
	expect(()=>{note = Note.C4.clone({duration:"1 1/4" }); note.duration}).not.toThrow(Note.Error.InvalidDuration)
	expect(()=>{note = Note.C4.clone({duration:"1 1/4t"}); note.duration}).not.toThrow(Note.Error.InvalidDuration)
	expect(()=>{note = Note.C4.clone({duration:"1 2"   }); note.duration}).toThrow    (Note.Error.InvalidDuration)
	expect(()=>{note = Note.C4.clone({duration:"1 2/"  }); note.duration}).toThrow    (Note.Error.InvalidDuration)
	expect(()=>{note = Note.C4.clone({duration:"1 2 3" }); note.duration}).toThrow    (Note.Error.InvalidDuration)
})

