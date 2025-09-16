import "./App.css";
import { Route, Routes } from "react-router-dom";
import Section from "./components/section";
import Body from "./components/body";

function App() {
  return (
    <Routes>
      <Route to="/" element={<Body />}>
        <Route to="" index element={<Section/>}/>
      </Route>
    </Routes>

  );
}

export default App;
