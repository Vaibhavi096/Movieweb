import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import NowPlaying from "./component/NowPlaying";
import Popular from "./component/Popular";
import Upcoming from "./component/Upcoming";
import TopRated from "./component/TopRated";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/now-playing" element={<NowPlaying />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/" element={<NowPlaying />} /> 
      </Routes>
    </Router>
  );
}

export default App;
