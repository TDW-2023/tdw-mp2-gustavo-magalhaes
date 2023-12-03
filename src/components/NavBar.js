import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDepartments } from "../globalComponents/features/DepartmentSlice";
import PropTypes from "prop-types";
import { Navbar as StyledNavbar, NavItem, RightAlignedItems } from "./styles";
import Dropdown from "./Dropdown";
import HomeButton from "../assets/img/icons8-home.svg";
import FavoriteButton from "../assets/img/free-favourite-icon-2765-thumb.svg";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const departments = useSelector((state) => state.department.entities);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);

  return (
    <StyledNavbar>
      <Dropdown items={departments} />
      <RightAlignedItems>
        {location.pathname !== "/" && (
          <NavItem>
            <Link to="/">
              <img src={HomeButton} alt="Home button" />
            </Link>
          </NavItem>
        )}
        <NavItem>
          <Link to="/favorites">
            <img src={FavoriteButton} alt="Favorite button" />
          </Link>
        </NavItem>
      </RightAlignedItems>
    </StyledNavbar>
  );
};

Navbar.propTypes = {
  departments: PropTypes.array,
};

export default Navbar;
