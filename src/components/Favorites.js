import React, { useEffect, useState } from "react";
import {
  ArtworkGrid,
  ArtworkContainer,
  CardTitle,
  ViewMoreButton,
  DepartmentDetailsImage,
} from "./styles.js";
import Navbar from "./NavBar.js";
import Cookies from "js-cookie";
import FavoriteButtonFilled from "../assets/img/star-filled.svg";
import { Link } from "react-router-dom";
import { getObjectById } from "../globalComponents/features/DepartmentSlice";
import FavoriteButton from "../assets/img/free-favourite-icon-2765-thumb.svg";

const Favorites = () => {
  const [allArtworks, setAllArtworks] = useState([]);
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchArtworks = async () => {
      let favoriteArtworkIds = Cookies.get("favoriteArtworkIds");
      if (favoriteArtworkIds) {
        try {
          favoriteArtworkIds = JSON.parse(favoriteArtworkIds);
        } catch (error) {
          console.error("Invalid JSON:", favoriteArtworkIds);
          favoriteArtworkIds = [];
        }
        const artworks = await Promise.all(
          favoriteArtworkIds.map(getObjectById)
        );
        setAllArtworks(artworks);
        setFilteredArtworks(artworks);
      }
      setLoading(false);
    };

    fetchArtworks();
  }, []);

  const handleToggleFavorite = (objectID) => {
    let favoriteArtworkIds = Cookies.get("favoriteArtworkIds");
    if (favoriteArtworkIds) {
      favoriteArtworkIds = JSON.parse(favoriteArtworkIds);
      const index = favoriteArtworkIds.indexOf(objectID);
      if (index > -1) {
        favoriteArtworkIds.splice(index, 1);
        Cookies.set("favoriteArtworkIds", JSON.stringify(favoriteArtworkIds));
        setAllArtworks(
          allArtworks.filter((artwork) => artwork.objectID !== objectID)
        );
        setFilteredArtworks(
          filteredArtworks.filter((artwork) => artwork.objectID !== objectID)
        );
      }
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearch(searchTerm);
    const filtered = allArtworks.filter((artwork) =>
      artwork.title.toLowerCase().includes(searchTerm)
    );
    setFilteredArtworks(filtered);
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
      {loading ? (
        <h1
          style={{
            padding: "0 3rem 0",
          }}
        >
          Loading...
        </h1>
      ) : filteredArtworks.length > 0 ? (
        <>
          <h1
            style={{
              padding: "0 3rem 0",
            }}
          >
            Your Favorite Artworks
          </h1>
          <div style={{ marginBottom: "1rem", padding: "2rem" }}>
            <input
              type="text"
              placeholder="Search favorite artworks"
              value={search}
              onChange={handleSearch}
              style={{ padding: "0.5rem" }}
            />
          </div>
          <ArtworkGrid>
            {filteredArtworks.map((artwork) => (
              <ArtworkContainer key={artwork.objectID}>
                <CardTitle>{artwork.title}</CardTitle>
                {artwork.isPublicDomain &&
                artwork.isPublicDomain.toString() === "true" ? (
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
                    alignItems: "center",
                    width: "90%",
                  }}
                >
                  <Link to={`/artwork/${artwork.objectID}`}>
                    <ViewMoreButton>View More</ViewMoreButton>
                  </Link>
                  <Link>
                    <img
                      src={FavoriteButtonFilled}
                      alt="Favorite button"
                      onClick={() => handleToggleFavorite(artwork.objectID)}
                    />
                  </Link>
                </div>
              </ArtworkContainer>
            ))}
          </ArtworkGrid>
        </>
      ) : (
        <h1
          style={{
            padding: "0 3rem 0",
          }}
        >
          <div style={{ marginBottom: "1rem", padding: "2rem" }}>
            <input
              type="text"
              placeholder="Search favorite artworks"
              value={search}
              onChange={handleSearch}
              style={{ padding: "0.5rem" }}
            />
          </div>
          {search
            ? "No matching artworks found."
            : "You don't have any favorites yet. Use the star on the images to add favorites "}
          <img src={FavoriteButton} alt="Favorite button" />
          <img src={FavoriteButtonFilled} alt="Favorite button" />
        </h1>
      )}
    </div>
  );
};

export default Favorites;
