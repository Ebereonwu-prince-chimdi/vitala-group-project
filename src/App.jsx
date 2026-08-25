import CtaFooter from './components/sections/CtaFooter'
import Dashboard from './components/sections/Dashboard';
import Pricing from './components/sections/Pricing'
import Triptych from './components/sections/Triptych'
import NavbarHero from "./components/sections/NavbarHero";
import About from "./components/sections/About";


function App() {

  return (
    <>
      <NavbarHero />
      <About />
      <Dashboard />
      <Triptych />
      <Pricing />
      <CtaFooter />
    </>
  );
}

export default App