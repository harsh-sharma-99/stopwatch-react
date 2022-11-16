import "./App.css";
import Header from "./components/header/Header";
import StopWatch from "./components/stopWatch/StopWatch";
import Timer from "./components/timer/Timer";

function App() {
  return (
    <div className="App">
      <Header />
      <StopWatch />
      <Timer/>
    </div>
  );
}

export default App;
