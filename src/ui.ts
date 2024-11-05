import { createSystem } from "frog/ui";
import { colors } from "frog/ui";

// Nord-inspired color palette
const nordPalette = {
  frost1: "#8FBCBB",
  frost2: "#88C0D0",
  frost3: "#81A1C1",
  frost4: "#5E81AC",
  polar1: "#2E3440",
  polar2: "#3B4252",
  polar3: "#434C5E",
  polar4: "#4C566A",
  aurora1: "#BF616A",
  aurora2: "#D08770",
  aurora3: "#EBCB8B",
  aurora4: "#A3BE8C",
  aurora5: "#B48EAD",
  snow1: "#ECEFF4",
  snow2: "#E5E9F0",
  snow3: "#D8DEE9",
};

export const { Box, Heading, Text, VStack, HStack, vars } = createSystem({
  colors: {
    ...colors.dark,
    ...nordPalette,
    background: nordPalette.polar1,
    backgroundAlt: nordPalette.polar2,
    text: nordPalette.snow1,
    textMuted: nordPalette.snow3,
  },
  fonts: {
    display: [
      {
        name: "Space Grotesk",
        source: "google",
        weight: 700,
      },
    ],
    body: [
      {
        name: "Inter",
        source: "google",
        weight: 400,
      },
      {
        name: "Inter",
        source: "google",
        weight: 600,
      },
    ],
  },
});
