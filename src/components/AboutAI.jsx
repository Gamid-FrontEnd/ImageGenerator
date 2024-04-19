import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { AboutAIStyles } from "./styles";

function Model(props) {
  const { scene } = useGLTF("/robot_004.glb");
  return <primitive object={scene} {...props} />;
}

const AboutAI = () => {
  const [xPosition, setXPosition] = useState(0);
  return (
    <AboutAIStyles>
      <Canvas
        camera={{ fov: 45 }}
        style={{
          position: "absolute",
          height: "100vh",
          top: "0",
          zIndex: "-1",
        }}
      >
        <PresentationControls
          enabled={false}
          rotation={[0, xPosition, 0]}
          zoom={0}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage intensity={0.001} shadows="contact" environment={"sunset"}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>

      <button onClick={() => setXPosition(1)}>click</button>
      <button onClick={() => setXPosition(0)}>onClick</button>
    </AboutAIStyles>
  );
};

export default AboutAI;
