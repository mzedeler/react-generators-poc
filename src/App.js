import logo from './logo.svg';
import './App.css';
import { GeneratorComponent } from './GeneratorComponent';
import { GeneratorInput2 } from './GeneratorInput2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GeneratorComponent />
        <br />
        <GeneratorInput2 />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
