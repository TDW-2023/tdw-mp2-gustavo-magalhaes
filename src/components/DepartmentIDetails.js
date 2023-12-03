import React, { useEffect, useState, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchArtworks,
  fetchDepartments,
  resetArtworks,
} from "../globalComponents/features/DepartmentSlice";
import {
  DepartmentDetailsImage,
  ArtworkGrid,
  ArtworkContainer,
  CardTitle,
  ViewMoreButton,
} from "./styles";
import Navbar from "./NavBar";
import { Link } from "react-router-dom";
import { LoadingCard } from "./LoadingCard";
import FavoriteButton from "../assets/img/free-favourite-icon-2765-thumb.svg";
import FavoriteButtonFilled from "../assets/img/star-filled.svg";
import styled from "styled-components";
import Cookies from "js-cookie";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;

  &:hover {
    color: #007bff;
  }
`;

const DepartmentDetails = () => {
  const dispatch = useDispatch();
  const artworks = useSelector((state) => state.department.artworks);
  const departments = useSelector((state) => state.department.entities);
  const { id } = useParams();
  const [departmentName, setDepartmentName] = useState("");
  const [loading, setLoading] = useState(false);
  const observer = useRef();
  const [favoriteArtworkIds, setFavoriteArtworkIds] = useState([]);

  const lastArtworkElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && artworks.length) {
          setLoading(true);
          dispatch(fetchArtworks(id));
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, artworks, dispatch, id]
  );

  useEffect(() => {
    dispatch(resetArtworks());
    dispatch(fetchDepartments());
  }, [dispatch]);

  useEffect(() => {
    const department = departments.find(
      (dep) => dep.departmentId.toString() === id
    );
    if (department) {
      setDepartmentName(department.displayName);
    }
  }, [departments, id]);

  useEffect(() => {
    dispatch(resetArtworks());
    const fetchData = async () => {
      try {
        if (id) {
          await dispatch(fetchArtworks(id));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  useEffect(() => {
    const favoriteIdsString = Cookies.get("favoriteArtworkIds");
    if (favoriteIdsString) {
      const favoriteIds = JSON.parse(favoriteIdsString);
      setFavoriteArtworkIds(favoriteIds);
    }
  }, []);

  const handleToggleFavorite = (artworkId) => {
    const updatedFavorites = [...favoriteArtworkIds];
    const index = updatedFavorites.indexOf(artworkId);

    if (index !== -1) {
      updatedFavorites.splice(index, 1);
    } else {
      updatedFavorites.push(artworkId);
    }

    setFavoriteArtworkIds(updatedFavorites);
    updateCookie(updatedFavorites);
  };

  const updateCookie = (favorites) => {
    Cookies.set("favoriteArtworkIds", JSON.stringify(favorites));
  };

  return (
    <div
      style={{
        backgroundColor: "#C8C8A9",
        color: "#fff",
        minHeight: "100vh",
        paddingTop: "13.5vh",
      }}
    >
      <Navbar />
      {artworks.length === 0 ? (
        <h1
          style={{
            padding: "0 3rem 0",
          }}
        >
          Loading...
        </h1>
      ) : (
        <h1
          style={{
            padding: "0 3rem 0",
          }}
        >
          Artworks in Department: {departmentName}
        </h1>
      )}
      {artworks.length === 0 ? (
        <ArtworkGrid>
          {Array.from({ length: 50 }).map((_, i) => (
            <LoadingCard key={i} />
          ))}
        </ArtworkGrid>
      ) : (
        <ArtworkGrid>
          {artworks.map((artwork, index) => (
            <ArtworkContainer
              ref={index === artworks.length - 1 ? lastArtworkElementRef : null}
              key={artwork.objectID}
            >
              <CardTitle>{artwork.title}</CardTitle>
              {artwork.isPublicDomain.toString() === "true" ? (
                <DepartmentDetailsImage
                  src={artwork.primaryImage}
                  alt={artwork.title}
                />
              ) : (
                <>
                  <DepartmentDetailsImage
                    src={require("../assets/img/forbidden.png")}
                    alt="Not public domain"
                    style={{
                      transform: "scale(0.4)",
                      position: "relative",
                      zIndex: ""
                    }}
                  />
                  <span
                    style={{
                      color: "#000",
                      marginTop: "-24px",
                      marginBottom: "8px",
                    }}
                  >
                    Not public domain
                  </span>
                </>
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "90%",
                }}
              >
                <StyledLink to={`/artwork/${artwork.objectID}`}>
                  <ViewMoreButton>View More</ViewMoreButton>
                </StyledLink>
                <Link>
                  <img
                    src={
                      favoriteArtworkIds.includes(artwork.objectID)
                        ? FavoriteButtonFilled
                        : FavoriteButton
                    }
                    alt="Favorite button"
                    onClick={() => handleToggleFavorite(artwork.objectID)}
                  />
                </Link>
              </div>
            </ArtworkContainer>
          ))}
        </ArtworkGrid>
      )}
      {loading && (
        <h1
          style={{
            margin: "1rem 0 0",
            padding: "3rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Loading...
        </h1>
      )}
    </div>
  );
};

export default DepartmentDetails;
