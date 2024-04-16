import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { useSelector } from "react-redux";
import { ImageOutputStyles } from "./styles";

export const ImageOutput = () => {
  const { loading, image } = useSelector((state) => state.image);

  return (
    <ImageOutputStyles>
      {loading ? (
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
          <div>
            <img src={image} alt="image_ai" height="500px" width="500px" />
          </div>
        )
      )}
    </ImageOutputStyles>
  );
};
