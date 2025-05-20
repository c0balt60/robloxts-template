interface _G {
	/** Enable component limit
	 * @default 256
	 */
	JECS_HI_COMPONENT_ID: number;
	/** Enable React profiling mode. */
	__PROFILE__: boolean;
	/** Enable debug mode for JECS
	 * @default false
	 */
	JECS_DEBUG: boolean;
	/** Enable React dev mode. */
	__DEV__: boolean;
}

type Maybe<T> = undefined | T;

type If<Value extends boolean, TrueResult, FalseResult = undefined> = Value extends true
	? TrueResult
	: Value extends false
		? FalseResult
		: FalseResult | TrueResult;

type DeepReadonly<T> = T extends (infer R)[]
	? DeepReadonlyArray<R>
	: T extends Callback
		? T
		: T extends object
			? DeepReadonlyObject<T>
			: T;

type DeepReadonlyArray<T> = ReadonlyArray<DeepReadonly<T>>;

type DeepReadonlyObject<T> = {
	readonly [P in keyof T]: DeepReadonly<T[P]>;
};

type DeepWritable<T> = T extends (infer R)[]
	? DeepWritableArray<R>
	: T extends Callback
		? T
		: T extends object
			? DeepWritableObject<T>
			: T;

type DeepWritableArray<T> = Array<DeepWritable<T>>;

type DeepWritableObject<T> = {
	-readonly [P in keyof T]: DeepWritable<T[P]>;
};

type RequiredKeys<T> = {
	[K in keyof T]-?: unknown extends Pick<T, K> ? never : K;
}[keyof T];

type OptionalKeys<T> = {
	[K in keyof T]-?: unknown extends Pick<T, K> ? K : never;
}[keyof T];

type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends (infer U)[] ? DeepPartial<U>[] : T[P] extends object ? DeepPartial<T[P]> : T[P];
};
