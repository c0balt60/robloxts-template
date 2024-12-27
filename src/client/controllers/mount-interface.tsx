import { Controller, OnStart } from "@flamework/core";
import React, { StrictMode } from "@rbxts/react";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { Players } from "@rbxts/services";
import { Events } from "client/network";
import { App } from "client/ui/apps/app";

@Controller()
export class NetworkTest implements OnStart {

    PlayerGui = Players.LocalPlayer.WaitForChild("PlayerGui");

    onStart(): void {
        Events.event.connect((arg1: string) => {
            print("received: ", arg1);
        })

        const root = createRoot(new Instance("Folder"));
        root.render(
            createPortal(
                <StrictMode>
                    <App/>
                </StrictMode>
                ,this.PlayerGui
            )
            
        )

    }

}