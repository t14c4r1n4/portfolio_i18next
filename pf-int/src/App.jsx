import { Outlet } from "react-router-dom";
import Footer from "./assets/components/footer";
import Navbar from "./assets/components/navbar";
import { useTranslation } from "react-i18next";
import "./index.css";

function App() {
  const { t } = useTranslation();

  return (
    <div className="bg-zinc-900 text-zinc-300 bg-norepeat">
      <Navbar className="pb-12" />
      <Outlet className="py-12" />
      <Footer />
    </div>
  );
}

export default App;
