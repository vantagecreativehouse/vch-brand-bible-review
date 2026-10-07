#!/usr/bin/env node
// Builds every HTML page in the presentation from the shared data.
// Pages:
//   index.html         — cover
//   principles.html    — voice / fame / taste / do & don't baseline
//   system.html        — base tokens, type, palette, section marks
//   dir-A.html .. dir-E.html — per direction, with brand board + mockups
//   comparison.html    — all five IG grids side-by-side, hero stills side-by-side
//   decisions.html     — the three questions Erin needs to answer

const fs = require("fs");
const path = require("path");
const DIRECTIONS = require("./js/directions.js");

const OUT = __dirname;

function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

const HEAD = (title, active) => `<!doctype html><html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} — VCH Visual Brand Bible</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Chivo:wght@300;400;500;600&family=Caveat:wght@500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/tokens.css">
<link rel="stylesheet" href="/css/base.css">
</head><body>
<nav class="site-nav">
  <a class="mark" href="/index.html">Vantage <b>Creative House</b></a>
  <ul>
    <li><a class="item ${active==='principles'?'active':''}" href="/principles.html">Principles</a></li>
    <li><a class="item ${active==='system'?'active':''}" href="/system.html">System</a></li>
    <li><a class="item ${active==='A'?'active':''}" href="/dir-A.html">A</a></li>
    <li><a class="item ${active==='B'?'active':''}" href="/dir-B.html">B</a></li>
    <li><a class="item ${active==='C'?'active':''}" href="/dir-C.html">C</a></li>
    <li><a class="item ${active==='D'?'active':''}" href="/dir-D.html">D</a></li>
    <li><a class="item ${active==='E'?'active':''}" href="/dir-E.html">E</a></li>
    <li><a class="item ${active==='compare'?'active':''}" href="/comparison.html">Compare</a></li>
    <li><a class="item ${active==='decisions'?'active':''}" href="/decisions.html">Decisions</a></li>
  </ul>
</nav>`;

const FOOT = () => `<footer class="site">
  <div>VCH Visual Brand Bible / 2026-10-07 night run / Clio</div>
  <div>Password gated / Not for publication</div>
</footer>
</body></html>`;

// ---------- INDEX ----------
function indexPage(){
  return HEAD("Cover") + `
<main style="padding:0;max-width:none;">
  <section style="min-height:92vh;padding:var(--sp-9) var(--sp-8);display:grid;grid-template-rows:auto 1fr auto;">
    <div class="meta">VCH / Night run 2026-10-07 / Prepared for Erin by Clio</div>
    <h1 class="page-title" style="font-size:clamp(96px,14vw,232px);margin-top:var(--sp-6);">The visual<br>brand bible</h1>
    <div class="grid g-3" style="align-items:end;gap:var(--sp-6);">
      <div class="b-body" style="color:var(--warm-grey);max-width:40ch;">
        Built off the design system skeleton in the <code style="font-family:var(--mono);">vch-design-system</code> repo and the words in <code style="font-family:var(--mono);">voice.md</code>, <code style="font-family:var(--mono);">fame-system.md</code> and <code style="font-family:var(--mono);">taste.md</code>. Nothing here is live. Nothing publishes.
      </div>
      <div class="b-body" style="color:var(--warm-grey);max-width:40ch;">
        Five directions. Each with its own palette, type pairing, imagery rule, section mark and across-platform render. Pick one, pick a hybrid of two, or ask us to go deeper on any.
      </div>
      <div class="meta" style="text-align:right;">
        <div><b>14</b> hero stills generated</div>
        <div><b>45</b> mockups</div>
        <div><b>5</b> motion loops</div>
        <div><b>5162 → 5159</b> Higgsfield credits</div>
      </div>
    </div>
  </section>
  <section style="padding:var(--sp-7) var(--sp-8);border-top:1px solid var(--stone);">
    <div class="section-head" style="margin-bottom:var(--sp-5);"><h2 style="font-size:40px;">The five directions.</h2><span class="label">Hover a card.</span></div>
    <div class="grid g-5" style="grid-template-columns:repeat(5,1fr);gap:var(--sp-3);">
      ${DIRECTIONS.map(d=>`
        <a href="/dir-${d.code}.html" data-dir="${d.code}" style="text-decoration:none;color:inherit;display:block;border:1px solid var(--stone);background:var(--ground);">
          <div style="padding:var(--sp-5);aspect-ratio:3/4;display:flex;flex-direction:column;justify-content:space-between;color:var(--fg-ink);">
            <div class="meta" style="color:var(--fg-body);"><b style="color:var(--fg-ink);">${d.code}</b> &nbsp; ${esc(d.name)}</div>
            <div class="h-display" style="font-size:36px;color:var(--fg-ink);line-height:0.9;">${esc(d.principle)}</div>
            <div class="meta" style="color:var(--fg-body);">${esc(d.type.display)}<br>${esc(d.type.body)}</div>
          </div>
        </a>
      `).join("")}
    </div>
  </section>
</main>` + FOOT();
}

