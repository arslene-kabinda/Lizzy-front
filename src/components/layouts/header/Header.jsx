/* eslint-disable @next/next/link-passhref */
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Link from "next/link";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import {
  MobileIcon,
  Nav,
  NavContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./HeaderStyle";
import CustomButton from "../../button/Button";
// import DeleteIcon from "@mui/icons-material/DeleteIcon";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PersonIcon from "@mui/icons-material/Person";
const Header = () => {
  const [colorChange, setColorChange] = useState(false);
  const [click, setClick] = useState(false);
  const [user, setUser] = useState();
  const handleClick = () => {
    setClick(!click);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  useEffect(() => {
    if (window) {
      const userStorage = localStorage.getItem("user");
      if (userStorage) {
        setUser(userStorage);
      }
      window.addEventListener("scroll", changeNavbarColor);
    }
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav className={colorChange ? "navbar colorChange" : "navbar"}>
          <NavContainer>
            <Link href='/'>
              <NavLogo>LIZZY</NavLogo>
            </Link>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <Link href='/salons_de_coiffure'>
                  <NavLinks> SALONS DE COIFFURE </NavLinks>
                </Link>

                <Link href='/reservations'>
                  <NavLinks> MES RESERVATIONS </NavLinks>
                </Link>

                {user && (
                  <Link href='/monSalon'>
                    <NavLinks>MON SALON </NavLinks>
                  </Link>
                )}

                <Link href='/mon_salon'>
                  <NavLinks>
                    <CustomButton isOutlined={true}>
                      Ajouter votre établissement
                    </CustomButton>
                  </NavLinks>
                </Link>
                <Link href='/MonCompte'>
                  <NavLinks>
                    <CustomButton icon={PersonIcon}>Mon compte</CustomButton>
                  </NavLinks>
                </Link>
              </NavItem>
            </NavMenu>
          </NavContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};
export default Header;
