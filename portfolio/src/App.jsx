import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import DsaProfiles from "./components/DsaProfiles";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <div className="bg-orb bg-orb-one" />
      <div className="bg-orb bg-orb-two" />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <DsaProfiles />
      <Leadership />
      <Contact />
    </div>
  );
}

export default App;