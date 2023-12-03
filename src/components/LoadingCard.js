import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ArtworkContainer, CardTitle } from './styles.js';

const loading = keyframes`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

const LoadingAnimation = styled(ArtworkContainer)`
  .image-placeholder {
    width: 100%;
    height: 0;
    padding-bottom: 75%;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: ${loading} 1s infinite;
  }
`;

export const LoadingCard = () => (
  <LoadingAnimation>
    <CardTitle>Loading...</CardTitle>
    <div className="image-placeholder"></div>
    <p>Loading...</p>
  </LoadingAnimation>
);

export default LoadingCard;