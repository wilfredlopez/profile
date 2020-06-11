import React from "react";
import Routes from "./Routes";
import SiteFooter from "./components/pages/partials/SiteFooter";
import Navigation from "components/Layout/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes />
      </main>
      <footer>
        <SiteFooter />
      </footer>
    </>
  );
}

export default App;
