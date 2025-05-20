import React, { useEffect, useState } from "@rbxts/react";
import { setTimeout } from "@rbxts/set-timeout";

interface DelayRenderProps extends React.PropsWithChildren {
	shouldRender: boolean;
	unmountDelay?: number;
	mountDelay?: number;
}

export function DelayRender({ unmountDelay = 0, mountDelay = 0, shouldRender, children }: DelayRenderProps) {
	const [render, setRender] = useState(false);

	useEffect(() => {
		return setTimeout(() => setRender(shouldRender), shouldRender ? mountDelay : unmountDelay);
	}, [shouldRender]);

	return <>{render && children}</>;
}
