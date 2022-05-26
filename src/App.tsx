import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";

const Container = styled.div`
  background-image: url("./background.jpg");
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  #main-container {
    width: 50vw;
    min-height: 50vh;
    padding: 1rem;
    border: 2px solid white;
    background-color: black;
    border-radius: 10px;
    color: white;
  }
`;

function App() {
  return (
    <Container id="background-container">
      <Header id="header-title">Star Wars Test</Header>
      <main id="main-container">
        <h2>Starships:</h2>
        <p id="total-ships">Total ships: </p>
        <h2>Starships by class:</h2>
      </main>
    </Container>
  );
}

export default App;
