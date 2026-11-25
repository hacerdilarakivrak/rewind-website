
import './App.css'

const downloadUrl =
  'https://drive.google.com/uc?export=download&id=1IG16JQxPLGG3XUlH9QM3ZtcAvb41tKt_'

const features = [
  {
    icon: '◷',
    title: 'Activity Timeline',
    description:
      'Explore your digital activity and revisit your previous sessions.',
  },
  {
    icon: '⌕',
    title: 'Smart Search',
    description:
      'Find previous activities and quickly return to what matters.',
  },
  {
    icon: '▤',
    title: 'File Recovery',
    description:
      'Access protected file versions and recover previous changes.',
  },
  {
    icon: '◇',
    title: 'Checkpoints',
    description:
      'Create checkpoints and keep track of important moments.',
  },
  {
    icon: '◎',
    title: 'Browser Integration',
    description:
      'Connect your browser and keep track of your browsing activity.',
  },
  {
    icon: '◈',
    title: 'Privacy & Control',
    description:
      'Start, pause, resume or end recording whenever you want.',
  },
]

function App() {
  return (
    <div className="website">

      {/* NAVIGATION */}

      <header className="navbar">
        <a href="#" className="brand">
          <img
            src="/rewind.png"
            className="brand-icon"
            alt="Rewind logo"
          />
          <span>Rewind</span>
        </a>

        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#demo">Demo</a>
          <a href="#about">About</a>

          <a
            href="https://github.com/abdu3061/Rewind"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>

        <a href="#download" className="nav-download">
          Download
        </a>
      </header>

      <main>

        {/* HERO SECTION */}

        <section className="hero-section">
          <div className="hero-glow"></div>

          <div className="hero-content">

            <span className="version-badge">
              ● Windows Beta
            </span>

            <h1>
              Your digital past.
              <br />
              <span>Always within reach.</span>
            </h1>

            <p className="hero-description">
              Rewind helps you revisit your digital activity,
              recover previous file versions and find what
              matters — all in one desktop application.
            </p>

            <div className="hero-buttons">

              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                ↓ Download for Windows
              </a>

              <a href="#demo" className="secondary-button">
                ▶ Watch Demo
              </a>

            </div>

            <p className="platform-text">
              Windows Desktop · Beta Release
            </p>

          </div>

          {/* DASHBOARD PREVIEW */}

          <div className="app-preview">

            <div className="preview-header">

              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>Rewind Desktop</span>

            </div>

            <div className="preview-body">
              <img
                src="/dashboard.png"
                className="dashboard-image"
                alt="Rewind Desktop Dashboard"
              />
            </div>

          </div>

        </section>

        {/* FEATURES SECTION */}

        <section id="features" className="features-section">

          <div className="section-heading">

            <span className="section-label">
              FEATURES
            </span>

            <h2>Everything you need to rewind.</h2>

            <p>
              Your activity, files and important moments,
              together in one place.
            </p>

          </div>

          <div className="features-grid">

            {features.map((feature) => (
              <article
                className="feature-card"
                key={feature.title}
              >

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>

              </article>
            ))}

          </div>

        </section>

        {/* DEMO VIDEO SECTION */}

        <section id="demo" className="demo-section">

          <div className="section-heading">

            <span className="section-label">
              PRODUCT DEMO
            </span>

            <h2>See Rewind in action.</h2>

            <p>
              Discover how Rewind helps you explore your
              digital history and stay in control of your
              workflow.
            </p>

          </div>

          <div className="video-container">

            <video
              className="demo-video"
              controls
              playsInline
              preload="none"
              poster="/dashboard.png"
            >
              <source
                src="/rewind-demo.mp4"
                type="video/mp4"
              />

              Your browser does not support video playback.

            </video>

          </div>

          <p className="video-caption">
            Rewind — Official Product Demo
          </p>

        </section>

        {/* ABOUT SECTION */}

        <section id="about" className="about-section">

          <span className="section-label">
            ABOUT REWIND
          </span>

          <h2>
            Move forward. Look back whenever you need.
          </h2>

          <p>
            Rewind is a desktop application designed to help
            you rediscover your digital history and stay in
            control of your activity.
          </p>

          <p>
            Built to make your digital workflow more
            organized, accessible and recoverable.
          </p>

        </section>

        {/* DOWNLOAD SECTION */}

        <section id="download" className="download-section">

          <span className="section-label">
            GET STARTED
          </span>

          <h2>Ready to Rewind?</h2>

          <p>
            Download the Windows beta and start exploring
            your digital history today.
          </p>

          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            ↓ Download for Windows
          </a>

          <p className="download-note">
            Beta version · Windows Desktop · 166 MB
          </p>

          {/* INSTALLATION GUIDE */}

          <div className="installation-note">

            <h3>↓ Installation Guide</h3>

            <p className="installation-intro">
              Follow these steps to install Rewind on your
              Windows device.
            </p>

            <div className="installation-steps">

              {/* STEP 1 */}

              <div className="installation-step">

                <span className="step-number">1</span>

                <div>
                  <h4>Download Rewind</h4>

                  <p>
                    Click Download for Windows to get the
                    latest beta installer (166 MB).
                  </p>
                </div>

              </div>

              {/* STEP 2 */}

              <div className="installation-step">

                <span className="step-number">2</span>

                <div>
                  <h4>Google Drive Warning</h4>

                  <p>
                    Google Drive may display a warning because
                    the installer is too large to scan for
                    viruses.
                  </p>

                  <p>
                    If you have verified the file and trust
                    its source, you can choose Download anyway.
                  </p>
                </div>

              </div>

              {/* STEP 3 */}

              <div className="installation-step">

                <span className="step-number">3</span>

                <div>
                  <h4>Windows Security Warning</h4>

                  <p>
                    Rewind is currently in beta and is not
                    digitally signed yet. Windows SmartScreen
                    may display an unrecognized app warning.
                  </p>

                  <p>
                    If you have verified the installer and
                    trust its source, select{' '}
                    <strong>More info</strong> and then{' '}
                    <strong>Run anyway</strong> if available.
                  </p>
                </div>

              </div>

              {/* STEP 4 */}

              <div className="installation-step">

                <span className="step-number">4</span>

                <div>
                  <h4>Install and Launch</h4>

                  <p>
                    Complete the installation and launch
                    Rewind to start exploring your digital
                    history.
                  </p>
                </div>

              </div>

            </div>

            {/* SECURITY NOTE */}

            <div className="security-note">

              <span>⚠</span>

              <p>
                Rewind is currently a beta release.
                Security warnings do not establish whether
                a file is safe or unsafe. Only download and
                install Rewind if you have verified the
                installer and trust its source.
              </p>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-brand">

          <img
            src="/rewind.png"
            className="brand-icon"
            alt="Rewind logo"
          />

          <span>Rewind</span>

        </div>

        <p>
          © {new Date().getFullYear()} Rewind.
          All rights reserved.
        </p>

        <a
          href="https://github.com/abdu3061/Rewind"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

      </footer>

    </div>
  )
}

export default App
