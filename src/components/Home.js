import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDepartments } from "../globalComponents/features/DepartmentSlice";
import PropTypes from "prop-types";
import { Navbar, HomeContainer, BackgroundImage, UALogoImage } from "./styles";
import { CenterLinks } from "./CenterLinks";
import Dropdown from "./Dropdown";

const Home = () => {
  const dispatch = useDispatch();
  const departments = useSelector((state) => state.department.entities);

  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);

  return (
    <HomeContainer>
      <BackgroundImage
        tabIndex="0"
        src={require("../assets/img/Self_portrait_with_Felt_Hat.jpg")}
        alt="Van Gogh's self portrait"
      />
      <CenterLinks />
      <Navbar>
        <Dropdown items={departments} />
      </Navbar>
      <UALogoImage
          src={require("../assets/img/logomarca_aveiro-removebg-preview.png")}
          alt="Aveiro's logo"
        />

    </HomeContainer>
  );
};

Home.propTypes = {
  departments: PropTypes.array,
};

export default Home;
