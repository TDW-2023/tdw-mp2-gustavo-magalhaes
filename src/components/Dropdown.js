import React, { useState, useRef, useEffect } from "react";
import {
  DropdownMenu,
  NavItem,
  DropdownContent,
  DropdownItem,
  METLogoImage,
} from "./styles";

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
        {" "}
        <METLogoImage
          src={require("../assets/img/MET_logo.png")}
          alt="MET's logo"
        />
        Art Departments
      </NavItem>
      <DropdownContent open={isOpen}>
        {items.map((item) => (
          <DropdownItem tabIndex="0" key={item.departmentId}>
            {item.displayName}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownMenu>
  );
};

export default Dropdown;
