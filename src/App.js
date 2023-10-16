import { NavBar } from "./components/NavBar.js";
import { Banner } from "./components/Banner.js";
import { Skills } from "./components/Skills.js";
import { Projects } from "./components/Projects.js";
import { Contact } from "./components/Contact.js";
import './index.css';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
