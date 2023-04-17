import logo from './logo.svg'; // Wow, this is pretty cool, is this normal
import './App.css';

function Square({ value }) {
  return <button className="square">{value}</button>;
}

function App() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}

// Commented this all out, will be making tic-tac-tow game
{/*// Amywhere I see className is a thing in the App.CSS file, veyr neat
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We're Grooving (Testing things)
        </p>
        <MyButton />
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
  */}

{/*
    const mySelf = {
      name: "Roy Midence",
      date: "4/10/2023"
    };

    function MyButton() {
      return (
        <button>I'm a Button</button>
      );
    }
*/}

export default App;
