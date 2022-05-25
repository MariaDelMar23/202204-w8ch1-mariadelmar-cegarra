import React from "react"
import styled from "styled-components"

const Container = styled.div`
*{
  margin: 0px;
  padding: 0px;
}
#background-container{
  background-image: url("/public/background.jpg");
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#header-title{
  color: yellow;
  font-size: 3rem;
  margin: 3rem;
}
#main-container{
  width: 50vw;
  min-height: 50vh;
  padding: 1rem;
  border: 2px solid white;
  background-color: black;
  border-radius: 10px;
  color: white;
}

`

function App() {
  return (
    <Container id="background-container">
        <header id="header-title">
            Star Wars Test
        </header>
        <main id="main-container">
            <h2>Starships:</h2>
            <p id="total-ships">Total ships: </p>
            <h2>Starships by class:</h2>
        </main>
    </Container>
  );
}

export default App;
