import logo from './logo.svg';
import './App.css';

function App() {
  return (


    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <form action="/userDistrict" method="get">
          <input type="text" name="streetAddress" value="59 Spruce St"></input>
          <input type="text" name="zipCode" value="43215"></input>
          <input type="submit" value="submit"></input>
        </form>

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
