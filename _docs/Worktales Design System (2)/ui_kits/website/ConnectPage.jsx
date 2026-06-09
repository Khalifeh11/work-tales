// Worktales website kit — Culture & Leadership detail page (03 / Connect).
function ConnectPage({ onNavigate }) {
  const back = (e) => { e.preventDefault(); onNavigate("home"); window.scrollTo({ top: 0 }); };
  const toContact = (e) => { e.preventDefault(); onNavigate("home"); setTimeout(() => { const el = document.getElementById("contact"); if (el) el.scrollIntoView(); }, 60); };

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="hero-bg"></div>
        <div className="hero-grid-bg"></div>
        <div className="container">
          <div className="page-hero-grid">
            <div className="page-hero-copy">
              <a href="#" className="back" onClick={back}><i className="fas fa-arrow-left"></i> All services</a>
              <div className="eyebrow"><span>03 / Connect</span></div>
              <h1>Culture &amp; Leadership: alignment between people, purpose, and <span className="accent">ways of working.</span></h1>
              <p className="lede">Organizations don&rsquo;t succeed through talent alone. As teams expand across functions, geographies, and cultures, the ability to align people, purpose, and ways of working becomes decisive &mdash; so Connect strengthens culture, fosters collaboration, and helps people feel meaningfully aligned with where they work.</p>
              <div className="hero-ctas">
                <a href="#" className="btn btn-primary" onClick={(e) => e.preventDefault()}>Request program brochures <i className="fas fa-arrow-right"></i></a>
                <a href="#" className="btn btn-ghost" onClick={back}>Explore all services</a>
              </div>
            </div>

            <aside className="hire-card manifesto-card" aria-hidden="true">
              <div className="hire-card-glow"></div>
              <span className="hire-card-eyebrow">The Worktales view</span>
              <p className="manifesto-q">Culture is <span className="accent">not accidental.</span></p>
              <span className="manifesto-rule"></span>
              <p className="manifesto-sub">High-performing organizations build it deliberately &mdash; aligning behaviors, values, and ways of working with where the business is going.</p>
            </aside>
          </div>

          <div className="hero-meta hero-proof">
            <div className="hero-meta-item"><div className="num">Official</div><div className="lbl">Insights Discovery partner</div></div>
            <div className="hero-meta-item"><div className="num">4 colours</div><div className="lbl">A shared team language</div></div>
            <div className="hero-meta-item"><div className="num">Discussion-led</div><div className="lbl">Interactive sessions</div></div>
          </div>
        </div>
      </section>

      {/* WHAT WE STRENGTHEN — four effectiveness areas */}
      <section className="pillars section-padding">
        <div className="container">
          <div className="pillars-intro">
            <div className="section-title">What we strengthen</div>
            <h2>Four ways we help your people <span className="accent">work better together.</span></h2>
          </div>
          <div className="connect-grid">
            {EFFECTIVENESS.map((e) => (
              <article className="pillar-card" key={e.name}>
                <span className="pillar-icon" aria-hidden="true"><i className={`fas ${e.icon}`}></i></span>
                <h3 className="pillar-name">{e.name}</h3>
                <div className="pillar-subtitle">{e.subtitle}</div>
                <p className="pillar-desc connect-desc">{e.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CONNECT — bento */}
      <section className="section-padding">
        <div className="container">
          <div className="pillars-intro">
            <div className="section-title">Why connect with Worktales</div>
            <h2>Culture work with a <span className="accent">strategist&rsquo;s mindset.</span></h2>
          </div>
          <div className="whyb-grid">
            <article className="whyb-card col-4">
              <span className="whyb-ico" aria-hidden="true"><i className="fas fa-comments"></i></span>
              <h3>Engaging Sessions</h3>
              <p>Our sessions are interactive and discussion-based &mdash; encouraging reflection, dialogue, and peer learning.</p>
            </article>

            <article className="whyb-card col-8 is-accent">
              <span className="whyb-ico" aria-hidden="true"><i className="fas fa-circle-nodes"></i></span>
              <h3>Insights Discovery Partnership</h3>
              <p>Through our partnership with Insights Discovery, we use globally recognized psychometric tools to strengthen self-awareness, communication, and team collaboration.</p>
            </article>

            <article className="whyb-card col-4 is-compact">
              <span className="whyb-ico" aria-hidden="true"><i className="fas fa-bullhorn"></i></span>
              <h3>Communication Excellence</h3>
            </article>

            <article className="whyb-card col-4">
              <span className="whyb-ico" aria-hidden="true"><i className="fas fa-link"></i></span>
              <h3>Connection Formats</h3>
              <p>Delivered through workshops, team sessions, leadership offsites, and engagement initiatives.</p>
            </article>

            <article className="whyb-card col-4 is-accent">
              <span className="whyb-ico" aria-hidden="true"><i className="fas fa-bullseye"></i></span>
              <h3>Strategy-Driven Culture Work</h3>
              <p>We approach culture and leadership with a strategist&rsquo;s mindset &mdash; aligning behaviors, values, and ways of working with organizational objectives.</p>
            </article>
          </div>
        </div>
      </section>

      {/* INSIGHTS DISCOVERY */}
      <section className="pillars section-padding">
        <div className="container">
          <div className="pillars-intro">
            <div className="section-title">Our Insights Discovery partnership</div>
            <h2>A shared language for how people <span className="accent">think, work, and connect.</span></h2>
          </div>

          <div className="insights-grid">
            <div className="insights-copy">
              <p>A psychometric learning tool grounded in Carl Jung&rsquo;s psychology of personality types, Insights Discovery builds self-awareness and strengthens workplace relationships. A simple four-colour model explains behavior and communication styles.</p>
              <p>Participants gain insight into their strengths, motivations, communication and management style, and their impact on others.</p>
              <p className="insights-lead"><span className="lead-strong">The model becomes a shared language</span> that improves collaboration and builds stronger teams.</p>
            </div>

            <div className="energy-grid" role="list" aria-label="The four colour energies">
              {ENERGIES.map((c) => (
                <div className="energy-card" role="listitem" key={c.name} style={{ "--e": c.color }}>
                  <div className="energy-head">
                    <span className="energy-dot" aria-hidden="true"></span>
                    <span className="energy-name">{c.name}</span>
                  </div>
                  <ul className="energy-traits">
                    {c.traits.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="howit-head">
            <div className="section-title">How it works</div>
            <h2 className="howit-title">From a short questionnaire to a <span className="accent">shared way of working.</span></h2>
          </div>
          <ol className="howit-grid">
            {HOWIT.map((s, i) => (
              <li className="howit-step" key={s}>
                <span className="howit-num">{String(i + 1).padStart(2, "0")}</span>
                <p>{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <div className="section-title">Let&rsquo;s talk</div>
          <h2>Ready to build a culture <span className="accent">on purpose?</span></h2>
          <p>Tell us where alignment is breaking down &mdash; across leadership, teams, or change. We&rsquo;ll design a Connect program around it, using Insights Discovery to give your people a shared language.</p>
          <div className="btns">
            <a href="#" className="btn btn-primary" onClick={toContact}>Schedule a call <i className="fas fa-arrow-right"></i></a>
            <a href="#" className="btn btn-ghost" onClick={(e) => e.preventDefault()}>Request program brochures</a>
          </div>
        </div>
      </section>
    </main>
  );
}

const EFFECTIVENESS = [
  { icon: "fa-people-group", name: "Team Building & Effectiveness", subtitle: "Collaboration & communication",
    desc: "Builds stronger collaboration by helping team members understand each other\u2019s working styles, improve communication, and leverage diverse strengths within the team." },
  { icon: "fa-user-tie", name: "Leadership Effectiveness", subtitle: "Impact & self-awareness",
    desc: "Helps leaders understand their impact on others, adapt their leadership style, and lead teams with greater clarity, awareness, and intention." },
  { icon: "fa-arrows-rotate", name: "Change Effectiveness", subtitle: "Resilience & transitions",
    desc: "Helps individuals understand their response to change and build the awareness and resilience needed to navigate transitions effectively." },
  { icon: "fa-handshake", name: "Sales Effectiveness", subtitle: "Customer styles & trust",
    desc: "Helps sales professionals recognize different customer styles and adapt their communication to build trust and communicate value more effectively." },
];

const ENERGIES = [
  { name: "Cool Blue", color: "#3B82C4", traits: ["cautious", "precise", "deliberate", "questioning", "formal"] },
  { name: "Fiery Red", color: "#D5392E", traits: ["competitive", "demanding", "determined", "strong-willed", "purposeful"] },
  { name: "Earth Green", color: "#5BA13C", traits: ["caring", "encouraging", "sharing", "patient", "relaxed"] },
  { name: "Sunshine Yellow", color: "#F0B429", traits: ["sociable", "dynamic", "demonstrative", "enthusiastic", "persuasive"] },
];

const HOWIT = [
  "Participants complete a short online questionnaire on their work preferences and behaviors.",
  "Responses generate a personalized profile based on the four-colour energy model.",
  "Results are explored through engaging, facilitator-led workshops built for reflection.",
  "Participants learn to recognize energy styles in themselves and others — and adapt.",
  "The framework flexes to leadership, team, communication, or sales objectives.",
];

window.ConnectPage = ConnectPage;
