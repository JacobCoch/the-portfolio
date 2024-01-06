import React from "react";

import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Stars from "./components/Stars/Stars";
import Work from "./components/Work/Work";

function App() {
    return (
        <main>
            <Stars backgroundColor={0x0a192f} />

            <NavBar />
            <Home />
            <About />
            <Skills />
            <Work />
        </main>
    );
}

export default App;
