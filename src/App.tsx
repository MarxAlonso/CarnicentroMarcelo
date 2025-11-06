import "./index.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Footer } from "./components/Footer/Footer";
import Chatbot from "./components/Chatbot/Chatbot";
import Loading from "./components/Loading/Loading";

// Lazy loading de componentes
// Esto hace cargar los componenetes solo cuando se necesitan y mejora el rendimiento inicial de la app
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const NosotrosPage = lazy(() => import("./pages/NosotrosPage/NosotrosPage"));
const CarneResPage = lazy(() => import("./pages/Productos/CarneResPage/CarneResPage"));
const CarneCerdoPage = lazy(() => import("./pages/Productos/CarneCerdoPage/CarneCerdoPage"));
const ContactoPage = lazy(() => import("./pages/ContactoPage/ContactoPage"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

// Componente principal de la aplicación
function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        {/* Suspense muestra un fallback (Loading) mientras se cargan los componentes lazy */}
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/carneres" element={<CarneResPage />} />
            <Route path="/carnecerdo" element={<CarneCerdoPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Chatbot />
      </div>
      <Footer />
    </>
  );
}

export default App;
