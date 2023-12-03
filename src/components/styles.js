import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

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
  animation: fadeIn 0.8s ease-in-out;

  @keyframes fadeIn {
    from {
      background-color: #839b6d;
      filter: brightness(0.1) blur(10px);
    }
    to {
      background-color: transparent;
      filter: brightness(0.6) blur(1px);
    }
  }
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
  position: fixed;
  top: 0;
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RightAlignedItems = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownContent = styled.div`
  display: ${(props) => (props.open ? "grid" : "none")};
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;
  position: absolute;
  background-color: transparent;
  border: 1px solid #ccc;
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 1rem;
  border-radius: 8px;
  backdrop-filter: blur(5px);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    position: fixed;
    height: 100%;
    overflow-y: scroll;
    min-width: unset;
    width: 200px;
  }
`;

export const DropdownItem = styled(RouterLink)`
  flex-basis: 30%;
  color: #964747;
  width: 80px;
  height: 80px;
  padding: 0.8rem;
  margin: 0.1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  background-color: #f3f3f3;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition:
    background-color 0.4s ease,
    transform 0.4s ease,
    box-shadow 0.3s ease;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    background-color: #c9d4da;
    transform: scale(1.2);
    box-shadow:
      0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const LinkContainer = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 250%);
  align-items: center;
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
  padding: 1rem;
  display: flex;
  justify-content: center;
  border-left: solid 1px #ffffff;
  transition:
    filter 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const ArtworkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  justify-items: center;
  align-items: start;
  padding: 5rem 4rem;
  grid-auto-rows: minmax(300px, 250px);
  background-color: #f0f0f0;
  grid-gap: 5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  margin: 0 2rem;
`;

export const ArtworkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 20ch; /* Ajuste o número de caracteres desejado */
  color: #000000;
`;

export const DepartmentDetailsImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 0.5rem;
`;

export const ViewMoreButton = styled.button`
  font-size: 1em;
  padding: 0.5em 2em;
  color: #964747;
  background-color: #f3f3f3;
  border: none;
  border-radius: 5px;
  box-shadow:
  0 3px 6px rgba(0, 0, 0, 0.16),
  0 3px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #c9d4da;
    box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;