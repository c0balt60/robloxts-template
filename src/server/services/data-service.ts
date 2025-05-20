import { Service, OnInit } from "@flamework/core";
import { Players } from "@rbxts/services";
import { Events } from "server/network";

@Service()
export class DataService implements OnInit {
	onInit(): Promise<void> | void {
		print("Initialized server");

		Players.PlayerAdded.Connect((player: Player) => {
			Events.event.fire(player, "Data");
		});
	}
}