// ---------- PRINCIPLES ----------
function principlesPage(){
  return HEAD("Principles","principles") + `
<main>
  <div class="meta">01 / Principles</div>
  <h1 class="page-title">The things that are true<br>in every direction</h1>
  <p class="page-subtitle">These do not change between A and E. The directions are five answers to the same question.</p>

  <section class="section">
    <div class="section-head"><h2>Voice.</h2><span class="label">voice.md</span></div>
    <div class="grid g-2" style="gap:var(--sp-7);">
      <div class="b-body" style="font-size:18px;">
        We. Not I.<br>
        Quietly confident.<br>
        Short lines, one thought per line.<br>
        No em dashes between words.<br>
        No exclamation marks.<br>
        No corporate speak.<br>
        AI enhances. It does not replace.
      </div>
      <div>
        <div class="meta" style="margin-bottom:var(--sp-3);">The gate — before anything leaves the folder.</div>
        <ol class="b-body" style="padding-left:1.2em;line-height:1.6;">
          <li>Does this reinforce that earned expertise deserves earned recognition?</li>
          <li>Would a smart warm friend who wants you to do well say this?</li>
          <li>Could anyone have written this? If yes, rewrite until only we could have.</li>
        </ol>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-head"><h2>Fame system.</h2><span class="label">fame-system.md</span></div>
    <div class="b-lede">
      We are the compounding growth partner for legacy companies with real expertise but low digital visibility. Not a production company. Not a marketing agency.
    </div>
    <div class="grid g-3" style="margin-top:var(--sp-6);gap:var(--sp-5);">
      <div><div class="meta" style="color:var(--burnt-orange);">Vantage Studios</div><div class="b-body" style="margin-top:var(--sp-2);"><b>We give you a voice.</b> Authority.</div></div>
      <div><div class="meta" style="color:var(--burnt-orange);">Vantage Creators</div><div class="b-body" style="margin-top:var(--sp-2);"><b>We build your network.</b> Impact.</div></div>
      <div><div class="meta" style="color:var(--burnt-orange);">Vantage Solutions</div><div class="b-body" style="margin-top:var(--sp-2);"><b>We get you found.</b> Growth.</div></div>
    </div>
    <div class="b-body" style="margin-top:var(--sp-6);font-size:14px;color:var(--warm-grey);">Slogan: <b>"Your success is hiding in plain sight."</b></div>
  </section>

  <section class="section">
    <div class="section-head"><h2>Erin's taste.</h2><span class="label">taste.md</span></div>
    <div class="grid g-2" style="gap:var(--sp-7);">
      <div class="b-body" style="font-size:17px;">
        His signature, in his words:<br>
        <i>"The thing that makes my work mine is my use of light, texture, and constant flowing movement."</i><br><br>
        Home base: darker, edgier, rich and warm but also cool and dark. Natural teal-and-orange built in camera, not in post.
      </div>
      <div>
        <div class="meta" style="margin-bottom:var(--sp-3);">North stars</div>
        <ul class="b-body" style="padding-left:1.2em;line-height:1.65;">
          <li>Greig Fraser — texture, rich palette, monumental low-key.</li>
          <li>Roger Deakins — monochromatic schemes layered with light and shadow.</li>
          <li>Chivo Lubezki — reds, blues and skin tones together.</li>
          <li>Marcell Rév — colour creating depth, movement creating surprise.</li>
          <li>Caravaggio — one source, deep shadow, drama.</li>
        </ul>
        <div class="meta" style="margin-top:var(--sp-5);">The anti</div>
        <div class="b-body">Flat, opinion-less light. Light must have an opinion.</div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-head"><h2>The AI slop test.</h2><span class="label">applies to every generated image</span></div>
    <div class="b-lede">Texture. If the frame does not have skin texture, fabric weave, metal patina, paper fibre or hair edge, it does not leave the folder. Real light gives things texture. If it does not, it is slop.</div>
  </section>

  <section class="section">
    <div class="section-head"><h2>Must not look like.</h2><span class="label">the universal avoid-list</span></div>
    <div class="grid g-3" style="gap:var(--sp-5);">
      <div class="b-body"><b>AI-slop IG.</b><br>Plastic skin, floating hands, perfect symmetry, no texture, no shadow with weight.</div>
      <div class="b-body"><b>Agency gradient-mesh.</b><br>Big heavy sans-serif on a purple-pink gradient. "Transforming narratives." Not us.</div>
      <div class="b-body"><b>Hype startup aesthetic.</b><br>All caps. All emojis. Growth-hack voice. We are the opposite of this.</div>
      <div class="b-body"><b>Canva-template energy.</b><br>Stock photos, round-cornered shapes, free-font pairings, pastel backgrounds.</div>
      <div class="b-body"><b>Crypto-maximalist.</b><br>Pure black, neon green, pixel noise. Not legacy. Not us.</div>
      <div class="b-body"><b>Studio-for-studios.</b><br>Portfolio-site minimalism so refined it says nothing. The failure mode of good taste.</div>
    </div>
  </section>
</main>` + FOOT();
}

