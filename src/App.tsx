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
import { AnimatePresence } from "framer-motion";
interface PageProps {}
export default function App({ pageProps }: { pageProps: PageProps }) {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <AnimatePresence initial={false} mode="wait" >
          <Routes>
            <Route path="/">
              <Route index element={<LandingPage />} {...pageProps} />
            </Route>
            <Route path="/contact">
              <Route index element={<Contact />} {...pageProps} />
            </Route>
            <Route path="/interests">
              <Route index element={<Interests />} {...pageProps} />
            </Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

// ReactDom.render(<App />, document.getElementById("root"));

// But he has AnimatePrescent and Component, pageProps, router but the animate precsense does