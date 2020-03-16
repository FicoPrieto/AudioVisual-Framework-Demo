
//########################//
//###  Exports.Public  ###//
//########################//

export * from "./P5/__Main__"


//###############################//
//###  Export.Default.Public  ###//
//###############################//

import {P5 as _P5} from "./P5/__Main__"

namespace Draw{
	export import P5 = _P5
}

export default Draw
