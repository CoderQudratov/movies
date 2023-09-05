import React from "react";

import Logo from "../../Assets/images/Logo.svg";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <header className="site-header bg-[rgb(3,37,65)]">
      <nav className="site-header__nav navigation">
        <div className="container max-w-7xl m-0 m-auto">
          <div className="navigation__inner py-6">
            <NavLink className="navigation__logo" to={"/"}>
              <img width={150} src={Logo} alt="site logo" />

              <div>
                <button className="peer px-5 py-2 bg-green-600 hover:bg-green-700 text-white">
                  Dropdown
                </button>

                {/* <!-- the menu here --> */}
                <div
                  className="hidden z-10 absolute peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg"
                >
                  <a className="px-5 py-3 hover:bg-gray-200" href="#">
                    About Us
                  </a>
                  <a className="px-5 py-3 hover:bg-gray-200" href="#">
                    Contact Us
                  </a>
                  <a className="px-5 py-3 hover:bg-gray-200" href="#">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
