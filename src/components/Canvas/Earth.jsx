import React, { Suspense } from "react";

import { OrbitControls, useGLTF, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import CanvasLoader from "./Loader";

function Earth() {
    const earth = useGLTF("/planet/scene.gltf");

    const speed = 0.005; // You can adjust this value for different rotation speeds

    // This will continuously rotate the Earth model
    useFrame(() => {
        earth.scene.rotation.y += speed;
    });
    return (
        <primitive
            object={earth.scene}
            scale={1.5}
            position-y={0}
            rotation-y={-Math.PI / 2}
        />
    );
}

function EarthCanvas({ loading }) {
    const canvasStyle = loading
        ? {
              backgroundColor: "#0a192f",
              position: "fixed",
              width: "100%",
              height: "100%",
          }
        : {
              backgroundColor: "#0a192f",
              position: "fixed",
              width: "100%",
              height: "100%",

              transform: "translateY(-100%)",
              transition: "transform 1.5s ease-in-out",
          };
    return (
        <Canvas
            style={canvasStyle}
            shadows
            frameloop='always'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 40,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    autoRotate
                    enableZoom={false}
                />

                <Earth />

                <Preload />
            </Suspense>
        </Canvas>
    );
}

export default EarthCanvas;
