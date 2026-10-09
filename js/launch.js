// Launch set — the first eight pieces of VCH's own brand on channel.
// Each statement is rendered twice: in Direction B (lead) and in Direction C (runner-up).
// Format: 1080x1080 Instagram square.

const LAUNCH_PIECES = [
  {
    id: "p1",
    kind: "slogan",
    text: "Your success is hiding in plain sight",
    caption: "Not a slogan we invented. Something we noticed. The companies with the strongest proof are the quietest about it.",
    layout: "typeMax",
    B: {bg:"var(--ground)", image:null},
    C: {bg:"var(--ground)", image:null, stamp:"VCH / THESIS"}
  },
  {
    id: "p2",
    kind: "strategy",
    text: "Find the earned expertise. Give it a microphone.",
    caption: "The strategy, in a sentence. Twenty-five years of answers plus a quiet room, held for long enough.",
    layout: "photoTop",
    B: {bg:"var(--ground)", image:"B2_hands_by_lamp.jpg"},
    C: {bg:"var(--ground)", image:"C1_shop_floor_wide.jpg", stamp:"EST. 1972"}
  },
  {
    id: "p3",
    kind: "values",
    text: "AI enhances. It does not replace.",
    caption: "The rule we work by. AI gives us leverage over archives and hours, not over people.",
    layout: "typeSplit",
    B: {bg:"var(--ground)", image:null},
    C: {bg:"var(--ground)", image:null, stamp:"RULE 01 / 03"}
  },
  {
    id: "p4",
    kind: "process",
    text: "The best interview is a long one, in a quiet room.",
    caption: "What we spend most of our time doing. Not fancy. Rare on purpose.",
    layout: "photoTop",
    B: {bg:"var(--ground)", image:"B3_nagra_still.jpg"},
    C: {bg:"var(--ground)", image:"C2_calloused_hands.jpg", stamp:"PROCESS 02 / 03"}
  },
  {
    id: "p5",
    kind: "pillar",
    text: "Vantage Studios. We give you a voice.",
    sub: "Authority. Build the record of your earned expertise.",
    caption: "Pillar one of three. The podcast, the long-form interview, the keynote.",
    layout: "pillar",
    pillarIndex: 1,
    B: {bg:"var(--ground)", image:null},
    C: {bg:"var(--ground)", image:null, stamp:"PILLAR 01 / 03"}
  },
  {
    id: "p6",
    kind: "pillar",
    text: "Vantage Creators. We build your network.",
    sub: "Impact. Put the record in front of the right rooms.",
    caption: "Pillar two of three. Collaborations, syndication, the member network.",
    layout: "pillar",
    pillarIndex: 2,
    B: {bg:"var(--ground)", image:null},
    C: {bg:"var(--ground)", image:null, stamp:"PILLAR 02 / 03"}
  },
  {
    id: "p7",
    kind: "pillar",
    text: "Vantage Solutions. We get you found.",
    sub: "Growth. AI search, SEO, distribution, measurement.",
    caption: "Pillar three of three. The compounding part. Where good decisions quietly become visible.",
    layout: "pillar",
    pillarIndex: 3,
    B: {bg:"var(--ground)", image:null},
    C: {bg:"var(--ground)", image:null, stamp:"PILLAR 03 / 03"}
  },
  {
    id: "p8",
    kind: "longgame",
    text: "Thirty years of earned answers. One decade invisible. Our move.",
    caption: "Why we exist. Our audience spent a career becoming right about something. The internet never found out. We change that.",
    layout: "photoSide",
    B: {bg:"var(--ground)", image:"B1_chiaroscuro_portrait.jpg"},
    C: {bg:"var(--ground)", image:"C3_brass_plate.jpg", stamp:"CHAPTER 01"}
  }
];

if (typeof module !== "undefined") module.exports = LAUNCH_PIECES;
