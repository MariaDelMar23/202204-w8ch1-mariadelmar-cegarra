import styled from "styled-components";

const StyledMainContainer = styled.main`
  width: 50vw;
  min-height: 50vh;
  padding: 1rem;
  border: 2px solid white;
  background-color: black;
  border-radius: 10px;
  color: white;
`;

const MainContainer = (): JSX.Element => {
  return (
    <StyledMainContainer id="main-container">
      <h2>Starships:</h2>
      <p id="total-ships">Total ships: </p>
      <h2>Starships by class:</h2>
    </StyledMainContainer>
  );
};

export default MainContainer;
