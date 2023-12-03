
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./NavBar";
import { getObjectById } from "../globalComponents/features/DepartmentSlice";
import {
  ArtworkDetailContainer,
  ArtworkDetailImage,
  ArtworkDetailText,
  ArtworkDetailTitle,
  ArtworkDetailInfo,
} from "./styles.js";
import Cookies from "js-cookie";
import FavoriteButton from "../assets/img/free-favourite-icon-2765-thumb.svg";
import FavoriteButtonFilled from "../assets/img/star-filled.svg";

const ArtworkDetails = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [favoriteArtworkIds, setFavoriteArtworkIds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getObjectById(id);
      setArtwork(data);
    };

    fetchData();

    const favoriteIdsString = Cookies.get("favoriteArtworkIds");
    if (favoriteIdsString) {
      const favoriteIds = JSON.parse(favoriteIdsString);
      setFavoriteArtworkIds(favoriteIds);
    }
    window.scrollTo(0, 0);
  }, [id]);

  const handleToggleFavorite = (artworkId) => {
    const updatedFavorites = [...favoriteArtworkIds];
    const index = updatedFavorites.indexOf(artworkId);

    if (index !== -1) {
      updatedFavorites.splice(index, 1);
    } else {
      updatedFavorites.push(artworkId);
    }

    setFavoriteArtworkIds(updatedFavorites);
    Cookies.set("favoriteArtworkIds", JSON.stringify(updatedFavorites));
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
      {artwork ? (
        <ArtworkDetailContainer>
          {artwork.isPublicDomain ? (
            <ArtworkDetailImage
              src={artwork.primaryImage}
              alt={artwork.title}
            />
          ) : (
            <>
              <img
                src={require("../assets/img/forbidden.png")}
                alt="Not public domain"
                style={{
                  transform: "scale(0.1)",
                  margin: "-32px"
                }}
              />
            </>
          )}

          <ArtworkDetailInfo>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArtworkDetailTitle>{artwork.title}</ArtworkDetailTitle>
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
            <ArtworkDetailText>{artwork.artistDisplayName}</ArtworkDetailText>
            {artwork.artistDisplayBio && (
              <ArtworkDetailText>{artwork.artistDisplayBio}</ArtworkDetailText>
            )}
            {artwork.medium && (
              <ArtworkDetailText>Medium: {artwork.medium}</ArtworkDetailText>
            )}
            {artwork.dimensions && (
              <ArtworkDetailText>
                Dimensions: {artwork.dimensions}
              </ArtworkDetailText>
            )}
            {artwork.department && (
              <ArtworkDetailText>
                Department: {artwork.department}
              </ArtworkDetailText>
            )}
            {artwork.objectDate && (
              <ArtworkDetailText>Date: {artwork.objectDate}</ArtworkDetailText>
            )}
            {artwork.creditLine && (
              <ArtworkDetailText>
                Credit Line: {artwork.creditLine}
              </ArtworkDetailText>
            )}
          </ArtworkDetailInfo>
        </ArtworkDetailContainer>
      ) : (
        <h1
          style={{
            padding: "0 3rem 0",
          }}
        >
          Loading...
        </h1>
      )}
    </div>
  );
};

export default ArtworkDetails;
