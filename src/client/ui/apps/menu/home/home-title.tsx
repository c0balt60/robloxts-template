import { useRem } from "client/ui/hooks/use-rem";
import React from "@rbxts/react";

interface HomeTitleProps {
	/** Position of title */
	position?: UDim2;
}

export function HomeTitle({ position }: HomeTitleProps) {
	const rem = useRem();

	return (
		<frame
			Position={UDim2.fromScale(0.5, 0.025)}
			Size={UDim2.fromScale(0.35, 0.25)}
			AnchorPoint={new Vector2(0.5, 0)}
			BackgroundTransparency={1}
		>
			<textlabel
				FontFace={Font.fromName("FredokaOne")}
				Position={UDim2.fromScale(0.5, 0.5)}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Size={UDim2.fromScale(0.8, 0.75)}
				TextColor3={new Color3(1, 1, 1)}
				BackgroundTransparency={1}
				Text={"Main Menu"}
				TextScaled={true}
			/>
		</frame>
	);
}
