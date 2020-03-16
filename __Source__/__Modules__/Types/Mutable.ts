export type Mutable<Type> = {
	-readonly [key in keyof Type]: Type[key]
}
