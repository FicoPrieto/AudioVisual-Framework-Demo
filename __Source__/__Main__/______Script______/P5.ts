
//###  Sketch  ###//
import {Synth} from "./Synth"

//###  App  ###//
import Draw        from "@/Draw/__Main__"
import {Animation} from "@/Draw/Animation/__Main__"
import {NoteName } from "@/Music/Note/Types"

//##################################//
//###  Exports.Namespace.Public  ###//
//##################################//

export namespace P5{

	export let Front: Draw.P5
	export let Back:  Draw.P5

	export function initialize(){
		Back  = new Draw.P5({selector:"#P5_Back" })
		Front = new Draw.P5({selector:"#P5_Front"})
	}

	export function keyEffect(key:HTMLElement, noteName:NoteName, keyState:Synth.KeyState, colors:Synth.KeyColor){
		const animation = new Animation({
			state:{
				alpha:        0,
				heightOffset: 0,
				size:         0,
				color:        "",
			},
			on_Animate: (self, $, _) => {
				const padding = 30

				const x = (padding + (($.width - (padding * 2)) * (($.sin(self.frame * 0.03) + 1) / 2)))
				const y = ((($.height / 2) + _.heightOffset) + ($.sin(self.frame * 0.01) * 400))
				const color = $.color(_.color)
				color.setAlpha(_.alpha)

				$.fill   (color     )
				$.stroke (0, 0, 0, 0)
				$.ellipse(x, y, _.size, _.size)
			},
			endCondition: (self) => self.frame == 500
		})

		Back.add(new Animation.Group().add(
			animation.clone({state:{ alpha:128, heightOffset:0, size:50, color:colors.blackKey }}),
		))

		Front.add(new Animation.Group({mode:Animation.Mode.Parallel}).add(
			animation.clone({state:{ alpha:64, heightOffset:-65, size:30, color:colors.whiteKey }}),
			animation.clone({state:{ alpha:64, heightOffset:55,  size:30, color:colors.whiteKey }}),
		))
	}

}


//###################//
//###  Utilities  ###//
//###################//

