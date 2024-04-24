import React from "react";
import { ImageGenerator } from "./ImageGenerator";
import { ImageOutput } from "./ImageOutput";
import { GeneratorStyles } from "../styles";

const Generator = () => {
  return (
    <div>
      <GeneratorStyles>
        <ImageGenerator />
        <ImageOutput />
      </GeneratorStyles>
    </div>
  );
};

export default Generator;
