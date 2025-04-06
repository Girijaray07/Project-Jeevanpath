import { StrictMode } from "react";
import ReactDom from "react-dom/client";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import App from './App.tsx';
import './index.css';

const root = ReactDom.createRoot(document.getElementById("root")!);

useGLTF.preload("/Images/cute-robot-companion-glb/source/robot.glb");

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);