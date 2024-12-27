import React, { PropsWithChildren } from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { App } from "client/ui/apps";
import { ScaleProvider } from "client/ui/provider/scale-provider";

/** its a good practice to have
 * `PropsWithChildren`, but it
 * isn't required. I made up this
 * "good practice" because roblox-ts
 */
interface ReadmeProps extends PropsWithChildren {
	/** the text to display */
	text?: string;
}
/** We create a react component */
function Component({ text }: ReadmeProps) {
	
	return (
		<textlabel
			Text={text}
			Size={UDim2.fromScale(.5,.5)}
			Position={UDim2.fromScale(0.5, 0.5)}
			AnchorPoint={new Vector2(0.5, 0.5)}
		>
		</textlabel>
	);
}

export = CreateReactStory({react: React, reactRoblox: ReactRoblox}, () => {

    return (
        // <ScaleProvider>
        //     <Component text="lorem ipsum dorem"/>
        // </ScaleProvider>
		<App/>
    )

})