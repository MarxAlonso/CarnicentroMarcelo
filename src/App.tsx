import "./index.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
