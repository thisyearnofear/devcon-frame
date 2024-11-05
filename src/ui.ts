import { createSystem } from "frog/ui";
import { colors } from "frog/ui";

// Nord-inspired color palette with more muted variations
const nordPalette = {
  frost1: "#8FBCBB99",
  frost2: "#88C0D099",
  frost3: "#81A1C199",
  frost4: "#5E81AC99",
  polar1: "#2E3440",
  polar2: "#3B4252",
  polar3: "#434C5E",
  polar4: "#4C566A",
  aurora1: "#BF616A88",
  aurora2: "#D0877088",
  aurora3: "#EBCB8B88",
  aurora4: "#A3BE8C88",
  aurora5: "#B48EAD88",
  snow1: "#ECEFF4",
  snow2: "#E5E9F0",
  snow3: "#D8DEE9",
};

export const { Box, Heading, Text, VStack, HStack, vars } = createSystem({
  colors: {
    ...colors.dark,
    ...nordPalette,
    accent1: nordPalette.frost2,
    accent2: nordPalette.frost3,
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
