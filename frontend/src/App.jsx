import './App.css';
function App() {
  return (
<div className="container">
  <nav className="navbar">
    <h2>🌱 ESG Gamify</h2>
    <div>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Dashboard</a>
      <a href="#">Contact</a>
    </div>
  </nav>

  <main>
    <h1>Welcome to ESG Management Platform</h1>
    <p>
      Track ESG goals, earn sustainability points, and monitor your progress.
    </p>

    <button>Get Started</button>

    <section>
      <h2>Features</h2>
      <div className="cards">
  <div className="card">
    <h3>📊 Track ESG Goals</h3>
    <p>Monitor sustainability targets and progress.</p>
  </div>

  <div className="card">
    <h3>🏆 Earn Points</h3>
    <p>Get rewarded for completing ESG activities.</p>
  </div>

  <div className="card">
    <h3>📈 Dashboard</h3>
    <p>View reports and overall performance.</p>
  </div>
</div>
    </section>
  </main>
</div>  );
}

export default App;