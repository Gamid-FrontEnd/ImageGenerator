import "./App.css";
import HeaderStyles from "./components/Header";
import { ImageGenerator } from "./components/ImageGenerator";
import { ImageOutput } from "./components/ImageOutput";
import { AppStyle, GeneratorStyles } from "./components/styles";

function App() {
  return (
    <AppStyle>
      <HeaderStyles />
      <GeneratorStyles>
        <ImageGenerator />
        <ImageOutput />
      </GeneratorStyles>
    </AppStyle>
  );
}

export default App;
