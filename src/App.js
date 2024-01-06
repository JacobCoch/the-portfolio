import React, { useState } from "react";

import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Loader from "./components/Loader/Loader";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Stars from "./components/Stars/Stars";
import Work from "./components/Work/Work";

function App() {
    const [loadingComplete, setLoadingComplete] = useState(false);

    const handleLoadingComplete = () => {
        setLoadingComplete(true);
    };

    return (
        <main>
            {!loadingComplete ? (
                <Loader onLoadingComplete={handleLoadingComplete} />
            ) : (
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
