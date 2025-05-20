import { useEventListener, useUnmountEffect, getBindingValue } from "@rbxts/pretty-react-hooks";
import React, { useState, Binding, useMemo } from "@rbxts/react";
import { createPortal } from "@rbxts/react-roblox";
import { palette } from "shared/constants/palette";
import { RunService } from "@rbxts/services";

interface TransitionProps extends React.PropsWithChildren {
	change?: React.InstanceChangeEvent<CanvasGroup | Frame>;
	event?: React.InstanceEvent<CanvasGroup | Frame>;
	clipsDescendants?: Binding<boolean> | boolean;
	groupTransparency?: Binding<number> | number;
	anchorPoint?: Binding<Vector2> | Vector2;
	layoutOrder?: Binding<number> | number;
	groupColor?: Binding<Color3> | Color3;
	rotation?: Binding<number> | number;
	position?: Binding<UDim2> | UDim2;
	zIndex?: Binding<number> | number;
	directChildren?: React.ReactNode;
	size?: Binding<UDim2> | UDim2;
	children?: React.ReactNode;
}

const EPSILON = 0.03;

export function Transition({
	size = new UDim2(1, 0, 1, 0),
	groupTransparency,
	clipsDescendants,
	directChildren,
	anchorPoint,
	layoutOrder,
	groupColor,
	position,
	rotation,
	children,
	zIndex,
	change,
	event,
}: TransitionProps) {
	const [frame, setFrame] = useState<Frame>();
	const [canvas, setCanvas] = useState<CanvasGroup>();

	const container = useMemo(() => {
		const container = new Instance("Frame");
		container.Size = new UDim2(1, 0, 1, 0);
		container.BackgroundTransparency = 1;
		return container;
	}, []);

	useEventListener(RunService.Heartbeat, () => {
		const transparency = getBindingValue(groupTransparency) ?? 0;
		const color = getBindingValue(groupColor) || palette.white;

		pcall(() => {
			if (transparency > EPSILON || color !== palette.white) {
				container.Parent = canvas;
			} else {
				container.Parent = frame;
			}
		});
	});

	useUnmountEffect(() => {
		container.Destroy();
	});

	return (
		<frame
			BackgroundTransparency={1}
			AnchorPoint={anchorPoint}
			LayoutOrder={layoutOrder}
			Position={position}
			Rotation={rotation}
			ZIndex={zIndex}
			Size={size}
		>
			{createPortal(<>{children}</>, container)}

			<canvasgroup
				GroupTransparency={groupTransparency}
				Size={new UDim2(1, 0, 1, 0)}
				BackgroundTransparency={1}
				GroupColor3={groupColor}
				ref={setCanvas}
				Change={change}
				Event={event}
			>
				{directChildren}
			</canvasgroup>

			<frame
				ClipsDescendants={clipsDescendants}
				Size={new UDim2(1, 0, 1, 0)}
				BackgroundTransparency={1}
				Change={change}
				ref={setFrame}
				Event={event}
			>
				{directChildren}
			</frame>
		</frame>
	);
}
