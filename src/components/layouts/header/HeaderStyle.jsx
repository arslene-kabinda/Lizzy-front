import styled from "styled-components";

export const Nav = styled.div`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  transition: 0.8s all ease-in-out;

  padding: 2rem 8rem;
  @media screen and (max-width: 960px) {
    transition: 0.8s all-in ease-in-out;
  }
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 2;
  width: 100%;

  font-family: "Poppins", sans-serif;
`;
export const NavLogo = styled.a`
  color: #fff;
  font-size: 1.9rem;
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  text-decoration: none;
  &:hover {
    color: #45ad7e;
    cursor: pointer;
  }
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: black;
    font-family: "Poppins", sans-serif;
  }
`;
export const NavItem = styled.li`
  height: 80px;
  display: flex;
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 960px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const NavLinks = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
  margin-left: 1.2rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #45ad7e;
  }
  &.active {
    color: #000000;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    margin-left: 0rem;
    &:hover {
      color: #45ad7e;
      transition: all 0.3s ease;
    }
  }
`;
