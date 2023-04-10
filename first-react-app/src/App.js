import logo from './logo.svg'; // Wow, this is pretty cool, is this normal
import './App.css';

const mySelf = {
  name: "Roy Midence",
  date: "4/10/2023"
};

function MyButton() {
  return (
    <button>I'm a Button</button>
  );
}

function App() {
  return (
    // Amywhere I see className is a thing in the App.CSS file, veyr neat
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We're Grooving (Testing things)
        </p>
        <MyButton /> {/* This is also very cool, have to comment like this to appease JSX lords*/}
        <p>
          Made by: <b>{mySelf.name}</b> on {mySelf.date}
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
