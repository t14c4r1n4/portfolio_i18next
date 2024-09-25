import { Outlet } from "react-router-dom";
import Footer from "./assets/components/footer";
import Page from './assets/sections/page'
import Navbar from "./assets/components/navbar";
import { useTranslation } from "react-i18next";
import useMediaQuery from "./assets/components/useMediaQuery";
import "./index.css";

function App() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="bg-zinc-900 text-zinc-300 bg-norepeat">
      <Navbar className="pb-12" />
      {isMobile ? (
        <Page />
      ) : (
        <Outlet className="py-12" />
      )}
      <Footer />
    </div>
  );
}

export default App;
