export default function Footer() {
    return (
      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} FlashLearn. All rights reserved.</p>
          <ul>
            <li>
              <a
                href="https://github.com/Jeremy-waweru10/REACT-CAPSTONE.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jeremy-waweru-26a885352/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BtZbJXaw%2FSAy%2FWUslo9X%2FYQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
  