// ---------- SYSTEM ----------
function systemPage(){
  const colors = [
    {n:"ivory",       h:"#EFECE6"},
    {n:"soft-white",  h:"#F6F5F2"},
    {n:"stone",       h:"#DBD8CF"},
    {n:"warm-grey",   h:"#6C6964"},
    {n:"ink",         h:"#202020"},
    {n:"pale-blue",   h:"#B8D2D8"},
    {n:"muted-teal",  h:"#80A7AF"},
    {n:"burnt-orange",h:"#C35421"}
  ];
  return HEAD("System","system") + `
<main>
  <div class="meta">02 / System</div>
  <h1 class="page-title">The pieces every direction shares</h1>
  <p class="page-subtitle">Tokens, type, grid, section mark. Lives in the repo as JSON and CSS once the direction is locked.</p>

  <section class="section">
    <div class="section-head"><h2>Palette.</h2><span class="label">base.json</span></div>
    <div class="grid" style="grid-template-columns:repeat(8,1fr);gap:var(--sp-3);">
      ${colors.map(c=>`
        <div>
          <div style="height:120px;background:${c.h};border:1px solid var(--stone);"></div>
          <div class="meta" style="margin-top:var(--sp-2);"><b>${c.n}</b></div>
          <div class="meta" style="opacity:0.6;">${c.h}</div>
        </div>
      `).join("")}
    </div>
    <div class="b-body" style="margin-top:var(--sp-5);max-width:60ch;">
      Each direction uses a subset of this palette. One section colour per screen. The accent appears once per piece.
    </div>
  </section>

  <section class="section">
    <div class="section-head"><h2>Type.</h2><span class="label">display, body, data, hand</span></div>
    <div class="grid g-2" style="gap:var(--sp-7);">
      <div>
        <div class="meta" style="margin-bottom:var(--sp-3);">Display — Anton, uppercase</div>
        <div class="h-display" style="font-size:120px;color:var(--ink);">Earned expertise</div>
        <div class="meta" style="margin-top:var(--sp-3);opacity:0.6;">Trailing period in burnt-orange. Letter-spacing from 0.0em (E) to 0.08em (B).</div>
      </div>
      <div>
        <div class="meta" style="margin-bottom:var(--sp-3);">Body — Chivo</div>
        <div class="b-lede" style="font-size:20px;color:var(--ink);max-width:40ch;">We spent last month helping a 30-year manufacturing company record their first podcast. Not because podcasts are magic. Because their head of R&amp;D has 25 years of answers that nobody outside the building has ever heard.</div>
        <div class="meta" style="margin-top:var(--sp-5);margin-bottom:var(--sp-2);">Data — JetBrains Mono</div>
        <div class="meta" style="font-size:14px;color:var(--ink);"><b>SERIAL 1972 / SHOP 03 / 2026-10-07</b></div>
        <div class="meta" style="margin-top:var(--sp-5);margin-bottom:var(--sp-2);">Hand — Caveat (marginalia only, direction D)</div>
        <div style="font-family:var(--hand);font-size:34px;color:var(--ink);">draft 03 — keep the strip</div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-head"><h2>Section marks.</h2><span class="label">one per direction</span></div>
    <div class="grid g-5" style="grid-template-columns:repeat(5,1fr);gap:var(--sp-5);">
      ${DIRECTIONS.map(d=>`
        <div data-dir="${d.code}" style="padding:var(--sp-5);background:var(--ground);color:var(--fg-ink);border:1px solid var(--stone);">
          <div style="font-size:40px;line-height:1;">${d.section_mark_html}<span style="font-family:var(--display);text-transform:uppercase;letter-spacing:var(--display-tracking);">${d.code}</span></div>
          <div class="meta" style="margin-top:var(--sp-3);color:var(--fg-body);">${esc(d.name)}</div>
        </div>
      `).join("")}
    </div>
  </section>

  <section class="section">
    <div class="section-head"><h2>Grid.</h2><span class="label">12 col, 24 gutter, 48 margin</span></div>
    <div style="background:var(--soft-white);padding:var(--sp-5);border:1px solid var(--stone);">
      <div class="grid g-12" style="gap:12px;">
        ${Array.from({length:12}).map((_,i)=>`<div style="height:60px;background:${i===0||i===11?'var(--burnt-orange)':'var(--stone)'};opacity:${i===0||i===11?0.9:0.5};"></div>`).join("")}
      </div>
      <div class="meta" style="margin-top:var(--sp-3);">1440 max, 48 margin, 24 gutter, 12 columns. Mobile = 4 columns, 16 gutter, 24 margin.</div>
    </div>
  </section>

  <section class="section">
    <div class="section-head"><h2>Imagery baseline.</h2><span class="label">applies to every direction</span></div>
    <div class="b-lede">Light must have an opinion. Textured skin, hair edges, fabric weave, metal patina, paper fibre. Real materials. The AI slop test: if a frame does not pass texture, it does not leave the folder.</div>
  </section>
</main>` + FOOT();
}

