import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading, setImage } from "../store/imageSlice";
import logo from "../image/logo_transperent.PNG";

import {
  ImageGeneratorStyles,
  LogoImageGeneratorStyles,
  LogoImageInputStyles,
} from "./styles";

const { token } = require("../config.json");

export const ImageGenerator = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const generateRandomSeed = () => {
    return Math.floor(Math.random() * 100000000000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    const randomSeed = generateRandomSeed();

    const res = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          inputs: input,
          seed: randomSeed,
        }),
      }
    );

    const blob = await res.blob();
    dispatch(setImage(URL.createObjectURL(blob)));
    dispatch(setLoading(false));
  };

  return (
    <ImageGeneratorStyles>
      <LogoImageGeneratorStyles src={logo} />
      <form onSubmit={handleSubmit}>
        <LogoImageInputStyles
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Generate</button>
      </form>
    </ImageGeneratorStyles>
  );
};
