import { useState } from "react";
import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import Speakers from "./components/Speakers";
import CheckIn from "./components/CheckIn";
import Venue from "./components/Venue";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="app">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="home"><Hero /></section>
        <section id="schedule"><Schedule /></section>
        <section id="speakers"><Speakers /></section>
        <section id="checkin"><CheckIn /></section>
        <section id="venue"><Venue /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;