// ---------- MOCKUP BUILDERS ----------
function tileHTML(t, imgBase){
  if(t.kind === "photo"){
    return `<div class="ig-tile photo" style="background-image:url('${imgBase}/${t.src}');"></div>`;
  }
  const cls = ["ig-tile","statement"];
  if(t.alt) cls.push("alt");
  if(t.field) cls.push("field");
  return `<div class="${cls.join(" ")}"><div class="t">${esc(t.text)}</div></div>`;
}

function brandBoardHTML(d, imgBase){
  return `
    <div class="brand-board" data-dir="${d.code}">
      <div class="left">
        <div class="wordmark">Vantage ${d.code === 'E' ? '' : 'Creative House'}</div>
        <div class="principle">${esc(d.principle)}</div>
        <div class="meta-lines">
          <div class="ml"><b>Direction ${d.code}</b> &nbsp;·&nbsp; ${esc(d.name)}</div>
          <div class="ml"><b>Display</b> &nbsp;·&nbsp; ${esc(d.type.display)}</div>
          <div class="ml"><b>Body</b> &nbsp;·&nbsp; ${esc(d.type.body)}</div>
          <div class="ml"><b>Section mark</b> &nbsp;·&nbsp; ${d.section_mark_html}</div>
        </div>
      </div>
      <div class="right">
        <div class="palette">
          ${d.palette.map(p=>`<div class="chip" data-name="${p.name} / ${p.hex}" style="background:${p.hex};"></div>`).join("")}
        </div>
        <div class="type">
          <div class="d">${esc(d.principle)}</div>
          <div class="b">${esc(d.read)}</div>
          <div class="m">01 / brand board · 02 / imagery rule · 03 / section mark · 04 / do and don't</div>
        </div>
        <div class="rules">
          <div class="r">
            <h4>Do</h4>
            <ul>${d.doList.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
          </div>
          <div class="r">
            <h4>Don't</h4>
            <ul>${d.dontList.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
          </div>
        </div>
      </div>
    </div>`;
}

function heroWallHTML(d, imgBase){
  return `
    <div class="grid g-3" style="gap:var(--sp-3);">
      ${d.stills.map(s=>`<div style="aspect-ratio:1/1;background-image:url('${imgBase}/${s}');background-size:cover;background-position:center;border:1px solid var(--fg-field);"></div>`).join("")}
    </div>`;
}

