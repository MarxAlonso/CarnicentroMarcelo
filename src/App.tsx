import "./index.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { Footer } from "./components/Footer/Footer";
import { NosotrosPage } from "./pages/NosotrosPage/NosotrosPage";
import { CarneResPage } from "./pages/Productos/CarneResPage/CarneResPage";
import { CarneCerdoPage } from "./pages/Productos/CarneCerdoPage/CarneCerdoPage";
import { NotFound } from "./components/NotFound/NotFound";
function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/carneres" element={<CarneResPage />} />
          <Route path="/carnecerdo" element={<CarneCerdoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
