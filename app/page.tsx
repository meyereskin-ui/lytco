"use client";

/* ───────────────────────── CONTENT ───────────────────────── */

// Set to an email address to show the "Get in Touch" button in the contact section.
const CONTACT_EMAIL = "";

// Set to false to hide the licence status pill on each licence card.
const SHOW_LICENCE_STATUS = true;

const nav = [
  { label: "Project", href: "#project" },
  { label: "Licences", href: "#licences" },
  { label: "Partner", href: "#partner" },
  { label: "Contact", href: "#contact", accent: true },
];

const licences = [
  { id: "43719-HQ-SEL", commodities: ["Cobalt", "Copper", "Gold", "Iron Ore"] },
  { id: "43722-HQ-SEL", commodities: ["Cobalt", "Copper", "Gold", "Iron Ore"] },
  { id: "43737-HQ-SEL", commodities: ["Cobalt", "Copper", "Gold", "Iron Ore"] },
  { id: "43720-HQ-SEL", commodities: ["Copper", "Gold", "Iron Ore", "Silver"] },
  { id: "43725-HQ-SEL", commodities: ["Cobalt", "Copper", "Gold", "Iron Ore"] },
];

const LICENCE_TYPE = "Small Scale Exploration Licence";
const LICENCE_STATUS = "Application Deferred";

const minerals = [
  { symbol: "Cu", name: "Copper", tag: "Primary Focus", note: "The anchor commodity of the platform. Feedstock from an identified third-party copper project, supplemented by regional producers." },
  { symbol: "Au", name: "Gold", tag: "Licensed", note: "Listed on all five licences across the Kapyanga area of interest." },
  { symbol: "Co", name: "Cobalt", tag: "Licensed", note: "Listed on four of the five licences." },
  { symbol: "Fe", name: "Iron Ore", tag: "Licensed", note: "Listed on all five licences." },
  { symbol: "Ag", name: "Silver", tag: "Licensed", note: "Listed on licence 43720-HQ-SEL." },
];

const pillars = [
  {
    num: "01",
    title: "Anchor Feedstock",
    body: "Long-term ore supply from an identified third-party copper mining project provides the base load for commercial-scale processing.",
  },
  {
    num: "02",
    title: "Regional Aggregation",
    body: "Supplementary ore aggregated from additional regional producers, giving smaller operators a route to processing and market.",
  },
  {
    num: "03",
    title: "Commercial Processing",
    body: "An integrated copper processing development, forming the first stage of a regional processing and refining platform.",
  },
  {
    num: "04",
    title: "Downstream Beneficiation",
    body: "A platform designed to support future downstream beneficiation, refining, and wider regional industrial development.",
  },
];

/* ───────────────────────── PAGE ───────────────────────── */