function ytThumbHTML(d, imgBase){
  const t = d.ytThumb;
  if(t.kind === "photo") return `<div class="yt-thumb photo" style="background-image:url('${imgBase}/${t.src}');"><div class="t">${esc(t.text)}</div></div>`;
  return `<div class="yt-thumb"><div class="t">${esc(t.text)}</div></div>`;
}
function ytBannerHTML(d){
  const b = d.ytBanner;
  return `<div class="yt-banner"><div class="safe"><div class="t">${esc(b.text)}</div><div class="b">${esc(b.sub)}</div></div></div>`;
}
function liPostHTML(d, imgBase){
  const p = d.liPost;
  if(p.kind === "photo") return `<div class="li-post photo" style="background-image:url('${imgBase}/${p.src}');color:var(--ivory);"><div class="t">${esc(p.text)}</div><div class="sub">${esc(p.sub || 'VCH')}</div></div>`;
  return `<div class="li-post"><div class="t">${esc(p.text)}</div><div class="sub">${esc(p.sub || 'VCH')}</div></div>`;
}
function liBannerHTML(d){
  const b = d.liBanner;
  return `<div class="li-banner"><div class="t">${esc(b.text)}</div><div class="meta">${esc(b.sub)}</div></div>`;
}
function blogHeroHTML(d, imgBase){
  const b = d.blogHero;
  if(b.kind === "photo") return `<div class="blog-hero photo" style="background-image:url('${imgBase}/${b.src}');color:var(--ivory);"><div><div class="t">${esc(b.text)}</div><div class="sub">${esc(b.sub)}</div></div></div>`;
  return `<div class="blog-hero"><div><div class="t">${esc(b.text)}</div><div class="sub">${esc(b.sub)}</div></div></div>`;
}
function igStoryHTML(d, imgBase){
  const s = d.igStory;
  if(s.kind === "photo") return `<div class="ig-story photo" style="background-image:url('${imgBase}/${s.src}');"><div class="t">${esc(s.text)}</div><div class="foot">@vantagecreativehouse</div></div>`;
  return `<div class="ig-story"><div class="t">${esc(s.text)}</div><div class="foot">@vantagecreativehouse</div></div>`;
}
function igReelHTML(d, imgBase){
  const s = d.igReel;
  if(s.kind === "photo") return `<div class="ig-reel photo" style="background-image:url('${imgBase}/${s.src}');"><div class="t">${esc(s.text)}</div></div>`;
  return `<div class="ig-reel"><div class="t">${esc(s.text)}</div></div>`;
}
function motionHTML(d){
  // In-browser 5s loop. Text wipes in, period pops accent, square mark fades, repeats.
  return `
    <div class="motion-anim" style="background:${d.motion.bg};color:${d.motion.fg};">
      <div class="motion-sq" style="background:${d.motion.accent};"></div>
      <div class="motion-text">
        <span class="motion-line">${esc(d.motion.text.toUpperCase())}</span><span class="motion-dot" style="color:${d.motion.accent};">.</span>
      </div>
      <div class="motion-foot" style="color:${d.motion.fg};opacity:0.5;">VCH / ${d.code}</div>
    </div>`;
}

