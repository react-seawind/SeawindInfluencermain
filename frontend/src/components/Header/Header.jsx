import React, { useEffect, useRef, useState } from "react";
import { Row } from "reactstrap";
import "./header.css";
import logo from "../../assests/Images/logo.png";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../assests/Images/home-icon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Helmet } from "react-helmet";

const nav__links = [
  {
    path: "/RF",
    display: <img className="homeicon" src={HomeIcon} alt="" />,
  },
  {
    path: "#",
    display: "Models",
    dropdown: [
      { path: "/RF/female-models", display: "Female Models" },
      { path: "/RF/male-models", display: "Male Models" },
      { path: "/RF/celebrities", display: "Celebrities" },
      { path: "/RF/kids-models", display: "Kids Models" },
    ],
  },
  {
    path: "#",
    display: "Influencer",
    dropdown: [
      { path: "/RF/female-influencer", display: "Female Influencer" },
      { path: "/RF/male-influencer", display: "Male Influencer" },
      { path: "/RF/howitwork", display: "How it Works" },
    ],
  },
  {
    path: "#",
    display: "Hire",
    dropdown: [
      { path: "/RF/hiremodel", display: "Models" },
      { path: "/RF/hireinfluencer", display: "Influencer" },
    ],
  },
  {
    path: "/RF/services", display: "Services",
  },
  // {
  //   path: "/RF/plan", display: "Plan",
  // },

  {
    path: "/RF/postCampaign",
    display: "PostCampaign",
  },
  {
    path: "/RF/contactUS",
    display: "ContactUS",
  },
  {
    path: "/RF/login",
    display: <i className="fa-sharp fa-solid fa-lock"></i>,
  },
  {
    path: "/RF/signUp",
    display: <i className="fa-sharp fa-solid fa-pen-to-square"></i>,
  },
  {
    path: "/RF/booking",
    display: "Booking",
  },
];
const nav__links_model = [
  {
    path: "/RF",
    display: <img className="homeicon" src={HomeIcon} alt="" />,
  },
  {
    path: "#",
    display: "Models",
    dropdown: [
      { path: "/RF/female-models", display: "Female Models" },
      { path: "/RF/male-models", display: "Male Models" },
      { path: "/RF/celebrities", display: "Celebrities" },
      { path: "/RF/kids-models", display: "Kids Models" },
    ],
  },
  {
    path: "#",
    display: "Hire",
    dropdown: [
      { path: "/RF/hiremodel", display: "Models" },
    ],
  },
  {
    path: "/RF/services", display: "Services",
  },
  {
    path: "/RF/postCampaign",
    display: "PostCampaign",
  },
  {
    path: "/RF/contactUS",
    display: "ContactUS",
  },
  {
    path: "#",
    display: "MyProfile",
    dropdown: [
      { path: "/RF/profile", display: "Profile" },
      { path: "/RF/changepassword", display: "Change Password" },
      { path: "/RF/logout", display: "LogOut" },
    ],
  },
]; // Replace this with your Model header links
const nav__links_influencer = [
  {
    path: "/RF",
    display: <img className="homeicon" src={HomeIcon} alt="" />,
  },
  {
    path: "#",
    display: "Influencer",
    dropdown: [
      { path: "/RF/female-influencer", display: "Female Influencer" },
      { path: "/RF/male-influencer", display: "Male Influencer" },
      { path: "/RF/howitwork", display: "How it Works" },
    ],
  },
  {
    path: "#",
    display: "Hire",
    dropdown: [
      { path: "/RF/hireinfluencer", display: "Influencer" },
    ],
  },
  // {
  //   path: "#",
  //   display: "Register",
  //   dropdown: [
  //     { path: "/RF/model", display: "Model" },
  //     { path: "/RF/influencer", display: "Influencer" },
  //     { path: "/RF/enterprise", display: "For an Enterprise" },
  //   ],
  // },
  {
    path: "/RF/services", display: "Services",
  },
  {
    path: "/RF/postCampaign",
    display: "PostCampaign",
  },
  {
    path: "/RF/contactUS",
    display: "ContactUS",
  },
  {
    path: "#",
    display: "MyProfile",
    dropdown: [
      { path: "/RF/profile", display: "Profile" },
      { path: "/RF/changepassword", display: "Change Password" },
      { path: "/RF/logout", display: "LogOut" },
    ],
  },
]; // Replace this with your Influencer header links

