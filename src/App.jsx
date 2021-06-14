import "./App.css";
import styled from "styled-components";
import { ObjectDetector } from "./components/objectDetector";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  /*background-color: #1c2127;*/
  background-image: linear-gradient(to bottom right, blue, lightblue);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

function App() {
  return (
    <AppContainer>
      <ObjectDetector />
    </AppContainer>
  );
}

export default App;
