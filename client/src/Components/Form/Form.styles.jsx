import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: "Montserrat";
  width: 100%;
  color: #3d4f58;
  height: 100vh;
  img {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    img {
      display: block;
      height: 100vh;
      width: 50%;
      object-fit: cover;
      border-radius: 7px;
      margin-right: 1rem;
    }
  }
  form {
    width: 50%;
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 768px) {
    }

    label {
      font-size: 13px;
      font-weight: bold;
      line-height: 16px;
      margin-top: 0.4rem;
      margin-bottom: 0.2rem;
    }

    input {
      margin-bottom: 1rem;
      height: 43px;
      border: 1px solid #3d4f58;
      border-radius: 7px;
    }

    span {
      margin: 0.3rem 0 0.2rem 0;
      color: #dc3211;
    }

    button {
      width: 100%;
      border: none;
      height: 3rem;
      font-weight: bold;
      border-radius: 7px;
      background-color: #dc3211;
      color: white;
      margin-top: 1.5rem;
    }
  }
`;

export const Title = styled.h1`
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 55px;
`;

export const InfoInputs = styled.div`
  @media only screen and (min-width: 768px) {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const Inputs = styled.div`
  @media only screen and (min-width: 768px) {
    width: 48.35%;
    display: flex;
    flex-direction: column;
  }
`;
