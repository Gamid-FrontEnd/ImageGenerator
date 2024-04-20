import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderStyles from "./components/Header";
import { AppStyle } from "./components/styles";
import Generator from "./components/Generator";
import AboutAI from "./components/aboutAI/AboutAI";

function App() {
  return (
    <AppStyle>
      <Router>
        <HeaderStyles />
        <Routes>
          <Route path="/" element={<Generator />} />
          <Route path="/about" element={<AboutAI />} />
        </Routes>
      </Router>
    </AppStyle>
  );
}

export default App;
