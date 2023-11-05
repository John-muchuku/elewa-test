import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';



const Navbar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top p-4 b ${visible ? "navbar-show" : "navbar-hide"}`}>
      <div className={`container-sm mt-2 border-bottom ${visible ? "border-white" : ""}`}>
        <a className="navbar-brand text-white" href="#">
          <img className="elewa-logo" src="/images/elewa.png" alt="Elewa Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ms-3">
              <Link to="/" className="link-2 link-3-hover link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover text-white fs-6" aria-current="page">
                About Us
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link to="/social_impact" className="link-2 link-3-hover link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover text-white fs-6" >
                Social Impact
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link to="/invest" className="link-2 link-3-hover link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover text-white fs-6">
                Invest
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr></hr>
    </nav>
  );
};

export default Navbar;
