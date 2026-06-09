// Worktales website kit — Homepage.
const { useState: useHomeState } = React;

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
}

function HomePage({ onNavigate }) {
  return (
    <main>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg"></div>
        <div className="hero-grid-bg"></div>
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="hero-eyebrow"><span className="pulse"></span> Built in Beirut · Designed for global execution</span>
              <h1 className="hero-title">People decisions are the <span className="em">real risk</span> in business.</h1>
              <p className="hero-sub">Strategy looks good on paper. Execution depends on the people behind it. Worktales helps organizations <strong>hire</strong>, <strong>develop</strong>, and <strong>align</strong> the talent that turns ambition into outcomes.</p>
              <div className="hero-ctas">
                <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToId("contact"); }}>Schedule a call <i className="fas fa-arrow-right"></i></a>
                <a href="#services" className="btn btn-ghost" onClick={(e) => { e.preventDefault(); scrollToId("services"); }}>Explore services</a>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-orbit outer"></div>
              <div className="hero-orbit"></div>
              <div className="hero-orbit inner"></div>
              <div className="hero-core"></div>
              <div className="hero-node h1"><span className="pillar-num">01 Hire</span>Talent</div>
              <div className="hero-node h2"><span className="pillar-num">02 Build</span>Training</div>
              <div className="hero-node h3"><span className="pillar-num">03 Connect</span>Culture</div>
            </div>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-item"><div className="num">3</div><div className="lbl">Integrated pillars</div></div>
            <div className="hero-meta-item"><div className="num"><i className="fas fa-certificate hero-meta-cert"></i></div><div className="lbl">Insights Discovery Partner</div></div>
            <div className="hero-meta-item"><div className="num">90%</div><div className="lbl">Client satisfaction</div></div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="pillars section-padding" id="services">
        <div className="container">
          <div className="pillars-intro">
            <div className="section-title">For organizations</div>
            <h2>One consultancy, <span className="accent">three pillars</span>, <span className="nowrap">one outcome: people who deliver.</span></h2>
          </div>
          <div className="pillar-grid">
            {PILLARS.map((p) => (
              <article className="pillar-card" key={p.name}>
                <span className="pillar-icon" aria-hidden="true"><i className={`fas ${p.icon}`}></i></span>
                <span className="pillar-num">{p.num}</span>
                <h3 className="pillar-name">{p.name}</h3>
                <div className="pillar-subtitle">{p.subtitle}</div>
                <p className="pillar-desc">{p.desc}</p>
                <ul className="pillar-features">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                <a href="#" className="pillar-link" onClick={(e) => { e.preventDefault(); p.talent ? onNavigate("talent") : p.build ? onNavigate("build") : p.connect ? onNavigate("connect") : scrollToId("contact"); window.scrollTo({ top: (p.talent || p.build || p.connect) ? 0 : window.scrollY }); }}>
                  Explore {p.name} <i className="fas fa-arrow-right"></i>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="outcomes section-padding">
        <div className="container outcomes-inner">
          <div className="outcomes-head">
            <div className="section-title">Outcomes that matter to executives</div>
            <h2>The numbers behind the work.</h2>
          </div>
          <div className="outcomes-grid">
            <div className="outcome"><div className="big">90%</div><div className="rule"></div><div className="lbl">Client satisfaction</div></div>
            <div className="outcome"><div className="big">65%</div><div className="rule"></div><div className="lbl">Reduction in hiring cost</div></div>
            <div className="outcome"><div className="big">92%</div><div className="rule"></div><div className="lbl">Retention at 12 months</div></div>
            <div className="outcome"><div className="big">&lt;2&nbsp;wks</div><div className="rule"></div><div className="lbl">Talent ready to onboard</div></div>
          </div>
        </div>
      </section>

      {/* INDIVIDUALS */}
      <section className="individuals section-padding" id="individuals">
        <div className="container">
          <div className="pillars-intro">
            <div className="section-title">For individuals</div>
            <h2>Building your career? <span className="accent">Start with us.</span></h2>
          </div>
          <div className="indiv-grid">
            <article className="indiv-card">
              <span className="pillar-icon" aria-hidden="true"><i className="fas fa-compass"></i></span>
              <h3 className="indiv-title">Join our talent pool</h3>
              <p className="indiv-desc">Looking for your next role? Join the Worktales talent ecosystem and we&rsquo;ll match you with opportunities as they open &mdash; from dedicated remote teams to executive roles across the region and beyond.</p>
              <div className="indiv-ctas">
                <a href="#" className="btn btn-primary" onClick={(e) => e.preventDefault()}>Join the talent pool <i className="fas fa-arrow-right"></i></a>
                <a href="#" className="btn btn-ghost" onClick={(e) => e.preventDefault()}>View open roles</a>
              </div>
            </article>
            <article className="indiv-card">
              <span className="pillar-icon" aria-hidden="true"><i className="fas fa-chalkboard-user"></i></span>
              <h3 className="indiv-title">Learn with our webinars</h3>
              <p className="indiv-desc">Live sessions on careers, skills, and the future of work &mdash; practical, interactive, and free to attend. Register for an upcoming session below.</p>
              <a href="#webinars" className="btn-link" onClick={(e) => { e.preventDefault(); scrollToId("webinars"); }}>See upcoming webinars <i className="fas fa-arrow-right"></i></a>
            </article>
          </div>

          <div className="webinars" id="webinars">
            <div className="webinars-head">
              <div className="section-title">Upcoming webinars</div>
              <h3>Sessions worth your time.</h3>
            </div>
            <div className="webinar-grid">
              {WEBINARS.map((w, i) => <WebinarItem key={i} {...w} />)}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / SCHEDULER */}
      <section className="cta-band" id="contact">
        <div className="container">
          <div className="section-title">Let&rsquo;s talk</div>
          <h2>Let&rsquo;s write your next <span className="accent">worktale</span>.</h2>
          <p>Whether you&rsquo;re hiring, building capability, or aligning your leadership team &mdash; start with a conversation. Pick a time that works and we&rsquo;ll listen first, then propose.</p>
          <SchedulerMock />
          <div className="btns">
            <a href="#" className="btn btn-ghost" onClick={(e) => e.preventDefault()}>Request a brochure</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function WebinarItem({ month, tag, registered }) {
  const [done, setDone] = useHomeState(false);
  return (
    <article className="webinar-card">
      <div className="webinar-date"><span className="webinar-month">{month}</span><span className="webinar-day">&mdash;</span></div>
      <span className="webinar-tag">{tag}</span>
      <h4 className="webinar-title">Webinar title to be announced</h4>
      <p className="webinar-meta">Date &amp; time TBD &middot; Online</p>
      <span
        className={`webinar-register ${done ? "" : "is-disabled"}`}
        style={done ? { color: "var(--accent)", cursor: "default" } : {}}
        onClick={() => setDone(true)}
        role="button"
      >
        {done ? "✓ You're on the list" : "Notify me"}
      </span>
    </article>
  );
}

// Fake scheduler replacing the RecruitCRM iframe — demonstrates interactivity.
function SchedulerMock() {
  const [step, setStep] = useHomeState(1);
  const [day, setDay] = useHomeState(null);
  const [time, setTime] = useHomeState(null);
  const days = [
    { d: "Mon", n: 9 }, { d: "Tue", n: 10 }, { d: "Wed", n: 11 },
    { d: "Thu", n: 12 }, { d: "Fri", n: 13 },
  ];
  const times = ["09:30", "11:00", "13:30", "15:00", "16:30"];

  return (
    <div className="scheduler">
      <div className="sched-card">
        {step < 3 && (
          <div className="sched-head">
            <span className="sched-eyebrow">Schedule a call</span>
            <span className="sched-title">30-minute intro · with the Worktales team</span>
          </div>
        )}
        {step === 1 && (
          <React.Fragment>
            <p className="sched-prompt">Pick a day in June</p>
            <div className="sched-days">
              {days.map((x) => (
                <button key={x.n} className={`sched-day ${day === x.n ? "is-sel" : ""}`} onClick={() => setDay(x.n)}>
                  <span className="sd-d">{x.d}</span><span className="sd-n">{x.n}</span>
                </button>
              ))}
            </div>
            <button className="btn btn-primary sched-next" disabled={!day} onClick={() => setStep(2)}>Choose a time <i className="fas fa-arrow-right"></i></button>
          </React.Fragment>
        )}
        {step === 2 && (
          <React.Fragment>
            <p className="sched-prompt">Times for Thu, June {day} <span className="sched-tz">· Beirut (GMT+3)</span></p>
            <div className="sched-times">
              {times.map((t) => (
                <button key={t} className={`sched-time ${time === t ? "is-sel" : ""}`} onClick={() => setTime(t)}>{t}</button>
              ))}
            </div>
            <div className="sched-actions">
              <button className="btn btn-ghost" onClick={() => setStep(1)}>Back</button>
              <button className="btn btn-primary" disabled={!time} onClick={() => setStep(3)}>Confirm booking <i className="fas fa-arrow-right"></i></button>
            </div>
          </React.Fragment>
        )}
        {step === 3 && (
          <div className="sched-done">
            <span className="sched-check"><i className="fas fa-check"></i></span>
            <h3>You&rsquo;re booked.</h3>
            <p>June {day} at {time} · Beirut time. A calendar invite is on its way to your inbox.</p>
            <button className="btn btn-ghost" onClick={() => { setStep(1); setDay(null); setTime(null); }}>Book another time</button>
          </div>
        )}
      </div>
    </div>
  );
}

const PILLARS = [
  { num: "01 / Hire", icon: "fa-user-tie", name: "Talent Solutions", subtitle: "Precision hiring & teams", talent: true,
    desc: "Strategic search, dedicated remote teams, and employer-of-record services. We own the full hiring journey so each hire is intentional, culture-aligned, and ready to contribute from day one.",
    features: ["Executive & specialist search", "Dedicated remote teams in Lebanon", "EOR — no local entity required", "0% retainer · 90-day replacement"] },
  { num: "02 / Build", icon: "fa-graduation-cap", name: "Training & Development", subtitle: "Skills that move the business", build: true,
    desc: "Tailored programs in sales performance, leadership, AI readiness, organizational execution, and communication — designed around the real capability gaps slowing your teams down.",
    features: ["Sales & commercial effectiveness", "AI / technology & future skills", "Leadership & execution", "Workshops · certificates · diplomas"] },
  { num: "03 / Connect", icon: "fa-users", name: "Culture & Leadership", subtitle: "Teams that work together", connect: true,
    desc: "High-performing organizations build culture deliberately. We align leadership, sharpen team dynamics, and run Insights Discovery to make collaboration faster, clearer, and more accountable.",
    features: ["Team building & effectiveness", "Leadership alignment", "Change & sales effectiveness", "Insights Discovery partner"] },
];

const WEBINARS = [
  { month: "JUN", tag: "Coming soon" },
  { month: "JUN", tag: "Coming soon" },
  { month: "JUL", tag: "Coming soon" },
];

window.HomePage = HomePage;
