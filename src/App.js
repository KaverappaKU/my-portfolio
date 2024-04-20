import logo from "./logo.svg";
import "./App.css";
import "./global.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
