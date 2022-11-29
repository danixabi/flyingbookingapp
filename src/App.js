import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<loginPage />} />
        <Route path="/Home" element={<homePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
