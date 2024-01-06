import React, { Suspense } from "react";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Earth() {
    const earth = useGLTF("/planet/scene.gltf");

    return (
        <primitive
            object={earth.scene}
            scale={1}
            position-y={0}
            rotation-y={0}
        />
    );
}

function EarthCanvas() {
    return (
        <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
            style={{
                backgroundColor: "#0a192f",
                position: "fixed",
                width: "100%",
                height: "100%",
            }}
        >
            <Suspense>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    enablePan={false}
                />
                <Earth />
            </Suspense>
        </Canvas>
    );
}

export default EarthCanvas;