// ---------- DIR PAGE ----------
function dirPage(d){
  const imgBase = "/img/directions";
  return HEAD(`Direction ${d.code}: ${d.name}`, d.code) + `
<main data-dir="${d.code}" style="background:var(--ground);color:var(--fg-ink);">
  <div class="meta" style="color:var(--fg-body);">Direction ${d.code} / 05</div>
  <h1 class="page-title" style="color:var(--fg-ink);">${esc(d.principle)}</h1>
  <p class="page-subtitle" style="color:var(--fg-body);">${esc(d.read)}</p>

  <section class="section">
    <div class="section-head"><h2>Brand board.</h2><span class="label">1920 × 1080</span></div>
    ${brandBoardHTML(d, imgBase)}
  </section>

  <section class="section">
    <div class="section-head"><h2>Imagery.</h2><span class="label">${d.stills.length} hero stills · Higgsfield gpt_image_2_5</span></div>
    ${heroWallHTML(d, imgBase)}
  </section>

  <section class="section">
    <div class="section-head"><h2>Instagram grid.</h2><span class="label">1080 × 1080 × 9 tiles, as the grid</span></div>
    <div style="display:flex;gap:var(--sp-7);align-items:flex-start;flex-wrap:wrap;">
      <div class="ig-grid" style="max-width:720px;">
        ${d.igTiles.map(t=>tileHTML(t, imgBase)).join("")}
      </div>
      <div style="flex:1;min-width:280px;">
        <div class="meta" style="color:var(--fg-body);margin-bottom:var(--sp-3);">Mockup only</div>
        <div class="b-body" style="color:var(--fg-body);">Nine tiles arranged to show how the ${esc(d.name)} language reads at a glance on a profile. Every statement ends in a period. The accent, when it appears, appears once.</div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-head"><h2>Instagram story.</h2><span class="label">1080 × 1920</span></div>
    <div style="display:flex;gap:var(--sp-6);align-items:flex-start;">
      ${igStoryHTML(d, imgBase)}
      ${igReelHTML(d, imgBase)}
      <div style="flex:1;max-width:420px;">
        <div class="meta" style="color:var(--fg-body);margin-bottom:var(--sp-3);">Left: static story · Right: reel cover</div>
        <div class="b-body" style="color:var(--fg-body);">Reel cover text sits inside the safe centre so the IG grid crop still reads.</div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-head"><h2>YouTube thumbnail.</h2><span class="label">1280 × 720</span></div>
    ${ytThumbHTML(d, imgBase)}
  </section>

  <section class="section">
    <div class="section-head"><h2>YouTube banner.</h2><span class="label">2560 × 1440 (TV safe centre 1546 × 423)</span></div>
    ${ytBannerHTML(d)}
  </section>

  <section class="section">
    <div class="section-head"><h2>LinkedIn single post.</h2><span class="label">1200 × 627</span></div>
    ${liPostHTML(d, imgBase)}
  </section>

  <section class="section">
    <div class="section-head"><h2>LinkedIn banner.</h2><span class="label">1584 × 396</span></div>
    ${liBannerHTML(d)}
  </section>

  <section class="section">
    <div class="section-head"><h2>Blog hero.</h2><span class="label">1920 × 900</span></div>
    ${blogHeroHTML(d, imgBase)}
  </section>

  <section class="section">
    <div class="section-head"><h2>Motion.</h2><span class="label">1080 × 1920 · 5s · text + colour</span></div>
    <div class="motion-card">
      ${motionHTML(d)}
    </div>
  </section>
</main>` + FOOT();
}

