import "./App.css";
import Header from "./Header";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div>
        <Routes />
      </div>
    </div>
  );
}

export default App;
