import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import Header from "./Header";
import First from "./First";
import MadicalPage from "./MadicalPage";
import Use from "./Use";
import Contect from "./Contect";
import Follow from "./Follow";
import Help from "./Help";
import Footer from "./Footer";
import Animation from "./Animation";
import Everything from "./Everything";
function App() {
  return (
    <div>
      <h>Not for mobile responsive</h>
      <Header />
      <Timer />
      <First />
      <MadicalPage />
      <Animation />
      <Use />
      <Help />
      <Contect />
      <Everything />
      <Follow />
      <Footer />
    </div>
  );
}

export default App;
