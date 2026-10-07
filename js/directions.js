// Direction data — content that drives every per-direction page.
// Each direction has: tokens (from JSON), hero stills, 9 IG tiles, YT thumb, YT banner, LinkedIn post,
// LinkedIn banner, blog hero, IG story, IG reel cover, principle, voice, DO/DON'T, motion stub.

const DIRECTIONS = [
  {
    code: "A",
    name: "Earned Editorial",
    principle: "We have the opinion we earned over 30 years",
    read: "Documentary classic. Ivory ground, Anton statements with a trailing period, Chivo body. One section colour per screen. One burnt-orange accent per piece. Reads as considered, grown-up, confident.",
    palette: [
      {name:"ivory",      hex:"#EFECE6"},
      {name:"soft-white", hex:"#F6F5F2"},
      {name:"stone",      hex:"#DBD8CF"},
      {name:"warm-grey",  hex:"#6C6964"},
      {name:"ink",        hex:"#202020"},
      {name:"accent",     hex:"#C35421"}
    ],
    type: {display:"Anton", body:"Chivo"},
    section_mark_html: '<span class="mark-sq"></span>',
    hero: "A1_expert_portrait.jpg",
    stills: ["A1_expert_portrait.jpg","A2_hands_drafting.jpg","A3_archive_folder.jpg"],
    doList: [
      "One trailing period on every Anton statement.",
      "One section colour per screen.",
      "Caption lives below the image, never over it.",
      "One burnt-orange accent per piece, never two."
    ],
    dontList: [
      "Never set Anton smaller than 72px.",
      "Never over-grade the images.",
      "Never let the accent compete with ink."
    ],
    // nine IG tiles: pattern = statement, photo, statement / photo, statement, photo / statement, photo, statement
    igTiles: [
      {kind:"statement", text:"Earned expertise."},
      {kind:"photo",     src:"A1_expert_portrait.jpg"},
      {kind:"statement", text:"Our clients built industries.", alt:true},
      {kind:"photo",     src:"A2_hands_drafting.jpg"},
      {kind:"statement", text:"Thirty years of answers.", field:true},
      {kind:"photo",     src:"A3_archive_folder.jpg"},
      {kind:"statement", text:"Give it a microphone."},
      {kind:"photo",     src:"A1_expert_portrait.jpg"},
      {kind:"statement", text:"Your success is hiding in plain sight.", alt:true}
    ],
    ytThumb: {kind:"photo", src:"A1_expert_portrait.jpg", text:"The expert nobody has heard"},
    ytBanner: {kind:"solid", text:"Vantage Creative House", sub:"We give you a voice. We build your network. We get you found."},
    liPost: {kind:"solid", text:"The best interview is a long one with a quiet room.", sub:"VCH Journal, no. 1"},
    liBanner: {kind:"solid", text:"We give earned expertise a microphone.", sub:"VCH"},
    blogHero: {kind:"photo", src:"A2_hands_drafting.jpg", text:"The archive is the strategy.", sub:"Finding the thirty-year opinion that only your head of R&D holds."},
    igStory: {kind:"photo", src:"A3_archive_folder.jpg", text:"One opinion, well-recorded."},
    igReel: {kind:"solid", text:"The quiet episode."},
    motion: {bg:"var(--ground)", fg:"var(--fg-ink)", accent:"var(--fg-accent)", text:"We give earned expertise a microphone"}
  },
  {
    code: "B",
    name: "Light and Silence",
    principle: "We see what matters",
    read: "Erin's cinematographer DNA on the brand. Near-black grounds, one practical warm source, teal shadow fields. Letter-spacing opens, type gets room, imagery earns the frame. Reads as serious, cinematic, confident without volume.",
    palette: [
      {name:"ground",     hex:"#141414"},
      {name:"ground-alt", hex:"#202020"},
      {name:"field",      hex:"#2A2724"},
      {name:"body",       hex:"#B2AFA7"},
      {name:"ink",        hex:"#EFECE6"},
      {name:"accent",     hex:"#C35421"}
    ],
    type: {display:"Anton (tracked wide)", body:"Chivo 300"},
    section_mark_html: '<span class="mark-bracket">[&nbsp;&nbsp;]</span>',
    hero: "B1_chiaroscuro_portrait.jpg",
    stills: ["B1_chiaroscuro_portrait.jpg","B2_hands_by_lamp.jpg","B3_nagra_still.jpg"],
    doList: [
      "Let shadow carry the frame.",
      "The practical is the only warm.",
      "Keep 70% of each image in shadow.",
      "Set type at a size that respects the silence."
    ],
    dontList: [
      "Never flat lighting.",
      "Never grade teal post-only — build it in-camera.",
      "Never fill the frame with light."
    ],
    igTiles: [
      {kind:"photo",     src:"B1_chiaroscuro_portrait.jpg"},
      {kind:"statement", text:"We see what matters."},
      {kind:"photo",     src:"B2_hands_by_lamp.jpg"},
      {kind:"statement", text:"Light with an opinion.", alt:true},
      {kind:"photo",     src:"B3_nagra_still.jpg"},
      {kind:"statement", text:"One practical. One voice.", field:true},
      {kind:"photo",     src:"B2_hands_by_lamp.jpg"},
      {kind:"statement", text:"Shadow is a choice."},
      {kind:"photo",     src:"B1_chiaroscuro_portrait.jpg"}
    ],
    ytThumb: {kind:"photo", src:"B1_chiaroscuro_portrait.jpg", text:"How one light tells a 30-year story"},
    ytBanner: {kind:"solid", text:"Vantage Creative House", sub:"Light with an opinion. Earned expertise, well-lit."},
    liPost: {kind:"photo", src:"B2_hands_by_lamp.jpg", text:"The best brief is one practical lamp."},
    liBanner: {kind:"solid", text:"We see what matters.", sub:"VCH"},
    blogHero: {kind:"photo", src:"B3_nagra_still.jpg", text:"The quietest room in the building.", sub:"Why we start with the thing that has already proven itself."},
    igStory: {kind:"photo", src:"B2_hands_by_lamp.jpg", text:"Threading film at midnight."},
    igReel: {kind:"photo", src:"B1_chiaroscuro_portrait.jpg", text:"One light, one voice."},
    motion: {bg:"#141414", fg:"#EFECE6", accent:"#C35421", text:"We see what matters"}
  },
  {
    code: "C",
    name: "Industrial Testimony",
    principle: "Earned by doing, documented",
    read: "For legacy manufacturing clients and their peers. Stone grounds, metal, dust, wood. Anton + JetBrains Mono used as a stamped-receipt second voice for dates and serials. Safety-orange appears only on the physical world (cone, hard-hat band), never on type. Reads as hard-won, documentary, specific.",
    palette: [
      {name:"ground",     hex:"#DBD8CF"},
      {name:"ground-alt", hex:"#C8C5BC"},
      {name:"field",      hex:"#A6A39C"},
      {name:"body",       hex:"#4A4845"},
      {name:"ink",        hex:"#1A1A1A"},
      {name:"accent",     hex:"#C35421"}
    ],
    type: {display:"Anton", body:"Chivo + JetBrains Mono"},
    section_mark_html: '<span class="mark-sq"></span>',
    hero: "C1_shop_floor_wide.jpg",
    stills: ["C1_shop_floor_wide.jpg","C2_calloused_hands.jpg","C3_brass_plate.jpg"],
    doList: [
      "Date-stamp every piece in mono.",
      "Treat mono as a receipt, not decoration.",
      "Include one physical artefact per frame.",
      "Let the floor be a floor."
    ],
    dontList: [
      "Never clean the floor.",
      "Never set data in Chivo.",
      "Never put the accent on type."
    ],
    igTiles: [
      {kind:"statement", text:"Serial 1972."},
      {kind:"photo",     src:"C3_brass_plate.jpg"},
      {kind:"statement", text:"Still running.", alt:true},
      {kind:"photo",     src:"C1_shop_floor_wide.jpg"},
      {kind:"statement", text:"The floor remembers.", field:true},
      {kind:"photo",     src:"C2_calloused_hands.jpg"},
      {kind:"statement", text:"Proof by Tuesday."},
      {kind:"photo",     src:"C3_brass_plate.jpg"},
      {kind:"statement", text:"Hands that know.", alt:true}
    ],
    ytThumb: {kind:"photo", src:"C1_shop_floor_wide.jpg", text:"52 years. Same shop. New voice."},
    ytBanner: {kind:"solid", text:"Vantage Creative House", sub:"Proof-driven stories for the companies that built the industry."},
    liPost: {kind:"photo", src:"C2_calloused_hands.jpg", text:"The dial indicator is the resume."},
    liBanner: {kind:"solid", text:"Earned by doing, documented.", sub:"VCH / 1972 → NOW"},
    blogHero: {kind:"photo", src:"C1_shop_floor_wide.jpg", text:"The quiet machine shop you never heard of.", sub:"How we found the story that lived two signatures deep in the archive."},
    igStory: {kind:"photo", src:"C3_brass_plate.jpg", text:"Serial 1972. Still running."},
    igReel: {kind:"photo", src:"C2_calloused_hands.jpg", text:"Hands that know."},
    motion: {bg:"#DBD8CF", fg:"#1A1A1A", accent:"#C35421", text:"Earned by doing, documented"}
  },
  {
    code: "D",
    name: "Studio Notebook",
    principle: "The process is the proof",
    read: "The looser, more human cut. Scanned paper, hand annotations over photos, contact sheets, test strips, Polaroids. Pale blue + stone + ivory + ink. Anton + Chivo + Caveat for a single hand-written line of marginalia. Reads as working, open, curious.",
    palette: [
      {name:"soft-white", hex:"#F6F5F2"},
      {name:"stone",      hex:"#DBD8CF"},
      {name:"pale-blue",  hex:"#B8D2D8"},
      {name:"warm-grey",  hex:"#6C6964"},
      {name:"ink",        hex:"#202020"},
      {name:"accent",     hex:"#C35421"}
    ],
    type: {display:"Anton", body:"Chivo + Caveat (marginalia)"},
    section_mark_html: '<span class="mark-sq" style="transform:rotate(2deg);"></span>',
    hero: "D1_contact_sheet.jpg",
    stills: ["D1_contact_sheet.jpg","D2_lighting_diagram.jpg","D3_polaroid_stack.jpg"],
    doList: [
      "Use Caveat only for marginalia, one line maximum.",
      "Let paper texture show through.",
      "Date everything.",
      "Pale blue is the paper tape, nothing more."
    ],
    dontList: [
      "Never use Caveat for the headline.",
      "Never over-handwrite.",
      "Never clean out imperfections."
    ],
    igTiles: [
      {kind:"photo",     src:"D1_contact_sheet.jpg"},
      {kind:"statement", text:"The process is the proof."},
      {kind:"photo",     src:"D2_lighting_diagram.jpg"},
      {kind:"statement", text:"Draft 03.", alt:true},
      {kind:"photo",     src:"D3_polaroid_stack.jpg"},
      {kind:"statement", text:"Keep the notes.", field:true},
      {kind:"photo",     src:"D1_contact_sheet.jpg"},
      {kind:"statement", text:"Working, open."},
      {kind:"photo",     src:"D2_lighting_diagram.jpg"}
    ],
    ytThumb: {kind:"photo", src:"D2_lighting_diagram.jpg", text:"Our rough draft is the lecture"},
    ytBanner: {kind:"solid", text:"Vantage Creative House", sub:"Working in the open. Keep the notes."},
    liPost: {kind:"photo", src:"D1_contact_sheet.jpg", text:"The best deck is the contact sheet we almost threw out."},
    liBanner: {kind:"solid", text:"The process is the proof.", sub:"VCH / notebook"},
    blogHero: {kind:"photo", src:"D3_polaroid_stack.jpg", text:"Why we kept the Polaroid.", sub:"On the discipline of showing what did not make it, and the trust it earns."},
    igStory: {kind:"photo", src:"D2_lighting_diagram.jpg", text:"4B pencil. Pale blue tape."},
    igReel: {kind:"photo", src:"D1_contact_sheet.jpg", text:"Draft 03 is still a draft."},
    motion: {bg:"#F6F5F2", fg:"#202020", accent:"#C35421", text:"The process is the proof"}
  },
  {
    code: "E",
    name: "Signal Over Noise",
    principle: "We do not need to shout",
    read: "The most restrained of the five. Massive Anton statements on ivory, nothing else. One data point per post. Imagery is rare, and when it earns its place it is one detail. Section mark is a tiny filled square. Reads as patient, certain, Dieter Rams meets a quiet newsroom.",
    palette: [
      {name:"ivory",      hex:"#EFECE6"},
      {name:"soft-white", hex:"#F6F5F2"},
      {name:"warm-grey",  hex:"#4A4845"},
      {name:"ink",        hex:"#1A1A1A"},
      {name:"body",       hex:"#4A4845"},
      {name:"accent",     hex:"#202020"}
    ],
    type: {display:"Anton (tightest)", body:"Chivo"},
    section_mark_html: '<span class="mark-sq-xs"></span>',
    hero: "E1_hand_palm.jpg",
    stills: ["E1_hand_palm.jpg","E2_chisel.jpg"],
    doList: [
      "Give the statement the whole canvas.",
      "Set Anton at 240px or larger for hero statements.",
      "Let whitespace do the work.",
      "One idea per surface."
    ],
    dontList: [
      "Never add decoration.",
      "Never put more than one idea on one canvas.",
      "Never use colour as colour, only as weight."
    ],
    igTiles: [
      {kind:"statement", text:"Thirty years."},
      {kind:"statement", text:"One answer.", alt:true},
      {kind:"photo",     src:"E1_hand_palm.jpg"},
      {kind:"statement", text:"We do not need to shout."},
      {kind:"statement", text:"Hiding in plain sight.", field:true},
      {kind:"statement", text:"Vantage."},
      {kind:"photo",     src:"E2_chisel.jpg"},
      {kind:"statement", text:"Earned.", alt:true},
      {kind:"statement", text:"Recorded."}
    ],
    ytThumb: {kind:"solid", text:"We do not need to shout"},
    ytBanner: {kind:"solid", text:"VANTAGE", sub:"We do not need to shout."},
    liPost: {kind:"solid", text:"The quietest person in the room has been doing this for 30 years."},
    liBanner: {kind:"solid", text:"We do not need to shout.", sub:"VCH"},
    blogHero: {kind:"solid", text:"On restraint.", sub:"A short note on why we do not use the exclamation mark."},
    igStory: {kind:"solid", text:"One idea per canvas."},
    igReel: {kind:"solid", text:"Vantage."},
    motion: {bg:"#EFECE6", fg:"#1A1A1A", accent:"#1A1A1A", text:"We do not need to shout"}
  }
];

if (typeof module !== "undefined") module.exports = DIRECTIONS;
