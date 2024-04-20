import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { AboutAIStyles, Menu } from "../styles";
import WhatIsAI from "./WhatIsAI";
import HowItWorks from "./HowItWorks";

function Model(props) {
  const { scene } = useGLTF("/robot_004.glb");
  return <primitive object={scene} {...props} />;
}

const AboutAI = () => {
  const [xPosition, setXPosition] = useState(0);
  const [xPositionCamera, setXPositionCamera] = useState("0");
  const [visibilityWhat, setVisibilityWhat] = useState("invisible");
  const [visibilityHow, setVisibilityHow] = useState("invisible");

  return (
    <AboutAIStyles>
      <Canvas
        camera={{ fov: 45 }}
        style={{
          position: "absolute",
          height: "100vh",
          top: "0",
          right: xPositionCamera,
          zIndex: "-1",
        }}
      >
        <PresentationControls
          enabled={false}
          rotation={[0, xPosition, 0]}
          zoom={0}
          polar={[-0.1, Math.PI / 4]}
          style={{
            right: xPositionCamera,
          }}
        >
          <Stage intensity={0.001} shadows="contact" environment={"city"}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>

      <div className={"info_1 " + visibilityWhat}>
        <WhatIsAI />
      </div>

      <div className={"info_2 " + visibilityHow}>
        <HowItWorks />
      </div>

      <Menu>
        <button
          onClick={() => {
            setXPosition(1);
            setXPositionCamera("100px");
            setVisibilityWhat("visible");
            setVisibilityHow("invisible");
          }}
        >
          What is AI?
        </button>
        <button
          onClick={() => {
            setXPosition(-1);
            setXPositionCamera("-500px");
            setVisibilityWhat("invisible");
            setVisibilityHow("visible");
          }}
        >
          How does image generation work?
        </button>
      </Menu>
    </AboutAIStyles>
  );
};

export default AboutAI;
