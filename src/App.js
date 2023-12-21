import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from "./pages/work";
import About from "./pages/about";
import Project1 from "./pages/projects/project1";
import Project2 from "./pages/projects/project2";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <MainNav />
      <Routes>
          <Route index element={<Work />} />
          <Route path="/work/project1" element={<Project1 />} />
          <Route path="/work/project2" element={<Project2 />} />
          <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function MainNav() {
  return (
    <div className="border-b border-black md:mx-24 mx-6 pt-8 pb-4">
      <ul>
        <li>work</li>
        <li>about</li>
      </ul>
      <p>Divya Vasudevan</p>
      <ul>
        <li>linkedin</li>
        <li>behance</li>
        <li>email</li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <div className="border-t border-black md:mx-24 mx-6  pb-8 pt-4 text-center">
      <p>Get in Touch: divya.vasudevan1939@gmail.com</p>
      <ul>
        <li>linkedin</li>
        <li>behance</li>
        <li>email</li>
      </ul>
    </div>
  );
}