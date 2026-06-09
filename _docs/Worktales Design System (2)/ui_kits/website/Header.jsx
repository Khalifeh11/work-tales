// Worktales website kit — glass header with dropdown menus + mobile nav.
const { useState: useHeaderState } = React;

function Header({ scrolled, onNavigate, current }) {
  const [menuOpen, setMenuOpen] = useHeaderState(false);
  const [openDrop, setOpenDrop] = useHeaderState(null); // mobile accordion

  const isMobile = () => window.matchMedia("(max-width: 980px)").matches;

  const go = (page, e) => {
    if (e) e.preventDefault();
    onNavigate(page);
    setMenuOpen(false);
    setOpenDrop(null);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const toggleDrop = (key, e) => {
    if (!isMobile()) return;
    e.preventDefault();
    setOpenDrop((k) => (k === key ? null : key));
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`} id="siteHeader">
      <nav className="nav container" aria-label="Primary">
        <div className="nav-logo">
          <a href="#home" aria-label="Worktales home" onClick={(e) => go("home", e)}>
            <img src="../../assets/worktales.png" alt="Worktales" className="nav-logo-img" />
          </a>
        </div>

        <button
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>

        <ul className={`nav-menu ${menuOpen ? "open" : ""}`} id="navMenu">
          <li className={`has-dropdown ${openDrop === "org" ? "open" : ""}`}>
            <button type="button" className="nav-link" aria-haspopup="true" onClick={(e) => toggleDrop("org", e)}>
              For Organizations <i className="fas fa-chevron-down chev"></i>
            </button>
            <div className="dropdown" role="menu">
              <a className="dropdown-item" href="#" role="menuitem" onClick={(e) => go("talent", e)}>
                <span className="ico"><i className="fas fa-user-tie"></i></span>
                <span><span className="label">Talent Solutions</span><span className="desc">Precision hiring, dedicated teams, employer-of-record.</span></span>
              </a>
              <a className="dropdown-item" href="#" role="menuitem" onClick={(e) => go("build", e)}>
                <span className="ico"><i className="fas fa-graduation-cap"></i></span>
                <span><span className="label">Training &amp; Development</span><span className="desc">Sales, leadership, AI readiness, communication programs.</span></span>
              </a>
              <a className="dropdown-item" href="#" role="menuitem" onClick={(e) => go("connect", e)}>
                <span className="ico"><i className="fas fa-users-line"></i></span>
                <span><span className="label">Culture &amp; Leadership</span><span className="desc">Team effectiveness, leadership alignment, Insights Discovery.</span></span>
              </a>
            </div>
          </li>
          <li className={`has-dropdown ${openDrop === "ind" ? "open" : ""}`}>
            <button type="button" className="nav-link" aria-haspopup="true" onClick={(e) => toggleDrop("ind", e)}>
              For Individuals <i className="fas fa-chevron-down chev"></i>
            </button>
            <div className="dropdown" role="menu">
              <a className="dropdown-item" href="#individuals" role="menuitem" onClick={() => setMenuOpen(false)}>
                <span className="ico"><i className="fas fa-compass"></i></span>
                <span><span className="label">Talent Pool</span><span className="desc">Join the Worktales talent ecosystem and get matched to roles.</span></span>
              </a>
              <a className="dropdown-item" href="#webinars" role="menuitem" onClick={() => setMenuOpen(false)}>
                <span className="ico"><i className="fas fa-chalkboard-user"></i></span>
                <span><span className="label">Webinars</span><span className="desc">Live sessions on careers, skills, and the future of work.</span></span>
              </a>
            </div>
          </li>
          <li><a className="nav-link" href="#insights" onClick={() => setMenuOpen(false)}>Insights</a></li>
          <li><a className="nav-link" href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        </ul>
      </nav>
    </header>
  );
}

window.Header = Header;