// ---------- COMPARISON ----------
function comparisonPage(){
  return HEAD("Comparison","compare") + `
<main>
  <div class="meta">03 / Comparison</div>
  <h1 class="page-title">The five, side by side</h1>
  <p class="page-subtitle">Grids, palettes, hero stills, section marks. Easier to pick when they share the room.</p>

  <section class="section">
    <div class="section-head"><h2>Instagram grids.</h2><span class="label">all five, same scale</span></div>
    <div class="grid" style="grid-template-columns:repeat(5,1fr);gap:var(--sp-5);">
      ${DIRECTIONS.map(d=>`
        <div data-dir="${d.code}">
          <div class="meta" style="margin-bottom:var(--sp-2);"><b>${d.code}</b> &nbsp; ${esc(d.name)}</div>
          <div class="ig-grid" style="max-width:none;">
            ${d.igTiles.map(t=>tileHTML(t, "/img/directions")).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  </section>

  <section class="section">
    <div class="section-head"><h2>Palettes.</h2></div>
    <div class="grid" style="grid-template-columns:repeat(5,1fr);gap:var(--sp-5);">
      ${DIRECTIONS.map(d=>`
        <div>
          <div class="meta" style="margin-bottom:var(--sp-2);"><b>${d.code}</b> &nbsp; ${esc(d.name)}</div>
          <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:4px;height:72px;">
            ${d.palette.map(p=>`<div style="background:${p.hex};border:1px solid var(--stone);"></div>`).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  </section>

  <section class="section">
    <div class="section-head"><h2>Hero stills.</h2></div>
    <div class="grid" style="grid-template-columns:repeat(5,1fr);gap:var(--sp-5);">
      ${DIRECTIONS.map(d=>`
        <div>
          <div class="meta" style="margin-bottom:var(--sp-2);"><b>${d.code}</b> &nbsp; ${esc(d.name)}</div>
          <div style="aspect-ratio:4/5;background-image:url('/img/directions/${d.hero}');background-size:cover;background-position:center;border:1px solid var(--stone);"></div>
        </div>
      `).join("")}
    </div>
  </section>

  <section class="section">
    <div class="section-head"><h2>Blog heroes.</h2></div>
    <div style="display:grid;gap:var(--sp-5);">
      ${DIRECTIONS.map(d=>`
        <div data-dir="${d.code}">
          <div class="meta" style="margin-bottom:var(--sp-2);"><b>${d.code}</b> &nbsp; ${esc(d.name)}</div>
          ${blogHeroHTML(d, "/img/directions")}
        </div>
      `).join("")}
    </div>
  </section>
</main>` + FOOT();
}

// ---------- DECISIONS ----------
function decisionsPage(){
  return HEAD("Decisions","decisions") + `
<main>
  <div class="meta">04 / Decisions</div>
  <h1 class="page-title">Three decisions for the morning</h1>
  <p class="page-subtitle">The smallest set of answers we need to carry the brand into real pieces.</p>

  <section class="section">
    <div class="section-head"><h2>01. Which direction.</h2><span class="label">one, or a hybrid of two</span></div>
    <div class="b-lede">A, B, C, D or E. Hybrid is fine, say which two and which is the body — for example "B lead, A for the longer essays."</div>
    <div class="grid g-5" style="grid-template-columns:repeat(5,1fr);gap:var(--sp-3);margin-top:var(--sp-6);">
      ${DIRECTIONS.map(d=>`
        <a data-dir="${d.code}" href="/dir-${d.code}.html" style="text-decoration:none;color:inherit;padding:var(--sp-5);background:var(--ground);color:var(--fg-ink);border:1px solid var(--stone);display:block;">
          <div class="meta" style="color:var(--fg-body);"><b style="color:var(--fg-ink);">${d.code}</b> &nbsp; ${esc(d.name)}</div>
          <div class="h-display" style="font-size:24px;color:var(--fg-ink);line-height:0.95;margin-top:var(--sp-3);">${esc(d.principle)}</div>
        </a>
      `).join("")}
    </div>
  </section>

  <section class="section">
    <div class="section-head"><h2>02. The logo lockup.</h2><span class="label">do we draft or do you provide</span></div>
    <div class="b-lede">Right now the system uses a square section mark + "Vantage Creative House" set in Anton. No standalone mark. If we are drafting a lockup, we propose 3 options tomorrow night (a square mark + wordmark, a monogram, a seal). If you have a lockup already, drop it into 00_Inbox and we build around it.</div>
  </section>

  <section class="section">
    <div class="section-head"><h2>03. First piece to publish.</h2><span class="label">once a direction is locked</span></div>
    <div class="b-lede">We think it is a short LinkedIn post about the thesis of VCH ("earned expertise, well-recorded") landed in the picked direction. One statement, one piece of proof. Agree, or name a different first piece and we start there.</div>
  </section>

  <section class="section">
    <div class="section-head"><h2>Everything else that stays open.</h2><span class="label">not blocking</span></div>
    <ul class="b-body" style="padding-left:1.2em;line-height:1.7;">
      <li>Fonts: Google Fonts hosting for now (Anton, Chivo, JetBrains Mono, Caveat). Move to self-hosted if you want. Not blocking.</li>
      <li>Imagery licence: everything shown tonight is generated for review only, logged in state/credits.jsonl. Publishable imagery will be commissioned or shot once a direction is locked.</li>
      <li>Reference landscape: COMPETITORS and REFERENCES notes are in 07_Research/brand/ for a quick read.</li>
    </ul>
  </section>
</main>` + FOOT();
}

// ---------- WRITE ----------
fs.writeFileSync(path.join(OUT, "index.html"),         indexPage());
fs.writeFileSync(path.join(OUT, "principles.html"),    principlesPage());
fs.writeFileSync(path.join(OUT, "system.html"),        systemPage());
for(const d of DIRECTIONS) fs.writeFileSync(path.join(OUT, `dir-${d.code}.html`), dirPage(d));
fs.writeFileSync(path.join(OUT, "comparison.html"),    comparisonPage());
fs.writeFileSync(path.join(OUT, "decisions.html"),     decisionsPage());

console.log("Wrote:", fs.readdirSync(OUT).filter(f=>f.endsWith(".html")).sort().join(", "));
