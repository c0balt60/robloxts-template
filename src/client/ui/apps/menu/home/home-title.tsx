import React from "@rbxts/react";
import { useRem } from "client/ui/hooks/use-rem";

interface HomeTitleProps {

    /** Position of title */
    position?: UDim2
}

export function HomeTitle({position}: HomeTitleProps) {

    const rem = useRem();

    return (
        
        <frame
            AnchorPoint={new Vector2(.5,0)}
            Position={UDim2.fromScale(.5,0.025)}
            Size={UDim2.fromScale(.35,.25)}
            BackgroundTransparency={1}
        >

            <textlabel
                AnchorPoint={new Vector2(.5,.5)}
                BackgroundTransparency={1}
                Position={UDim2.fromScale(.5,.5)}
                Size={UDim2.fromScale(.8,.75)}
                FontFace={Font.fromName("FredokaOne")}
                Text={"Main Menu"}
                TextColor3={new Color3(1,1,1)}
                TextScaled={true}
            />

        </frame>

    )

}