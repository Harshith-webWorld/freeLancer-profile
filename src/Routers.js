import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Routers() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="Flex-column">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>Not Found ewith Route</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routers;

const Home = () => {
  return <h1>--- Home page ---</h1>;
};

const About = () => {
  return <h1>--- About page ---</h1>;
};

const Contact = () => {
  return <h1>--- Contact page ---</h1>;
};
