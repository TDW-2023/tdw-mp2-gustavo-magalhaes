import React, { useState, useRef, useEffect } from "react";
import {
  DropdownMenu,
  NavItem,
  DropdownContent,
  DropdownItem,
  METLogoImage,
} from "./styles";
import ChevronDown from "../assets/img/chevron-down.svg";

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsOpen(!isOpen);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <DropdownMenu
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onKeyDown={handleKeyPress}
      tabIndex="0"
    >
      <NavItem tabIndex="0">
        <METLogoImage
          src={require("../assets/img/MET_logo.png")}
          alt="MET's logo"
        />
        ART Departments <img src={ChevronDown} alt="Chevron down" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform .4s' }} />
      </NavItem>

      <DropdownContent open={isOpen}>
        {items.map((item) => (
          <DropdownItem
            to={`/department/${item.departmentId}`}
            tabIndex="0"
            key={item.departmentId}
          >
            {item.displayName}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownMenu>
  );
};

export default Dropdown;
