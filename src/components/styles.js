import styled from "styled-components";

export const UALogoImage = styled.img`
  width: 7rem;
  height: 7rem;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.5rem;
`;

export const METLogoImage = styled.img`
  width: 5rem;
  height: 3rem;
  margin-right: 0.5rem;
`;

export const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: none;
  z-index: -1;
  filter: brightness(0.6) blur(1px);
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  list-style: none;
  background-color: #c9d4da;
  padding: 16px;
  font-size: 16px;
  font-weight: bolder;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 1px 2px 8px #000000;
`;

export const NavItem = styled.li`
  margin: 0;
  padding: 10px;
  color: #a65050;
  cursor: pointer;
  transition:
    opacity 1.3s ease-in-out,
    transform 1.3s ease-in-out;
  font-size: 24px;
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.open ? 0.3 : 1)};
  filter: ${(props) => (props.open ? "blur(0.3px)" : "none")};
  &:hover {
    opacity: 0.3;
    filter: blur (0.3);
  }
`;

export const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownContent = styled.div`
  display: ${(props) => (props.open ? "grid" : "none")};
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  position: absolute;
  background-color: #f1f1f1;
  opacity: 0.8;
  min-width: 480px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 1rem;
  border-radius: 4px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    position: fixed;
    height: 100%;
    overflow-y: scroll;
    min-width: unset;
    width: 200px;
  }
`;

export const DropdownItem = styled.a`
  flex-basis: 30%;
  color: black;
  padding: 0.5rem;
  margin: 0.1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  color: #bb1818;
  &:hover {
    background-color: #ddd;
    border-radius: 4px;
  }
`;

export const LinkContainer = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 250%);
  display: flex;
  align-items: center;
  gap: 1rem;
  display: flex;
  margin-bottom: 0;
  list-style: none;
  padding-left: 0;
  border: solid 1px #ffffff;
  border-radius: 4px;

  @media (max-width: 720px) {
    transform: translate(-50%, 50%);
  }
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.3s;
  padding: 1rem;
  display: flex;
  justify-content: center;
  border-left: solid 1px #ffffff;
  &:hover {
    color: #ddd;
  }
`;
