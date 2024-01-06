// Loader.jsx

import React, { useEffect, useState } from "react";

import EarthCanvas from "../Canvas/Earth";

import "../../App.css";

function Loader({ onLoadingComplete }) {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setFadeOut(true);
            const completionTimeout = setTimeout(() => {
                onLoadingComplete();
            }, 1000); // Adjust the time (in milliseconds) as needed

            return () => {
                clearTimeout(completionTimeout);
            };
        }, 5000); // Adjust the time (in milliseconds) as needed

        return () => {
            clearTimeout(loadingTimeout);
        };
    }, [onLoadingComplete]);

    return (
        <div className={`loader ${fadeOut ? "fade-out" : ""}`}>
            <EarthCanvas />
        </div>
    );
}

export default Loader;
