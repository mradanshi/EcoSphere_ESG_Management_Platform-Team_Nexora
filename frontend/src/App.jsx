import "./App.css";

function App() {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
        <h2>🌱 EcoSphere</h2>

        <div className="nav-links">
  <a href="#">Home</a>
  <a href="#about">About</a>
  <a href="#features">Features</a>
  <a href="#contact">Contact</a>
</div>
      </nav>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-text">

          <h1>Building a Sustainable Future</h1>

          <p>
            Track ESG goals, earn green rewards and monitor your sustainability
            progress through one smart platform.
          </p>

          <button>Get Started</button>

        </div>

        <div className="hero-image">

          🌍

        </div>

      </section>

      {/* Features */}

      <section id="features" className="features">

        <h2>Our Features</h2>

        <div className="cards">

          <div className="card">
            <h3>📊 ESG Tracking</h3>
            <p>Track environmental, social and governance activities.</p>
          </div>

          <div className="card">
            <h3>🏆 Green Rewards</h3>
            <p>Earn points for completing sustainable challenges.</p>
          </div>

          <div className="card">
            <h3>📈 Smart Analytics</h3>
            <p>Visualize ESG progress through dashboards.</p>
          </div>

          <div className="card">
            <h3>🌍 Carbon Footprint</h3>
            <p>Reduce emissions with actionable recommendations.</p>
          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="stats">

        <div className="stat">
          <h2>500+</h2>
          <p>Companies</p>
        </div>

        <div className="stat">
          <h2>20K+</h2>
          <p>Green Actions</p>
        </div>

        <div className="stat">
          <h2>95%</h2>
          <p>Goal Achievement</p>
        </div>

        <div className="stat">
          <h2>1200+</h2>
          <p>Trees Saved</p>
        </div>

      </section>

      {/* About */}

      <section id="about" className="about">

        <h2>About EcoSphere</h2>

        <p>
          EcoSphere helps organizations improve ESG performance by combining
          sustainability tracking, gamification, analytics and employee
          engagement into one powerful platform.
        </p>

      </section>

      {/* Footer */}

      <footer id="contact">

        <h3>🌱 EcoSphere ESG Platform</h3>

        <p>Built with ❤️ by Team Nexora</p>

        <p>© 2026 All Rights Reserved</p>

      </footer>

    </div>
  );
}

export default App;