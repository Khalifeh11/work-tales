// Worktales website kit — Talent Solutions detail page (recruitment).
function TalentPage({ onNavigate }) {
  const back = (e) => { e.preventDefault(); onNavigate("home"); window.scrollTo({ top: 0 }); };
  const toContact = (e) => { e.preventDefault(); onNavigate("home"); setTimeout(() => { const el = document.getElementById("contact"); if (el) el.scrollIntoView(); }, 60); };

  return (
    <main>
      <section className="page-hero">
        <div className="hero-bg"></div>
        <div className="hero-grid-bg"></div>
        <div className="container">
          <div className="page-hero-grid">
            <div className="page-hero-copy">
              <a href="#" className="back" onClick={back}><i className="fas fa-arrow-left"></i> All services</a>
              <div className="eyebrow"><span>01 / Hire</span></div>
              <h1>Talent Solutions: the right hire, <span className="accent">identified through context.</span></h1>
              <p className="lede">Effective hiring begins with understanding how an organization truly operates &mdash; how decisions are made, what success looks like, and how culture shapes performance. We own the full hiring journey so every hire is intentional, culture-aligned, and ready to contribute from day one.</p>
              <div className="hero-ctas">
                <a href="#" className="btn btn-primary" onClick={toContact}>Schedule a call <i className="fas fa-arrow-right"></i></a>
                <a href="#" className="btn btn-ghost" onClick={back}>Explore all services</a>
              </div>
            </div>

            <aside className="hire-card" aria-hidden="true">
              <div className="hire-card-glow"></div>
              <div className="hire-card-head">
                <span className="hire-card-eyebrow">Our process</span>
                <span className="hire-card-title">Every hire, start to finish</span>
              </div>
              <ol className="hire-steps">
                <li className="is-done"><span className="step-dot"><i className="fas fa-check"></i></span><span className="step-body"><span className="step-name">Sourced</span><span className="step-note">AI-assisted, context-first</span></span></li>
                <li className="is-done"><span className="step-dot"><i className="fas fa-check"></i></span><span className="step-body"><span className="step-name">Assessed</span><span className="step-note">Standardized fit, not just CVs</span></span></li>
                <li className="is-active"><span className="step-dot"><i className="fas fa-arrow-right"></i></span><span className="step-body"><span className="step-name">Onboarded</span><span className="step-note">Ready to contribute day one</span></span></li>
              </ol>
            </aside>
          </div>

          <div className="hero-meta hero-proof">
            <div className="hero-meta-item"><div className="num">0%</div><div className="lbl">Retainer</div></div>
            <div className="hero-meta-item"><div className="num">90-day</div><div className="lbl">Replacement</div></div>
            <div className="hero-meta-item"><div className="num">End-to-end</div><div className="lbl">Ownership</div></div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="pillars section-padding">
        <div className="container">
          <div className="pillars-intro">
            <div className="section-title">What we do</div>
            <h2>Three ways we <span className="accent">build your team.</span></h2>
          </div>
          <div className="pillar-grid">
            {SERVICES.map((s) => (
              <article className="pillar-card" key={s.name}>
                <span className="pillar-icon" aria-hidden="true"><i className={`fas ${s.icon}`}></i></span>
                <h3 className="pillar-name">{s.name}</h3>
                <div className="pillar-subtitle">{s.subtitle}</div>
                <p className="pillar-desc">{s.desc}</p>
                <ul className="pillar-features">{s.features.map((f) => <li key={f}>{f}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HIRE */}
      <section className="section-padding">
        <div className="container">
          <div className="pillars-intro">
            <div className="section-title">Why hire with Worktales</div>
            <h2>A hiring partner, <span className="accent">not a job board.</span></h2>
          </div>
          <div className="adv-grid">
            {ADVANTAGES.map((a, i) => (
              <div className="adv-item" key={a.title}>
                <div className="adv-top">
                  <span className="adv-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="adv-ico" aria-hidden="true"><i className={`fas ${a.icon}`}></i></span>
                </div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="guarantee">
            <div className="guarantee-lead">
              <span className="guarantee-eyebrow">The Worktales guarantee</span>
              <h3>You only pay for a hire that sticks.</h3>
              <p>No upfront retainer. Fees apply only on a successful placement &mdash; and every one is backed for a full quarter, no questions asked.*</p>
            </div>
            <div className="guarantee-aside">
              <div className="guarantee-figures">
                <div className="g-fig"><span className="g-num">0%</span><span className="g-rule"></span><span className="g-lbl">Upfront retainer</span></div>
                <div className="g-fig"><span className="g-num">90<span className="g-num-unit">d</span></span><span className="g-rule"></span><span className="g-lbl">Replacement window</span></div>
              </div>
              <a href="#" className="btn btn-primary guarantee-cta" onClick={toContact}>Schedule a call <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* LEBANESE ADVANTAGE */}
      <section className="pillars section-padding">
        <div className="container">
          <div className="lebanon-grid">
            <div className="lebanon-intro">
              <img src="../../assets/lebanon.png" alt="" className="lebanon-map" aria-hidden="true" />
              <div className="section-title">The Lebanese talent advantage</div>
              <h2>Deep, multilingual, <span className="accent">globally ready talent.</span></h2>
              <p>The teams we build draw on one of the region&rsquo;s deepest professional pools &mdash; rigorously educated, genuinely trilingual, and used to working across borders from day one.</p>
            </div>
            <ul className="lebanon-list">
              {LEBANON.map((l) => (
                <li key={l.title}>
                  <span className="lb-ico" aria-hidden="true"><i className={`fas ${l.icon}`}></i></span>
                  <div className="lb-body"><h3>{l.title}</h3><p>{l.desc}</p></div>
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
          <h2>Ready to make your next <span className="accent">hire count?</span></h2>
          <p>Tell us what you&rsquo;re building and the kind of people you need. We&rsquo;ll listen first, then propose a hiring approach designed around how your organization actually works.</p>
          <div className="btns">
            <a href="#" className="btn btn-primary" onClick={toContact}>Schedule a call <i className="fas fa-arrow-right"></i></a>
            <a href="#" className="btn btn-ghost" onClick={(e) => e.preventDefault()}>Request a brochure</a>
          </div>
          <p className="scheduler-fallback">*Terms and conditions apply.</p>
        </div>
      </section>
    </main>
  );
}

const SERVICES = [
  { icon: "fa-user-tie", name: "Executive Search", subtitle: "Sourcing to onboarding",
    desc: "We manage the entire hiring journey — from sourcing to onboarding — ensuring every hire is intentional and culturally aligned, identified through context rather than credentials alone.",
    features: ["AI-assisted sourcing", "Standardized fit assessments", "Structured onboarding"] },
  { icon: "fa-people-group", name: "Talent Hubs", subtitle: "Dedicated remote teams",
    desc: "Build or outsource dedicated remote teams in Lebanon to access high-quality talent, optimize costs, and scale sustainably — with delivery managed to performance.",
    features: ["Exclusive dedicated teams", "Fast workflow integration", "Performance-managed delivery"] },
  { icon: "fa-file-contract", name: "Talent Enablement", subtitle: "Employer of record",
    desc: "Hire in Lebanon without setting up a local entity. We legally employ your team while you focus on leading them — payroll, benefits, and compliance handled end to end.",
    features: ["Fully compliant employment", "Payroll & benefits managed", "No local entity required"] },
];

const ADVANTAGES = [
  { icon: "fa-briefcase", title: "Industry expertise", desc: "Experience across multiple industries lets us quickly understand sector-specific hiring needs." },
  { icon: "fa-filter", title: "Strategic talent pipelines", desc: "We build tailored talent pipelines with hiring strategies aligned to each company's specific needs." },
  { icon: "fa-wand-magic-sparkles", title: "Modern talent sourcing", desc: "AI-assisted sourcing and structured assessment surface the right candidates faster." },
  { icon: "fa-circle-nodes", title: "Connected talent ecosystem", desc: "A strong, diverse talent pool constantly developing and engaging in knowledge transfer." },
];

const LEBANON = [
  { icon: "fa-graduation-cap", title: "Strong education", desc: "A dense network of respected universities produces a deep, well-qualified professional pool." },
  { icon: "fa-language", title: "English & French fluency", desc: "Genuinely trilingual professionals who work seamlessly across English, French, and Arabic markets." },
  { icon: "fa-globe", title: "Global exposure", desc: "A globally connected workforce accustomed to collaborating across time zones and cultures." },
  { icon: "fa-scale-balanced", title: "Competitive cost", desc: "Senior-level capability at a cost structure that lets you scale teams sustainably." },
];

window.TalentPage = TalentPage;
