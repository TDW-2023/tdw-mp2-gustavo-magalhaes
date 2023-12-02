import React from "react";
import { Provider } from "react-redux";
import store from "./globalComponents/features/store";
import Home from "./components/Home";
import GlobalStyle from "./globalComponents/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
