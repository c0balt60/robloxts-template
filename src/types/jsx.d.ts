import type { InstanceProps } from "@rbxts/react";

declare namespace JSX {
	interface IntrinsicElements {
		proximityprompt: InstanceProps<ProximityPrompt>;
		rigidconstraint: InstanceProps<RigidConstraint>;
		attachment: InstanceProps<Attachment>;
		blureffect: InstanceProps<BlurEffect>;
		worldmodel: InstanceProps<WorldModel>;
		highlight: InstanceProps<Highlight>;
		motor6d: InstanceProps<Motor6D>;
		texture: InstanceProps<Texture>;
		folder: InstanceProps<Folder>;
		part: InstanceProps<Part>;
	}
}
