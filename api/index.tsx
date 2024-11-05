/** @jsxImportSource frog/jsx */
import { Button, Frog } from "frog";
import { handle } from "frog/next";
import { devtools } from "frog/dev";
import { Box, Heading, Text, VStack, vars } from "../src/ui";
import { serveStatic } from "frog/serve-static";

type Event = {
  name: string;
  date: string;
  time: string;
  location: string;
  registrationLink: string;
  mapLink: string;
};

interface AppState {
  currentEventIndex: number;
}

const events: Event[] = [
  {
    name: "Near x Protocol Labs",
    date: "Thursday 7 November",
    time: "9:00 - 17:00 GMT+7",
    location: "SOCO (Open Co-Working Day)",
    registrationLink: "https://lu.ma/NEARProtocolLabsOpenCoworkingDay",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=SOCO%20WORK%20%26%20LIVE%20EmQuartier%20%E0%B8%AD%E0%B9%87%E0%B8%A1%E0%B8%84%E0%B8%A7%E0%B8%AD%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B9%8C%20%E0%B8%8A%E0%B8%B1%E0%B9%89%E0%B8%99%209%20%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%208A09-11%20693%20Khlong%20Tan%20Nuea%2C%20Watthana%2C%20Bangkok%2010110%2C%20Thailand",
  },
  {
    name: "ICP x Chain Fusion",
    date: "Friday 8 November",
    time: "10:00 - 10 Nov, 21:00 GMT+7",
    location: "ZillaSpace (Hacker House)",
    registrationLink: "https://lu.ma/nq8qzppm",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=ZillaSpace&query_place_id=ChIJswb14-qf4jAR_15vP6D4NRk",
  },
  {
    name: "PolkaDot x WebZero",
    date: "Saturday 9 November",
    time: "10:00 AM - Nov 12, 11:59 PM GMT+7",
    location: "The Blockspace (24hr Cowork + Hack)",
    registrationLink: "https://lu.ma/theblockspace",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=127%20Na%20Ranong%20Rd&query_place_id=ChIJezLcbBOf4jARd8bHpVlvC5A",
  },
  {
    name: "Polygon x Agg Summit",
    date: "Sunday 10 November",
    time: "All Day",
    location: "True Digital Park",
    registrationLink: "https://www.agglayer.dev/#section-tickets",
    mapLink: "https://maps.app.goo.gl/8DUwbNGQ7QvJrHBY8",
  },
  {
    name: "ZK Accelerate",
    date: "Monday 11 November",
    time: "8:30 - 17:00 GMT+7",
    location: "Carlton Hotel Bangkok",
    registrationLink: "https://lu.ma/zkathailand?tk=AalUbb",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Carlton%20Hotel%20Bangkok%20Sukhumvit&query_place_id=ChIJ4RG7R_2e4jARyV_Q_komyoc",
  },
  {
    name: "ENS FrensDay",
    date: "Monday 11 November",
    time: "9:00 - 19:00 GMT+7",
    location: "Venue when Approved",
    registrationLink: "https://frensday.ens.domains/register",
    mapLink: "https://frensday.ens.domains/#speakers",
  },
  {
    name: "EigenLayer x Fitness",
    date: "Tuesday 12 November",
    time: "7:00 - 7:45 GMT+7",
    location: "F45 Training Asok",
    registrationLink: "https://lu.ma/7p8xr5at?pk=g-CH6Hia8stHfdXbe",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=F45%20Training%20Asok&query_place_id=ChIJ5ZiQyAKf4jARMu2oKeVh-xE",
  },
  {
    name: "Superfluid",
    date: "Wednesday 13 November",
    time: "12:00 - 00:00 GMT+7",
    location: "Flow House Bangkok",
    registrationLink: "https://lu.ma/hpf2q35b?tk=MRWN0H",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Flow%20House&query_place_id=ChIJa7oJQA-f4jARSSV0G-L-bLI",
  },
  {
    name: "ArbiVerse Bangkok",
    date: "Wednesday 13 November",
    time: "14:00 - 21:00 GMT+7",
    location: "The Glass House",
    registrationLink: "https://lu.ma/ArbiVerseBangkok?pk=g-d6sB9FHSSDrzd5B",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=The%20Glass%20House%2C%20Nai%20Lert%20Park&query_place_id=ChIJ0VGCpJOf4jARtWOHAandf0o",
  },
  {
    name: "Web3 Devs",
    date: "Thursday 14 November",
    time: "16:30 - 23:00 GMT+7",
    location: "Gaysorn Tower (Gaysorn Village)",
    registrationLink: "https://lu.ma/fafkunao",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Gaysorn%20Tower%20%28Gaysorn%20Village%29&query_place_id=ChIJRcLFPgqf4jARQQzaVQXNFBs",
  },
  {
    name: "Injective Summit",
    date: "Friday 15 November",
    time: "10:00 - 17:00 GMT+7",
    location: "Four Seasons Hotel",
    registrationLink: "https://lu.ma/InjectiveSummit2024?pk=g-VmVnEWBnFdZxW9f",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Four%20Seasons%20Hotel%20Bangkok%20at%20Chao%20Phraya%20River&query_place_id=ChIJgf1Rnb-Y4jARaZXmSa-m7sU",
  },
  {
    name: "ETH Interoperability",
    date: "Saturday 16 November",
    time: "12:30 - 21:00 GMT+7",
    location: "GlowFish, Siam Paragon House",
    registrationLink: "https://lu.ma/interopforum?pk=g-8ZG84xXRzHaGwhl",
    mapLink:
      "https://www.google.com/maps/place/Siam+Patumwan+House/@13.7460257,100.5311391,17z/data=!4m6!3m5!1s0x30e29f81ad2815a3:0x5400cfebf32fc518!8m2!3d13.7474874!4d100.5306828!16s%2Fg%2F11kh4ttx9d!5m1!1e4?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D",
  },
];

