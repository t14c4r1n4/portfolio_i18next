import { Outlet } from "react-router-dom";
import ScrollProgress from "./assets/components/scrollProgressBar";
import Footer from "./assets/components/footer";
import Page from './assets/sections/page'
import Navbar from "./assets/components/navbar";
import useMediaQuery from "./assets/components/useMediaQuery";
import "./index.css";

function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {isMobile ? (
          <>
            <ScrollProgress />
            <Page />
          </>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer className="bottom-0" />
    </div>
  );
}

export default App;
