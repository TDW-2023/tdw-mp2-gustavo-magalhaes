import React from "react";
import styled from "styled-components";

const NotFoundWrapper = styled.div`
  // VAI ESTAR CAPRICHADO
`;

function NotFound() {
  return (
    <NotFoundWrapper>
      <h1>Página não encontrada</h1>
      <p>Desculpe, mas a página que você está procurando não existe.</p>
    </NotFoundWrapper>
  );
}

export default NotFound;