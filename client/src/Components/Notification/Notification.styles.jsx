import styled from "styled-components";
export const Wrapper = styled.div`
  font-family: "Oswald";
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  margin-top: 1rem;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  align-items: center;
  height: 50px;
  width: 250px;
  background-color: rgba(3, 41, 64, 0.8);
  text-align: center;
  font-size: 0.9rem;

  p {
    width: 85%;
    color: white;
  }
  span {
    margin-right: 1rem !important;
  }
  button {
    margin-left: 1rem;
    border: none;
    width: 35%;
    height: 50px;
    color: white;
    /* border-top-left-radius: 7px;
    border-bottom-left-radius: 7px; */
    background-color: rgba(220, 50, 17);
  }
`;
