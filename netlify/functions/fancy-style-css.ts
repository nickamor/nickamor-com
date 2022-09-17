import { Handler } from "@netlify/functions";

const colors = [
  { bg: "#ffbf00", contrast: "#36454f", normal: "#36454f" },
  { bg: "#424242", contrast: "#76ff03", normal: "#b5b5b5" },
  { bg: "#76ff03", contrast: "#424242", normal: "#424242" },
  { bg: "#36454f", contrast: "#ffbf00", normal: "#f5f0f0" },
  { bg: "#251351", contrast: "#e2d7d3", normal: "#b5b5b5" },
  { bg: "#ff3800", contrast: "#030708", normal: "#030708" },
  { bg: "#2b64a9", contrast: "#fffcff", normal: "#b5b5b5" },
  { bg: "#cbd4c2", contrast: "#19647e", normal: "#50514f" },
  { bg: "#ede8e8", contrast: "#71cfeb", normal: "#b5b5b5" },
  { bg: "#33302b", contrast: "#d40000", normal: "#b5b5b5" },
  { bg: "#393d3f", contrast: "#62929e", normal: "#b5b5b5" },
  { bg: "#002395", contrast: "#f77f00", normal: "#b5b5b5" },
  { bg: "#15e6cd", contrast: "#403d39", normal: "#363636" },
  { bg: "#1d1f21", contrast: "#c5c8c6", normal: "#373b41" },
  { bg: "#272822", contrast: "#fff", normal: "#66d9ef" },
  { bg: "#fff", contrast: "#00f", normal: "#000" },
  { bg: "#fff", contrast: "#f0f", normal: "#000" },
  { bg: "#fff", contrast: "#000", normal: "#000" },
  { bg: "#000", contrast: "#f00", normal: "#fff" },
  { bg: "#000", contrast: "#0f0", normal: "#fff" },
  { bg: "#000", contrast: "#ff0", normal: "#fff" },
  { bg: "#000", contrast: "#0ff", normal: "#fff" },
  { bg: "#000", contrast: "#fff", normal: "#fff" },
];

function random(set) {
  const n = Math.floor(Math.random() * set.length);
  return set[n];
}

function generateStylesheet(colors) {
  const c = random(colors);
  return `:root { --bg: ${c.bg}; --contrast: ${c.contrast}; --normal: ${c.normal}; }`;
}

const handler: Handler = async (event, context) => {
  const response = {
    statusCode: 200,
    body: "",
    headers: {
      "Set-Cookie": "seen-it=yeah",
      "Content-Type": "text/css",
    },
  };

  const reqCookie = event.headers["cookie"];

  if (typeof reqCookie === "string" && reqCookie.includes("seen-it=yeah")) {
    response.body = generateStylesheet(colors);
  }

  return response;
};

export { handler };
