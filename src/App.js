import React, { useState } from "react";

import "./App.css";
import About from "./components/About/About";
import EarthCanvas from "./components/Canvas/Earth";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Stars from "./components/Stars/Stars";
import Work from "./components/Work/Work";

function App() {
    const [loadingComplete, setLoadingComplete] = useState(false);

    setTimeout(() => {
        setLoadingComplete(true);
    }, 5000);

    return (
        <main>
            <EarthCanvas loading={!loadingComplete} />
            {loadingComplete && (
                <>
                    <Stars backgroundColor={0x0a192f} />

                    <NavBar />
                    <Home />
                    <About />
                    <Skills />
                    <Work />
                </>
            )}
        </main>
    );
}

export default App;
