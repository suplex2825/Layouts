import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout1 from "./components/Layout1";
import Layout2 from "./components/Layout2";
import Layout3 from "./components/Layout3";
import Layout4 from "./components/Layout4";
import Header from "./components/Header";
import Layout5 from "./components/Layout5";
import Upload1 from "./components/Upload1";
import Upload2 from "./components/Upload2";
import Upload3 from "./components/Upload3";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Layout1 />} />
        <Route path="/layout2" element={<Layout2 />} />
        <Route path="/layout3" element={<Layout3 />} />
        <Route path="/layout4" element={<Layout4 />} />
        <Route path="/layout5" element={<Layout5 />} />
        <Route path="/upload1" element={<Upload1 />} />
        <Route path="/upload2" element={<Upload2 />} />
        <Route path="/upload3" element={<Upload3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
