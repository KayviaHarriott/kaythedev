import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
// import '@fontsource/press-start-2p';
// import '@fontsource/ibm-plex-sans-kr';
// import '@fontsource-variable/inter'
// import "@fontsource/poppins";
// import { TicketInformation } from "./pages/TicketsInformation";
// import '@fontsource-variable/open-sans';
import "@fontsource/poppins";
import { NavigationBar } from "./components/Navigation";
import { Contact } from "./pages/Contact";
import { Interests } from "./pages/Interests";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="/contact">
            <Route index element={<Contact />} />
          </Route>
          <Route path="/interests">
            <Route index element={<Interests />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// ReactDom.render(<App />, document.getElementById("root"));
