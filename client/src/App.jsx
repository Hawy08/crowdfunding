import ethereumLogo from './assets/ethereum.svg';
import metamaskLogo from './assets/metamask.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="logos">
        <a href="https://ethereum.org" target="_blank" rel="noreferrer">
          <img src={ethereumLogo} className="logo" alt="Ethereum logo" />
        </a>
        <a href="https://metamask.io" target="_blank" rel="noreferrer">
          <img src={metamaskLogo} className="logo" alt="MetaMask logo" />
        </a>
      </div>
      <h1 className="title">Coming Soon</h1>
      <p className="subtitle">
        Let’s help our peers achieve their goals through the power of
        Blockchain.
      </p>
      <p className="launch-note">Launching Q3 2025 🚀</p>
    </div>
  );
}

export default App;