const Header = () => {
  const headerRef = useRef("");

  const [isDropdownOpen, setIsDropdownOpen] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);

  // ==============MOBILE=============
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // ==============MOBILE=============

  // Assume isLoggedIn is a state variable indicating user login status
  const [isLoggedIn, setIsLoggedIn] = useState(nav__links);


  const [activeNavLinks, setActiveNavLinks] = useState([]);


  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  // window.location.reload();

  useEffect(() => {
    stickyHeaderFunc();
    // const storedata = sessionStorage.getItem("InfluncerData");
    // const sessionData = JSON.parse(storedata);

    // if (sessionData !== null && typeof sessionData === 'object' && sessionData.hasOwnProperty('ResponseData')) {
    //   // const TYPE = sessionData.ResponseData.Type;
    //   const userType = sessionData.ResponseData.Type === "1" ? "influencer" : "model";
    //   setIsLoggedIn(!!sessionData);
    //   setActiveNavLinks(userType === "influencer" ? nav__links_influencer : nav__links_model);
    //   return () => {
    //     window.removeEventListener("scroll", stickyHeaderFunc);
    //   };
    // } else {
    //   console.log("Error: Unable to retrieve 'ResponseData' from sessionData.");
    // }
    // console.log(isLoggedIn);
    const storedata = sessionStorage.getItem("InfluncerData");
    const sessionData = JSON.parse(storedata);
    if (sessionData) {
      setIsLoggedIn(true);
      const TYPE = sessionData.ResponseData.Type;
      const userType = TYPE === "1" ? "influencer" : "model";
      setIsLoggedIn(!!sessionData);
      setActiveNavLinks(userType === "influencer" ? nav__links_influencer : nav__links_model);
      setIsLoggedIn(activeNavLinks)
    } else {
      // User is not logged in, show default nav__links
      setIsLoggedIn(false);
      setActiveNavLinks(nav__links);
    }
    return () => {
      window.removeEventListener("scroll", stickyHeaderFunc);
    };


  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(index);
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));

  };

  return (
    <header className="header" ref={headerRef} id="myHeader">
      <div className="container-fluid">
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <a href="/RF">
                <img src={logo} alt="" />
              </a>
            </div>
            {/* Mobile Menu */}
            <div
              className="mobile-menu text-white py-3 px-3"
              onClick={toggleMobileMenu}
            >
              <GiHamburgerMenu />
            </div>

            <nav className={`navigation ${isMobileMenuOpen ? "open" : ""}`}>
              <ul className="nav__links menu d-flex align-items-center gap">
                {/* {isLoggedIn */}
                {activeNavLinks.map((item, index) => (
                  <li key={index} className="nav__link">
                    {item.dropdown ? (
                      <div
                        className={`dropdown ${activeDropdown === index && isDropdownOpen[index]
                          ? "open"
                          : ""
                          }`}
                        onMouseEnter={() => toggleDropdown(index)}
                        onMouseLeave={() => toggleDropdown(index)}
                      >
                        <NavLink
                          to={item.path}
                          isActive={(match, location) => {
                            if (!match) {
                              setActiveDropdown(null);
                            }
                            return match;
                          }}
                          activeClassName="active__link"
                        >
                          {item.display}
                        </NavLink>
                        {isDropdownOpen[index] && (
                          <ul className="dropdown__menu">
                            {item.dropdown.map(
                              (dropdownItem, dropdownIndex) => (
                                <li
                                  key={dropdownIndex}
                                  className="dropdown__item"
                                >
                                  <NavLink
                                    to={dropdownItem.path}
                                    onClick={closeMobileMenu}
                                  >
                                    {dropdownItem.display}
                                  </NavLink>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <NavLink to={item.path} onClick={closeMobileMenu}>
                        {item.display}
                      </NavLink>
                    )}
                  </li>
                ))}

              </ul>
            </nav>
          </div>
        </Row>
      </div>
    </header>
  );
};

export default Header;