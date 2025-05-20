import Object from "@rbxts/object-utils";

/**
 * Catppuccin Mocha Accents
 * @see https://github.com/catppuccin/catppuccin
 */
export const accents = {
	rosewater: Color3.fromRGB(245, 224, 220),
	flamingo: Color3.fromRGB(242, 205, 205),
	sapphire: Color3.fromRGB(116, 199, 236),
	lavender: Color3.fromRGB(180, 190, 254),
	maroon: Color3.fromRGB(235, 160, 172),
	yellow: Color3.fromRGB(249, 226, 175),
	mauve: Color3.fromRGB(203, 166, 247),
	peach: Color3.fromRGB(250, 179, 135),
	green: Color3.fromRGB(166, 227, 161),
	pink: Color3.fromRGB(245, 194, 231),
	teal: Color3.fromRGB(148, 226, 213),
	blue: Color3.fromRGB(137, 180, 250),
	red: Color3.fromRGB(243, 139, 168),
	sky: Color3.fromRGB(137, 220, 235),
} as const;

/**
 * Catppuccin Mocha Neutrals
 * @see https://github.com/catppuccin/catppuccin
 */
export const neutrals = {
	subtext1: Color3.fromRGB(186, 194, 222),
	subtext0: Color3.fromRGB(166, 173, 200),
	overlay2: Color3.fromRGB(147, 153, 178),
	overlay1: Color3.fromRGB(127, 132, 156),
	overlay0: Color3.fromRGB(108, 112, 134),
	surface2: Color3.fromRGB(88, 91, 112),
	surface1: Color3.fromRGB(69, 71, 90),
	surface0: Color3.fromRGB(49, 50, 68),
	text: Color3.fromRGB(205, 214, 244),
	mantle: Color3.fromRGB(24, 24, 37),
	crust: Color3.fromRGB(17, 17, 27),
	base: Color3.fromRGB(30, 30, 46),
} as const;

const base = {
	offwhite: Color3.fromRGB(234, 238, 253),
	white: Color3.fromRGB(255, 255, 255),
	black: Color3.fromRGB(0, 0, 0),
};

/**
 * Catppuccin Mocha Palette
 * @see https://github.com/catppuccin/catppuccin
 */
export const palette = {
	...accents,
	...neutrals,
	...base,
} as const;

/**
 * An ordered list of all the accent colors
 */
export const accentList = [
	"rosewater",
	"flamingo",
	"pink",
	"mauve",
	"red",
	"maroon",
	"peach",
	"yellow",
	"green",
	"teal",
	"sky",
	"sapphire",
	"blue",
	"lavender",
] as const;

export function getRandomAccent(): Color3 {
	const values = Object.values(accents);
	return values[math.random(0, values.size() - 1)];
}
