import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouteWithAnimation from "./components/functional-components/RouteWithAnimation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouteWithAnimation />
      </BrowserRouter>
    </div>
  );
}

export default App;
