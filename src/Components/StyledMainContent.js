import styled from "styled-components";

export const Name = styled.section`
  display: flex;
  justify-content: space-between;
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Form = styled.form`
  margin: 0;
  margin-top: 30px;
  
`;

export const Label = styled.label`
  font-size: 1.125rem;
  margin-bottom: 0.1rem;
`;

export const Input = styled.input`
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 1rem;
  margin-top: 10px;
  align-self: center;
  width: 98%;
  border-radius: 0.25rem;
  border-color: rgb(226, 176, 220);
`;

export const Firstname = styled.section`
  flex: 1;
`;

export const Lastname = styled.section`
  flex: 1;
`;

export const PasswordField = styled.section`
  display: flex;
  justify-content: space-between;
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Password = styled.section`
  flex: 1;
`;

export const ConfirmPassword = styled.section`
  flex: 1;
`;

export const Date = styled.section`
  margin: auto;
  width: 101.5%;
  @media (max-width: 850px) {
    width: 100.5%
  }
`;

export const StyledButton = styled.button`
  font-size: 20px;
  margin: 30px auto;
  display: block;
  width: 100px;
  padding: 0.75rem;
  background: rgb(98, 129, 49);
  color: white;
  border-radius: 10px;
  border-color: aliceblue;
  cursor: pointer;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.15);
`;

export const Contact = styled.section`
  margin: auto;
  width: 100.6%;
  @media (max-width: 850px) {
    width: 100%
  }
`;

export const Error = styled.p`
  color: rgb(97, 41, 41);
  font-size: smaller;
`;
