import { Nav, HamburgerMenu } from "./Navigation.styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const handleBurgerMenu = () => {
    setOpen((open) => !open);
  };
  const props = useSpring({
    transform: open ? "translateX(0)" : "translate(-110%)",
  });
  return (
    <>
      <Nav as={animated.nav} style={props}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </Nav>
      <HamburgerMenu onClick={handleBurgerMenu}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerMenu>
    </>
  );
};
