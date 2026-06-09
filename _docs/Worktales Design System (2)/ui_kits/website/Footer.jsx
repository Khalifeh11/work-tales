// Worktales website kit — shared footer.
function Footer({ onNavigate }) {
  const go = (page, e) => { if (e) e.preventDefault(); onNavigate(page); window.scrollTo({ top: 0 }); };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-row">
              <img src="../../assets/worktales.png" alt="Worktales" className="footer-logo-img" />
            </div>
            <p className="tagline">Empowering People. Unlocking Performance.</p>
            <p>An integrated workforce consultancy operating across hiring, capability development, and culture &amp; leadership alignment.</p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>For Organizations</h4>
            <ul>
              <li><a href="#" onClick={(e) => go("talent", e)}>Talent Solutions</a></li>
              <li><a href="#" onClick={(e) => go("build", e)}>Training &amp; Development</a></li>
              <li><a href="#" onClick={(e) => go("connect", e)}>Culture &amp; Leadership</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>For Individuals</h4>
            <ul>
              <li><a href="#individuals">Join the talent pool</a></li>
              <li><a href="#individuals">Open roles</a></li>
              <li><a href="#webinars">Webinars</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#insights">Insights</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get in touch</h4>
            <ul>
              <li><span><i className="fas fa-map-marker-alt footer-contact-ico"></i> Khanamerian Bldg, 5th Fl, Badaro · Beirut</span></li>
              <li><a href="#"><i className="fas fa-envelope footer-contact-ico"></i> info@worktales.com</a></li>
              <li><a href="#"><i className="fas fa-phone footer-contact-ico"></i> +961 81 850 817</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 Worktales. All rights reserved.</span>
          <span>Empowering People. Unlocking Performance.</span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
