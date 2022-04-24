import React, { useEffect, useRef, useState } from "react";
import {
  AiOutlineSetting,
  BiBell,
  BiSearch,
  FiUser,
  HiOutlineLogout,
  RiMenu3Line,
  BiBookHeart,
} from "react-icons/all";
import Wishlist from "../Wishlist/Wishlist";
import ADMIN_PHOTO from "../../assets/images/avt_admin.png";
import "./Navbar.scss";

export default function RightNavbar() {
  const navbarButton = useRef(null);
  const [fullWidth, setFullWidth] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  /**
   * Check when the navbar takes up the full width of the screen
   *
   * @param {number} width Current width of the screen
   *
   * @returns {void} This method returns no data
   */
  const checkFullWidth = (width) => {
    const ariaExpanded = navbarButton.current.ariaExpanded;
    if (width >= 992) {
      setFullWidth(false);
    }
    if (ariaExpanded === "true" && width < 992) {
      setFullWidth(true);
    }
  };

  /**
   * Update `windowWidth` and `fullWidth` when width of the screen changes
   *
   * @returns {void} This method returns no data
   */
  useEffect(() => {
    resizeWindow();
    checkFullWidth(windowWidth);
    window.addEventListener("resize", resizeWindow);
  }, [windowWidth]);

  /**
   * Update `fullWidth` when navbar button is clicked
   *
   * @returns {void} This method returns no data
   */
  const handleShowMenu = () => {
    const ariaExpanded = navbarButton.current.ariaExpanded;
    if (ariaExpanded === "true") {
      setFullWidth(true);
    } else {
      setFullWidth(false);
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${
        fullWidth ? "w-100" : ""
      }`}
    >
      <div className="container-fluid px-0">
        <div></div>
        <button
          className="navbar-toggler border-0"
          ref={navbarButton}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-expanded="false"
          onClick={handleShowMenu}
        >
          <RiMenu3Line className="menu-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex justify-content-center search-group">
            <div className={`input-group my-3 ${fullWidth ? "w-50" : ""}`}>
              <input
                type="text"
                className="input-search border-0 rounded-pill px-3 py-2"
                placeholder="Search..."
              />
              <button className="btn-search rounded-pill">
                <BiSearch className="icon-search fs-4" />
              </button>
            </div>
          </div>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between">
                <div className="btn-group position-absolute">
                  <button
                    className="dropdown-toggle item-navbar-icon notification p-1 rounded-2 border-0 mb-2 me-0"
                    type="button"
                    id="dropdownMenuClickableInside"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    <BiBookHeart className="notification-icon fs-4" />
                    <span className="count-number position-absolute top-0 translate-middle badge rounded-pill">
                      4
                    </span>
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-lg-end position-absolute"
                    aria-labelledby="dropdownMenuClickableInside"
                  >
                    <Wishlist />
                  </ul>
                </div>

                <button className="item-navbar-icon ms-5 wishlist p-1 rounded-2 border-0">
                  <BiBell className="wishlist-icon fs-4" />
                </button>
              </div>

              <div className="nav-item dropdown">
                <div>
                  <button
                    className="btn dropdown-toggle d-flex align-items-center user-item"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={ADMIN_PHOTO}
                      alt="user avatar"
                      className="img-avatar"
                    />
                    <h6 className="px-2 name-account m-0">Admin</h6>
                  </button>
                  <ul
                    className="dropdown-menu mt-lg-2 user-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li className="my-2 menu-item py-2 px-3">
                      <FiUser className="icon fs-5" />
                      <span className="mx-2 menu-title">Profile</span>
                    </li>
                    <li className="my-2 menu-item py-2 px-3">
                      <div className="mx-1 text-link">
                        <HiOutlineLogout className="icon fs-5" />
                        <span className="mx-2 menu-title">Logout</span>
                      </div>
                    </li>
                    <li className="my-2 menu-item py-2 px-3">
                      <AiOutlineSetting className="icon fs-5" />
                      <span className="mx-2 menu-title">Setting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
