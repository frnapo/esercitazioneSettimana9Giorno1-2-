import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponents";
import ClassComponent from "./components/ClassComponents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ButtonComponent content="Prova" />
        <ClassComponent
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Icecat1-300x300.svg"
          alt="Immagine 1"
        />

        <ButtonComponent content="Clicca" />
        <ClassComponent
          src="https://dspncdn.com/a1/media/692x/72/95/a6/7295a6f9a73dfc20a64ee9ab760e660b.jpg"
          alt="Immagine 2"
        />

        <ButtonComponent content="Qui" />
        <ClassComponent
          src="https://i.pinimg.com/236x/25/ef/a7/25efa79cb9e70f6af08cb47f851b8ebf.jpg"
          alt="Immagine 3"
        />
      </header>
    </div>
  );
}

export default App;
