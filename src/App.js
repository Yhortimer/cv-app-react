import "./App.css";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Interests from "./components/Interests";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Content />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Languages />
        <Interests />
      </header>
    </div>
  );
}

export default App;