export default function LytcoHome() {
  return (
    <div
      id="top"
      style={{
        minHeight: "100vh",
        background: "#080808",
        color: "white",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=DM+Sans:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root { --cu: #c97d4e; --cu-soft: rgba(201,125,78,0.12); --cu-line: rgba(201,125,78,0.3); }

        /* HEADER */
        .lx-header {
          position: sticky; top: 0; z-index: 100;
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          background: rgba(8,8,8,0.75);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .lx-header-inner {
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          padding: 22px 40px; max-width: 1400px; margin: 0 auto;
        }
        .lx-logo { text-decoration: none; color: white; }
        .lx-logo-text { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 300; letter-spacing: 0.16em; }
        .lx-logo-sub { font-size: 9px; text-transform: uppercase; letter-spacing: 0.3em; color: rgba(255,255,255,0.35); margin-top: 2px; }
        .lx-nav { display: flex; gap: 6px; list-style: none; }
        .lx-nav a {
          display: block; padding: 8px 18px; border-radius: 100px;
          font-size: 12.5px; text-decoration: none; letter-spacing: 0.02em;
          border: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.7); transition: all 0.2s;
        }
        .lx-nav a:hover { border-color: rgba(255,255,255,0.3); color: white; background: rgba(255,255,255,0.04); }
        .lx-nav a.accent { background: var(--cu); color: #080808; border-color: var(--cu); font-weight: 500; }
        .lx-nav a.accent:hover { opacity: 0.85; }

        /* HERO */
        .hero { position: relative; padding: 120px 40px 100px; max-width: 1400px; margin: 0 auto; }
        .hero-eyebrow { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 32px; }
        .hero-eyebrow-line { width: 32px; height: 1px; background: var(--cu); flex-shrink: 0; }
        .hero-eyebrow-text { font-size: 10px; text-transform: uppercase; letter-spacing: 0.4em; color: var(--cu); }
        .hero-title {
          font-family: 'Cormorant Garamond', serif; font-size: clamp(64px, 9vw, 148px); font-weight: 300;
          line-height: 0.92; letter-spacing: -0.02em; margin-bottom: 48px;
        }
        .hero-title em { font-style: italic; color: rgba(255,255,255,0.45); }
        .hero-body { display: flex; align-items: flex-end; justify-content: space-between; gap: 60px; }
        .hero-desc { max-width: 500px; font-size: 16px; line-height: 1.8; color: rgba(255,255,255,0.55); font-weight: 300; }
        .hero-ctas { display: flex; gap: 12px; flex-shrink: 0; flex-wrap: wrap; }
        .btn-cu, .btn-ghost {
          border-radius: 100px; padding: 14px 28px; font-size: 13px; cursor: pointer;
          font-family: 'DM Sans', sans-serif; text-decoration: none; display: inline-block; transition: all 0.2s;
        }
        .btn-cu { background: var(--cu); color: #080808; font-weight: 500; border: 1px solid var(--cu); }
        .btn-cu:hover { opacity: 0.85; }
        .btn-ghost { color: rgba(255,255,255,0.7); border: 1px solid rgba(255,255,255,0.18); }
        .btn-ghost:hover { border-color: rgba(255,255,255,0.4); color: white; }

        .section-rule { height: 1px; background: rgba(255,255,255,0.07); margin: 0 40px; }
        .section { padding: 80px 40px; max-width: 1400px; margin: 0 auto; }
        .section-header { display: flex; align-items: baseline; justify-content: space-between; gap: 24px; margin-bottom: 40px; flex-wrap: wrap; }
        .section-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.38em; color: rgba(255,255,255,0.3); }
        .section-title { font-family: 'Cormorant Garamond', serif; font-size: 36px; font-weight: 300; color: rgba(255,255,255,0.9); letter-spacing: -0.01em; }

        /* ABOUT */
        .about-section { display: grid; grid-template-columns: 1fr 2fr; gap: 80px; align-items: start; }
        .about-stat-block { display: flex; flex-direction: column; gap: 40px; }
        .about-stat { border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px; }
        .about-stat-num { font-family: 'Cormorant Garamond', serif; font-size: 52px; font-weight: 300; line-height: 1; margin-bottom: 6px; }
        .about-stat-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.25em; color: rgba(255,255,255,0.35); line-height: 1.6; }
        .about-right h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(32px, 3.5vw, 52px); font-weight: 300; line-height: 1.2; letter-spacing: -0.01em; margin-bottom: 28px; }
        .about-right p { font-size: 16px; line-height: 1.85; color: rgba(255,255,255,0.55); font-weight: 300; max-width: 600px; margin-bottom: 16px; }

        /* PILLARS */
        .pillar-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 48px; }
        .pillar-card { border-radius: 20px; border: 1px solid rgba(255,255,255,0.07); background: rgba(255,255,255,0.025); padding: 32px 28px; transition: border-color 0.3s, background 0.3s; }
        .pillar-card:hover { border-color: var(--cu-line); background: rgba(255,255,255,0.04); }
        .pillar-num { font-family: 'Cormorant Garamond', serif; font-size: 48px; font-weight: 300; color: var(--cu); line-height: 1; margin-bottom: 20px; }
        .pillar-card h3 { font-size: 15px; font-weight: 500; margin-bottom: 12px; letter-spacing: -0.01em; }
        .pillar-card p { font-size: 13.5px; line-height: 1.75; color: rgba(255,255,255,0.45); font-weight: 300; }

        /* MINERALS */
        .minerals-grid { display: grid; grid-template-columns: 1.6fr 1fr 1fr; gap: 16px; }
        .mineral-card {
          border-radius: 20px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.03);
          padding: 32px 28px; display: flex; flex-direction: column; gap: 8px;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.3s, box-shadow 0.35s;
        }
        .mineral-card:hover { transform: translateY(-4px); border-color: var(--cu-line); box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
        .mineral-card.primary { grid-row: span 2; background: linear-gradient(160deg, rgba(201,125,78,0.14), rgba(255,255,255,0.02) 60%); border-color: var(--cu-line); }
        .mineral-symbol { font-family: 'Cormorant Garamond', serif; font-size: 13px; color: var(--cu); letter-spacing: 0.25em; text-transform: uppercase; }
        .mineral-name { font-family: 'Cormorant Garamond', serif; font-size: 40px; font-weight: 300; line-height: 1; }
        .mineral-card.primary .mineral-name { font-size: 72px; margin-top: auto; }
        .mineral-note { font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-top: 8px; font-weight: 300; }
        .mineral-tag {
          display: inline-block; margin-top: 12px; align-self: flex-start; padding: 5px 14px; border-radius: 100px;
          background: var(--cu-soft); border: 1px solid var(--cu-line);
          font-size: 11px; color: var(--cu); letter-spacing: 0.08em; text-transform: uppercase;
        }
        .mineral-tag.muted { background: transparent; border-color: rgba(255,255,255,0.12); color: rgba(255,255,255,0.45); }

        /* MAPS */
        .maps-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .map-card { border-radius: 20px; border: 1px solid rgba(255,255,255,0.08); overflow: hidden; background: rgba(255,255,255,0.02); }
        .map-frame { width: 100%; aspect-ratio: 4 / 3; border: 0; display: block; filter: invert(0.92) hue-rotate(180deg) brightness(0.9) contrast(0.9) saturate(0.6); transition: filter 0.4s; }
        .map-card:hover .map-frame { filter: invert(0.92) hue-rotate(180deg) brightness(1) contrast(0.95) saturate(0.8); }
        .map-caption { padding: 18px 22px; border-top: 1px solid rgba(255,255,255,0.07); }
        .map-caption-title { font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.8); margin-bottom: 4px; }
        .map-caption-sub { font-size: 12px; color: rgba(255,255,255,0.35); }

        /* LICENCES */
        .licence-list { display: flex; flex-direction: column; border-top: 1px solid rgba(255,255,255,0.08); }
        .licence-row {
          display: grid; grid-template-columns: 200px 1fr auto; gap: 32px; align-items: center;
          padding: 26px 4px; border-bottom: 1px solid rgba(255,255,255,0.08); transition: background 0.25s;
        }
        .licence-row:hover { background: rgba(255,255,255,0.02); }
        .licence-id { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 300; letter-spacing: 0.01em; }
        .licence-meta { display: flex; flex-direction: column; gap: 10px; }
        .licence-type { font-size: 12px; color: rgba(255,255,255,0.4); letter-spacing: 0.04em; }
        .licence-commodities { display: flex; flex-wrap: wrap; gap: 6px; }
        .chip { padding: 4px 12px; border-radius: 100px; border: 1px solid rgba(255,255,255,0.12); font-size: 11px; color: rgba(255,255,255,0.6); letter-spacing: 0.04em; }
        .chip.cu { border-color: var(--cu-line); color: var(--cu); background: var(--cu-soft); }
        .licence-right { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; text-align: right; }
        .licence-holder { font-size: 11px; text-transform: uppercase; letter-spacing: 0.18em; color: rgba(255,255,255,0.35); }
        .status-pill { padding: 5px 14px; border-radius: 100px; font-size: 11px; letter-spacing: 0.06em; border: 1px solid rgba(255,255,255,0.14); color: rgba(255,255,255,0.55); }

        /* PARTNER */
        .partner-card {
          border-radius: 28px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02);
          padding: 56px; display: grid; grid-template-columns: 1fr 1.4fr; gap: 64px; align-items: start;
        }
        .partner-name { font-family: 'Cormorant Garamond', serif; font-size: clamp(34px, 3.5vw, 52px); font-weight: 300; line-height: 1.1; margin: 20px 0 24px; }
        .partner-facts { display: flex; flex-direction: column; gap: 18px; }
        .partner-fact { border-top: 1px solid rgba(255,255,255,0.08); padding-top: 14px; }
        .partner-fact-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.3em; color: rgba(255,255,255,0.3); margin-bottom: 6px; }
        .partner-fact-value { font-size: 14px; color: rgba(255,255,255,0.8); line-height: 1.6; }
        .partner-body p { font-size: 15.5px; line-height: 1.85; color: rgba(255,255,255,0.55); font-weight: 300; margin-bottom: 16px; }

        /* CONTACT */
        .contact-inner {
          border-radius: 28px; border: 1px solid rgba(255,255,255,0.08);
          background: radial-gradient(120% 140% at 100% 100%, rgba(201,125,78,0.12), rgba(255,255,255,0.02) 55%);
          padding: 64px; display: flex; align-items: flex-end; justify-content: space-between; gap: 48px;
        }
        .contact-inner h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(28px, 3vw, 48px); font-weight: 300; letter-spacing: -0.01em; line-height: 1.15; max-width: 560px; margin-bottom: 16px; }
        .contact-inner p { font-size: 15px; color: rgba(255,255,255,0.45); line-height: 1.75; max-width: 480px; font-weight: 300; }

        /* FOOTER */
        .lx-footer { border-top: 1px solid rgba(255,255,255,0.07); padding: 32px 40px; max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
        .footer-logo { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 300; color: rgba(255,255,255,0.4); letter-spacing: 0.08em; }
        .footer-copy { font-size: 11px; color: rgba(255,255,255,0.2); letter-spacing: 0.05em; }

        /* RESPONSIVE */
        @media (max-width: 1100px) {
          .pillar-grid { grid-template-columns: repeat(2, 1fr); }
          .about-section { grid-template-columns: 1fr; gap: 48px; }
          .about-stat-block { flex-direction: row; flex-wrap: wrap; gap: 24px; }
          .about-stat { flex: 1 1 180px; }
          .partner-card { grid-template-columns: 1fr; gap: 32px; }
        }
        @media (max-width: 820px) {
          .lx-header-inner { padding: 16px 16px; }
          .lx-nav li:not(:last-child) { display: none; }
          .hero { padding: 72px 16px 64px; }
          .hero-body { flex-direction: column; align-items: flex-start; gap: 32px; }
          .hero-eyebrow-text { letter-spacing: 0.25em; }
          .section { padding: 56px 16px; }
          .section-rule { margin: 0 16px; }
          .minerals-grid { grid-template-columns: 1fr 1fr; }
          .mineral-card.primary { grid-column: span 2; grid-row: auto; }
          .mineral-card.primary .mineral-name { font-size: 56px; margin-top: 12px; }
          .maps-grid { grid-template-columns: 1fr; }
          .licence-row { grid-template-columns: 1fr; gap: 14px; padding: 22px 0; }
          .licence-right { align-items: flex-start; text-align: left; flex-direction: row; flex-wrap: wrap; }
          .partner-card, .contact-inner { padding: 32px 24px; }
          .contact-inner { flex-direction: column; align-items: flex-start; }
          .lx-footer { padding: 28px 16px; }
        }
        @media (max-width: 520px) {
          .pillar-grid, .minerals-grid { grid-template-columns: 1fr; }
          .mineral-card.primary { grid-column: auto; }
        }
      `}</style>

      {/* HEADER */}
      <header className="lx-header">
        <div className="lx-header-inner">
          <a href="#top" className="lx-logo">
            <div className="lx-logo-text">LYTCO</div>
            <div className="lx-logo-sub">Mineral Resources · Zambia</div>
          </a>
          <nav>
            <ul className="lx-nav">
              {nav.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={item.accent ? "accent" : ""}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">
          <div className="hero-eyebrow-line" />
          <span className="hero-eyebrow-text">Zambia · Central Province · Copper Processing · Critical Minerals</span>
        </div>
        <h1 className="hero-title">
          Copper,<br />
          <em>processed in Zambia.</em>
        </h1>
        <div className="hero-body">
          <p className="hero-desc">
            LYTCO Mineral Resources Limited is developing an integrated, commercial-scale copper
            processing platform in Mumbwa District, anchored by long-term feedstock from an identified
            third-party copper mining project and supplemented by ore aggregated from regional producers.
          </p>
          <div className="hero-ctas">
            <a href="#project" className="btn-cu">The Project</a>
            <a href="#licences" className="btn-ghost">Licences</a>
          </div>
        </div>
      </section>

      <div className="section-rule" />

      {/* ABOUT */}
      <section id="project" className="section about-section">
        <div className="about-stat-block">
          <p className="section-label">The Project</p>
          {[
            { num: "Phase 1", label: "Kapyanga Area of Interest" },
            { num: "5", label: "Small Scale Exploration Licences" },
            { num: "100%", label: "LYTCO Interest in Each Licence" },
          ].map((s) => (
            <div key={s.label} className="about-stat">
              <div className="about-stat-num">{s.num}</div>
              <div className="about-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="about-right">
          <h2>A regional platform for ore aggregation, processing, and value addition.</h2>
          <p>
            The Project is an integrated commercial-scale copper processing development. Long-term
            feedstock from an identified third-party copper mining project provides its anchor, with
            supplementary ore aggregated from additional regional producers.
          </p>
          <p>
            LYTCO intends to develop a regional ore aggregation and processing platform that can support
            future downstream beneficiation and broader regional industrial development.
          </p>
          <p>
            The Project is designed to establish the first stage of a strategically significant regional
            copper processing and refining platform, supporting Zambia&apos;s industrialisation and
            value-addition objectives and the diversification of critical minerals supply chains.
          </p>
        </div>
      </section>

      <div className="section-rule" />

      {/* PILLARS */}
      <section className="section">
        <p className="section-label">Platform Design</p>
        <div className="pillar-grid">
          {pillars.map((p) => (
            <div key={p.num} className="pillar-card">
              <div className="pillar-num">{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-rule" />

      {/* MINERALS */}
      <section className="section">
        <div className="section-header">
          <span className="section-label">Licensed Commodities</span>
          <span className="section-title">Copper First</span>
        </div>
        <div className="minerals-grid">
          {minerals.map((m, i) => (
            <div key={m.symbol} className={`mineral-card${i === 0 ? " primary" : ""}`}>
              <div className="mineral-symbol">{m.symbol}</div>
              <div className="mineral-name">{m.name}</div>
              <p className="mineral-note">{m.note}</p>
              <span className={`mineral-tag${i === 0 ? "" : " muted"}`}>{m.tag}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="section-rule" />

      {/* LOCATION */}
      <section id="location" className="section">
        <div className="section-header">
          <span className="section-label">Phase 1 · Kapyanga</span>
          <span className="section-title">Location</span>
        </div>
        <div className="maps-grid">
          <div className="map-card">
            <iframe
              className="map-frame"
              title="Zambia regional map"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=21.9%2C-18.2%2C33.8%2C-8.1&layer=mapnik&marker=-14.98%2C27.06"
            />
            <div className="map-caption">
              <div className="map-caption-title">Regional Context — Zambia</div>
              <div className="map-caption-sub">Central Province · marker indicates Mumbwa</div>
            </div>
          </div>
          <div className="map-card">
            <iframe
              className="map-frame"
              title="Mumbwa District map"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=26.2%2C-15.6%2C27.9%2C-14.35&layer=mapnik&marker=-14.98%2C27.06"
            />
            <div className="map-caption">
              <div className="map-caption-title">Area of Interest — Mumbwa District</div>
              <div className="map-caption-sub">Kapyanga · Mumbwa District · Central Province</div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-rule" />

      {/* LICENCES */}
      <section id="licences" className="section">
        <div className="section-header">
          <span className="section-label">Mining Cadastre</span>
          <span className="section-title">Licence Portfolio</span>
        </div>
        <div className="licence-list">
          {licences.map((l) => (
            <div key={l.id} className="licence-row">
              <div className="licence-id">{l.id}</div>
              <div className="licence-meta">
                <div className="licence-type">{LICENCE_TYPE}</div>
                <div className="licence-commodities">
                  {l.commodities.map((c) => (
                    <span key={c} className={`chip${c === "Copper" ? " cu" : ""}`}>{c}</span>
                  ))}
                </div>
              </div>
              <div className="licence-right">
                <span className="licence-holder">LYTCO · 100%</span>
                {SHOW_LICENCE_STATUS && <span className="status-pill">{LICENCE_STATUS}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-rule" />

      {/* PARTNER */}
      <section id="partner" className="section">
        <div className="partner-card">
          <div>
            <p className="section-label">Project Partner</p>
            <h2 className="partner-name">Konige Mining &amp; Exploration</h2>
            <div className="partner-facts">
              <div className="partner-fact">
                <div className="partner-fact-label">Ownership</div>
                <div className="partner-fact-value">Zambian-owned private company, incorporated December 2019</div>
              </div>
              <div className="partner-fact">
                <div className="partner-fact-label">Licence</div>
                <div className="partner-fact-value">Large-Scale Exploration, Mining &amp; Processing Licence, Mumbwa District</div>
              </div>
              <div className="partner-fact">
                <div className="partner-fact-label">Base</div>
                <div className="partner-fact-value">Nangoma area, Mumbwa District</div>
              </div>
            </div>
          </div>
          <div className="partner-body">
            <p>
              LYTCO is partnering on the Project with Konige Mining &amp; Exploration Limited, a
              Zambian-owned company focused on modern mineral exploration, rapid geological de-risking,
              and disciplined project advancement.
            </p>
            <p>
              Konige operates across the mining value chain, from early-stage exploration through to
              production, applying advanced exploration technologies and data-driven decision making to
              discover and develop economically viable resources in Mumbwa District.
            </p>
            <a href="https://konigemining.com/" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ marginTop: "12px" }}>
              Visit konigemining.com ↗
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="contact-inner">
          <div>
            <p className="section-label" style={{ marginBottom: "20px" }}>Contact</p>
            <h2>Built for investors, partners, and regional producers.</h2>
            <p>
              We welcome conversations on investment, partnership, offtake, and ore supply as we
              advance the first stage of Zambia&apos;s regional copper processing platform.
            </p>
          </div>
          {CONTACT_EMAIL && (
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-cu" style={{ flexShrink: 0 }}>
              Get in Touch
            </a>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="lx-footer">
        <span className="footer-logo">LYTCO</span>
        <span className="footer-copy">© {new Date().getFullYear()} LYTCO Mineral Resources Limited. All rights reserved.</span>
      </footer>
    </div>
  );
}