// Helper function to get theme variation based on event index
const getThemeVariation = (index: number) => {
  const variations = [
    {
      accent: "frost1" as const,
      secondary: "frost4" as const,
      highlight: "aurora4" as const,
    },
    {
      accent: "frost2" as const,
      secondary: "aurora5" as const,
      highlight: "aurora3" as const,
    },
    {
      accent: "frost3" as const,
      secondary: "aurora2" as const,
      highlight: "aurora4" as const,
    },
    {
      accent: "frost4" as const,
      secondary: "aurora1" as const,
      highlight: "aurora5" as const,
    },
  ];

  return variations[index % variations.length];
};

// Enable Edge Runtime
export const config = {
  runtime: "edge",
};

export const app = new Frog<{ State: AppState }>({
  basePath: "/api",
  title: "DEVCON Side Events",
  initialState: {
    currentEventIndex: 0,
  },
  ui: { vars },
});

// Add an image handler for the initial frame
app.image("/initial", (c) => {
  return c.res({
    headers: {
      "Cache-Control": "public, max-age=0",
    },
    image: (
      <Box grow backgroundColor="background" padding="32">
        <VStack gap="8" alignItems="center">
          <Text
            color="frost1"
            size="16"
            tracking="2"
            weight="600"
            align="center"
          >
            DEVCON SIDE EVENTS
          </Text>

          <Heading
            color="text"
            size="48"
            align="center"
            weight="700"
            font="display"
          >
            {events[0].name}
          </Heading>

          <Text color="frost4" size="32" weight="600" align="center">
            {events[0].date}
          </Text>
        </VStack>
      </Box>
    ),
  });
});

app.frame("/", (c) => {
  const { buttonValue, deriveState } = c;
  const state = deriveState((previousState: AppState) => {
    if (buttonValue === "next") {
      previousState.currentEventIndex =
        (previousState.currentEventIndex + 1) % events.length;
    } else if (buttonValue === "prev") {
      previousState.currentEventIndex =
        (previousState.currentEventIndex - 1 + events.length) % events.length;
    }
  });

  // If no button has been pressed yet (initial state), use the image handler
  if (!buttonValue) {
    return c.res({
      image: "/initial",
      intents: [
        <Button value="next">Next ▶</Button>,
        <Button.Link href={events[0].registrationLink}>🎟 Ticket</Button.Link>,
        <Button.Link href={events[0].mapLink}>🗺 Map</Button.Link>,
      ],
    });
  }

  // For subsequent frames, use the dynamic text-based layout
  const currentIndex = state?.currentEventIndex ?? 0;
  const currentEvent = events[currentIndex];
  const theme = getThemeVariation(currentIndex);

  return c.res({
    image: (
      <Box grow backgroundColor="background" padding="32">
        <VStack gap="8" alignItems="center">
          <Text
            color={theme.accent}
            size="16"
            tracking="2"
            weight="600"
            align="center"
          >
            DEVCON SIDE EVENTS
          </Text>

          <Heading
            color="text"
            size="48"
            align="center"
            weight="700"
            font="display"
          >
            {currentEvent.name}
          </Heading>

          <Text color={theme.secondary} size="32" weight="600" align="center">
            {currentEvent.date}
          </Text>

          <Text color="textMuted" size="24" align="center">
            {currentEvent.time}
          </Text>

          <Box
            backgroundColor="backgroundAlt"
            padding="16"
            borderRadius="12"
            borderColor={theme.highlight}
            borderWidth="1"
          >
            <Text color="textMuted" size="20" align="center">
              {currentEvent.location}
            </Text>
          </Box>
        </VStack>
      </Box>
    ),
    intents: [
      <Button value="prev">◀ Previous</Button>,
      <Button.Link href={currentEvent.registrationLink}>🎟 Ticket</Button.Link>,
      <Button.Link href={currentEvent.mapLink}>🗺 Map</Button.Link>,
      <Button value="next">Next ▶</Button>,
    ],
  });
});

// Development handling
if (process.env.NODE_ENV === "development") {
  devtools(app, { serveStatic });
} else {
  devtools(app);
}

export const GET = handle(app);
export const POST = handle(app);
