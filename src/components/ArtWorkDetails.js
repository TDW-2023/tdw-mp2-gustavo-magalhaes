import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './NavBar';

const ArtworkDetails = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
      const data = await response.json();
      setArtwork(data);
    };

    fetchData();
  }, [id]);

  if (!artwork) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ display: 'flex' }}>
        <Navbar />
      <img src={artwork.primaryImage} alt={artwork.title} style={{ width: '50%' }} />
      <div>
        <h1>{artwork.title}</h1>
        <p>{artwork.artistDisplayName}</p>
        {/* Add more details here */}
      </div>
    </div>
  );
};

export default ArtworkDetails;