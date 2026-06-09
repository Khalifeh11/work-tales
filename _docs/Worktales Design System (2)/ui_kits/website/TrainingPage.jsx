// Worktales website kit — Training & Development detail page (02 / Build).
function TrainingPage({ onNavigate }) {
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
              <div className="eyebrow"><span>02 / Build</span></div>
              <h1>Training &amp; Development: capability that <span className="accent">keeps pace with the work.</span></h1>
              <p className="lede">Industries are evolving faster than traditional skills frameworks &mdash; roles are changing, technologies are advancing, and organizations must continuously strengthen the capabilities of their people. We design and deliver tailored training programs built around real performance gaps and aligned with your business strategy.</p>
              <div className="hero-ctas">
                <a href="#" className="btn btn-primary" onClick={(e) => e.preventDefault()}>Request program brochures <i className="fas fa-arrow-right"></i></a>
                <a href="#" className="btn btn-ghost" onClick={back}>Explore all services</a>
              </div>
            </div>

            <aside className="hire-card format-card" aria-hidden="true">
              <div className="hire-card-glow"></div>
              <div className="hire-card-head">
                <span className="hire-card-eyebrow">Program formats</span>
                <span className="hire-card-title">Delivered the way your teams learn</span>
              </div>
              <ul className="format-list">
                {FORMATS.map((f) => (
                  <li key={f.name}>
                    <span className="fmt-ico" aria-hidden="true"><i className={`fas ${f.icon}`}></i></span>
                    <span className="fmt-body"><span className="fmt-name">{f.name}</span><span className="fmt-note">{f.note}</span></span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="hero-meta hero-proof">
            <div className="hero-meta-item"><div className="num">Accredited</div><div className="lbl">Local &amp; international</div></div>
            <div className="hero-meta-item"><div className="num">Global</div><div className="lbl">Training partners</div></div>
            <div className="hero-meta-item"><div className="num">Tailored</div><div className="lbl">To real performance gaps</div></div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="pillars section-padding">
        <div className="container">
          <div className="pillars-intro">
            <div className="section-title">What we develop</div>
            <h2>Five focus areas, <span className="accent">built around how work is changing.</span></h2>
          </div>
          <div className="focus-grid">
            {FOCUS.map((f, i) => (
              <article className="focus-card" key={f.title}>
                <span className="focus-disc" aria-hidden="true"><i className={`fas ${f.icon}`}></i></span>
                <span className="focus-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{f.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BUILD */}
      <section className="section-padding">
        <div className="container">
          <div className="pillars-intro">
            <div className="section-title">Why build with Worktales</div>
            <h2>Development that&rsquo;s <span className="accent">proven, accredited, and ready.</span></h2>
          </div>
          <div className="whyb-grid">
            <article className="whyb-card col-4">
              <span className="whyb-ico" aria-hidden="true"><i className="fas fa-award"></i></span>
              <h3>Proven Experience</h3>
              <p>We bring proven experience working with organizations to build stronger teams, leaders, and cultures.</p>
            </article>

            <article className="whyb-card col-8 is-accent">
              <span className="whyb-ico" aria-hidden="true"><i className="fas fa-earth-americas"></i></span>
              <h3>Global Partnerships</h3>
              <p>Worktales partners with internationally renowned training providers to offer a diverse and specialized library of accredited training programs.</p>
            </article>

            <article className="whyb-card col-4 is-compact">
              <span className="whyb-ico" aria-hidden="true"><i className="fas fa-truck-fast"></i></span>
              <h3>Ready to mobilize</h3>
            </article>

            <article className="whyb-card col-4">
              <span className="whyb-ico" aria-hidden="true"><i className="fas fa-clipboard-check"></i></span>
              <h3>Accreditation</h3>
              <p>Selected programs are accredited by local and international bodies, reflecting recognized standards in professional development.</p>
            </article>

            <article className="whyb-card col-4 is-accent">
              <span className="whyb-ico" aria-hidden="true"><i className="fas fa-lightbulb"></i></span>
              <h3>Program Formats</h3>
              <p>Programs are tailored to organizational needs and delivered as workshops, professional certificates, or structured diploma programs.</p>
            </article>
          </div>
        </div>
      </section>

      {/* APPROACH — capability gaps to outcomes */}
      <section className="pillars section-padding">
        <div className="container">
          <div className="lebanon-grid">
            <div className="lebanon-intro">
              <div className="section-title">How development works at Worktales</div>
              <h2>Organizations stay competitive when their <span className="accent">people evolve with the work.</span></h2>
              <p>At Worktales, development focuses on reskilling, leadership growth, and practical capability building &mdash; so individuals and teams remain effective as the nature of work evolves.</p>
            </div>
            <ul className="lebanon-list">
              {APPROACH.map((a) => (
                <li key={a.title}>
                  <span className="lb-ico" aria-hidden="true"><i className={`fas ${a.icon}`}></i></span>
                  <div className="lb-body"><h3>{a.title}</h3><p>{a.desc}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <div className="section-title">Let&rsquo;s talk</div>
          <h2>Ready to build the <span className="accent">capability you need next?</span></h2>
          <p>Tell us where the performance gaps are. We&rsquo;ll design a program around them &mdash; aligned to your strategy, delivered in the format that fits, and accredited where it counts.</p>
          <div className="btns">
            <a href="#" className="btn btn-primary" onClick={toContact}>Schedule a call <i className="fas fa-arrow-right"></i></a>
            <a href="#" className="btn btn-ghost" onClick={(e) => e.preventDefault()}>Request program brochures</a>
          </div>
        </div>
      </section>
    </main>
  );
}

const FORMATS = [
  { icon: "fa-chalkboard-user", name: "Workshops", note: "Focused, hands-on sessions" },
  { icon: "fa-certificate", name: "Professional certificates", note: "Accredited, role-specific" },
  { icon: "fa-graduation-cap", name: "Diploma programs", note: "Structured, longer-form" },
];

const FOCUS = [
  { icon: "fa-chart-line", title: "Sales Performance & Commercial Effectiveness" },
  { icon: "fa-microchip", title: "AI, Technology & Future Skills" },
  { icon: "fa-diagram-project", title: "Organizational Performance & Execution" },
  { icon: "fa-bullhorn", title: "Communication, Public Speaking & Influence" },
  { icon: "fa-people-arrows", title: "Human Skills in an AI-Driven Workplace" },
];

const APPROACH = [
  { icon: "fa-magnifying-glass-chart", title: "Start with the gap", desc: "We diagnose the real performance gaps slowing your teams down before designing anything." },
  { icon: "fa-compass-drafting", title: "Design around strategy", desc: "Programs are tailored to your context and aligned with where the business is heading." },
  { icon: "fa-arrows-rotate", title: "Reskill for what's next", desc: "Reskilling and leadership growth keep people effective as roles and technology shift." },
  { icon: "fa-chart-simple", title: "Measure the impact", desc: "Capability building is tied to outcomes, so development translates into execution." },
];

window.TrainingPage = TrainingPage;
