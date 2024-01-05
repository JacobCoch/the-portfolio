// Stars.js

import React, { useEffect, useRef } from "react";

import * as THREE from "three";

function Stars({ backgroundColor = 0x0a192f }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(backgroundColor);
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        canvasRef.current.appendChild(renderer.domElement);

        const starsGeometry = new THREE.BufferGeometry();
        const starsMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 1.5,
        });
        const starsVertices = [];

        for (let i = 0; i < 1000; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;

            starsVertices.push(x, y, z);
        }

        starsGeometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(starsVertices, 3)
        );
        const stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        const animate = () => {
            requestAnimationFrame(animate);
            stars.rotation.y += -0.001;
            stars.rotation.x += -0.001;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [backgroundColor]);

    return (
        <div
            ref={canvasRef}
            style={{
                position: "fixed",
                zIndex: 0,
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
            }}
        />
    );
}

export default Stars;
