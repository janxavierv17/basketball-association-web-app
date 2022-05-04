import { Wrapper } from "./Notification.styles";
// import { useState } from "react";
export const Notification = ({ message }) => {
  //   const [useMessage, setUseMessage] = useState("Message goes here.");
  return (
    <Wrapper>
      <p>{message}</p>
      <button>X</button>
    </Wrapper>
  );
};
