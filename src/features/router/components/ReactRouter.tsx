import { Routes, Route } from "react-router";
import "./ReactRouter.css";
import Home from "./pages/Home.tsx";
import Aboutpage from "./pages/Aboutpage.tsx";
import Blogpage from "./pages/Blogpage.tsx";
import Layout from "./Layout.tsx";
export default function ReactRouter() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/posts" element={<Blogpage />} />
        </Route>
      </Routes>
    </>
  );
}
