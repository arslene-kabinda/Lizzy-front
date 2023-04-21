import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;

{/* <Nav className={colorChange ? "navbar colorChange" : "navbar"}>
<NavContainer>
  <NavLogo>ARSY</NavLogo>
  <MobileIcon></MobileIcon>
  <NavMenu>
    <NavItem>
      <Link href="/">
        <NavLinks></NavLinks>
      </Link>
      <Link href="/">
        <NavLinks> SALON DE COIFFURE </NavLinks>
      </Link>
      <Link href="/">
        <NavLinks> INSTITUTS DE BEAUTÉ </NavLinks>
      </Link>

      <Link href="/">
        <NavLinks> about</NavLinks>
      </Link>
    </NavItem>
  </NavMenu>
</NavContainer>
</Nav> */}
