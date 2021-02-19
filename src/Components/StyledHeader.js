import styled from "styled-components";

// Styled component named StyledButton
const StyledHeader = styled.h1`
  font-weight: 400;
  line-height: 1.2;
  font-size: 3.5rem;
  text-shadow: 2px 2px black;
  margin-top: 0;
  margin-bottom: 0.5rem;
  text-align: center;
  color: white;
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

export default StyledHeader;
