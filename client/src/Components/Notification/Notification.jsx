import { Wrapper } from "./Notification.styles";
export const Notification = ({ message }) => {
  return (
    <Wrapper>
      <p>{message}</p>
      <button>X</button>
    </Wrapper>
  );
};
