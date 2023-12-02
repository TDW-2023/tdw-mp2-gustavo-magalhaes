import React from 'react';
import { LinkContainer, Link } from "./styles";

export const CenterLinks = () => {
  return (
    <LinkContainer>
      <li><Link tabIndex="0" target="_blank" href="https://github.com/TDW-2023/tdw-mp2-gustavo-magalhaes">My Repository</Link></li>
      <li><Link tabIndex="0" target="_blank" href="https://metmuseum.github.io/">Met Museum API</Link></li>
    </LinkContainer>
  );
};