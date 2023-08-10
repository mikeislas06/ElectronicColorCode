export const BASE_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:5000/api" : "";

export const red = "#9B2915";
export const blue = "#50A2A7";
export const yellow = "#E9B44C";
export const vanilla = "#E4D6A7";
export const dark = "#1C110A";

export const colorCodes = {
  Black: "#000000",
  Brown: "#8b4513",
  Red: "#dc1c4b",
  Orange: "#e3482c",
  Yellow: "#ffff00",
  Green: "#00ff00",
  Blue: "#0000ff",
  Violet: "#8a2be2",
  Gray: "#808080",
  White: "#ffffff",
  Gold: "#ffd700",
  Silver: "#c0c0c0",
};

export const colors = [
  {
    label: "Black",
    id: 0,
  },
  {
    label: "Brown",
    id: 1,
  },
  {
    label: "Red",
    id: 2,
  },
  {
    label: "Orange",
    id: 3,
  },
  {
    label: "Yellow",
    id: 4,
  },
  {
    label: "Green",
    id: 5,
  },
  {
    label: "Blue",
    id: 6,
  },
  {
    label: "Violet",
    id: 7,
  },
  {
    label: "Gray",
    id: 8,
  },
  {
    label: "White",
    id: 9,
  },
];

export const multiplierValues = [
  {
    label: "Black",
    id: 1,
  },
  {
    label: "Brown",
    id: 10,
  },
  {
    label: "Red",
    id: 100,
  },
  {
    label: "Orange",
    id: 1000,
  },
  {
    label: "Yellow",
    id: 10000,
  },
  {
    label: "Green",
    id: 100000,
  },
  {
    label: "Blue",
    id: 1000000,
  },
  {
    label: "Violet",
    id: 10000000,
  },
  {
    label: "Gray",
    id: 100000000,
  },
  {
    label: "White",
    id: 1000000000,
  },
  {
    label: "Gold",
    id: 0.1,
  },
  {
    label: "Silver",
    id: 0.01,
  },
];

export const toleranceValues = [
  {
    label: "Brown",
    id: 1,
  },
  {
    label: "Red",
    id: 2,
  },
  {
    label: "Green",
    id: 0.5,
  },
  {
    label: "Blue",
    id: 0.25,
  },
  {
    label: "Violet",
    id: 0.1,
  },
  {
    label: "Gray",
    id: 0.05,
  },
  {
    label: "Gold",
    id: 5,
  },
  {
    label: "Silver",
    id: 10,
  },
];
