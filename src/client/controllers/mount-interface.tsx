import { createPortal, createRoot } from "@rbxts/react-roblox";
import { Controller, OnStart } from "@flamework/core";
import React, { StrictMode } from "@rbxts/react";
import { Players } from "@rbxts/services";
import { App } from "client/ui/apps/app";
import { Events } from "client/network";

@Controller()
export class NetworkTest implements OnStart {
	PlayerGui = Players.LocalPlayer.WaitForChild("PlayerGui");

	onStart(): void {
		Events.event.connect((arg1: string) => {
			print("received: ", arg1);
		});

		const root = createRoot(new Instance("Folder"));
		root.render(
			createPortal(
				<StrictMode>
					<App />
				</StrictMode>,
				this.PlayerGui,
			),
		);
	}
}
