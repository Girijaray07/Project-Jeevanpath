import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function RobotModel() {
    const { scene } = useGLTF("/Modals/roboModal.glb");
    const clonedScene = scene.clone(true);
    return <primitive object={clonedScene} scale={2} />;
}

function RobotViewer(props: any) {
    return (
        <div style={{ height: props.height, width: "20%" }}>
            <Canvas camera={{ position: [0, 1, 5], fov: 25 }}>
                <ambientLight intensity={1} />
                <directionalLight position={[2, 2, 5]} intensity={5} />
                <Suspense fallback={null}>
                    <RobotModel />
                </Suspense>
                <OrbitControls enableZoom={false} autoRotate={props.rotate} enablePan={false} autoRotateSpeed={25} reverseOrbit={true} />
            </Canvas>
        </div>
    );
}

export default RobotViewer;