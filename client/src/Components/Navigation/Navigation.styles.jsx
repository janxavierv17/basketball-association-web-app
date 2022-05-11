import styled from "styled-components";
export const Nav = styled.nav`
  /* transform: translateX(-200%); */
  display: flex;
  font-family: "Oswald", sans-serif;
  background-color: #032940;
  position: absolute;
  height: 100vh;
  width: calc(320px - 5%);
  line-height: 6rem;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
    a {
      text-decoration: none;
      color: white;
      font-size: 4.5rem;
      font-weight: bold;
    }
  }
`;

export const HamburgerMenu = styled.button`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 15%;
  height: 10%;
  border: none;
  background-color: Transparent;
  span {
    height: 10%;
    width: 100%;
    margin-top: 3px;
    border: 1px solid black;
    background-color: white;
  }
`;
