import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { useSelector } from "react-redux";
import { GenerationResultStyles, ImageOutputStyles } from "../styles";
import NoImageOutput from "./NoImageOutput";

import { saveAs } from "file-saver";

export const ImageOutput = () => {
  const { loading, image, noImage } = useSelector((state) => state.image);

  const downloadImage = () => {
    saveAs(image, "image.jpg");
  };

  return (
    <ImageOutputStyles>
      {noImage ? (
        <NoImageOutput />
      ) : loading ? (
        <div>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="500px"
            height="500px"
          />
        </div>
      ) : (
        image && (
          <GenerationResultStyles>
            <img src={image} alt="image_ai" height="500px" width="500px" />
            <button onClick={downloadImage}>DOWNLOAD</button>
          </GenerationResultStyles>
        )
      )}
    </ImageOutputStyles>
  );
};
