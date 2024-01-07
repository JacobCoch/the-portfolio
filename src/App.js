import React, { useState, useEffect } from "react";

import "./App.css";
import About from "./components/About/About";
import EarthCanvas from "./components/Canvas/Earth";
import Stars from "./components/Canvas/Stars";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";

function App() {
    const [loadingComplete, setLoadingComplete] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // First timeout for Earth model display
        setTimeout(() => {
            setLoadingComplete(true);
        }, 5000);

        // Second timeout for content display
        setTimeout(() => {
            setShowContent(true);
        }, 6000);
    }, []);

    return (
        <main style={{ backgroundColor: "#0a192f" }}>
            <EarthCanvas loading={!loadingComplete} />=
            <div
                style={{
                    opacity: showContent ? 1 : 0,
                    transition: "opacity 1.5s ease-in-out",
                    willChange: "opacity",
                }}
            >
                <Stars backgroundColor={0x0a192f} />
                <NavBar />
                <Home />
                <About />
                <Skills />
                <Work />
            </div>
        </main>
    );
}

export default App;
