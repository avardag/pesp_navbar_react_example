import React, { useState } from "react";
import styled from "styled-components";
import Accessibility from "./accessibility";
import MenuToggle from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  /* mobile: */
  ${({ isMobile }) =>
    isMobile &&
    `
  flex-direction: column;
  position: fixed;
  top: 65px;
  right: 0;
  /* width: 30%;*/ 
  `}
`;
const LinkItem = styled.li`
  width: ${(props) => props.isMobile && "100%"};
  height: ${(props) => (props.isMobile ? "20px" : "100%")};
  padding: 0 1.1rem;
  color: #222;
  font-weight: 500;
  font-size: ${(props) => (props.isMobile ? "16px" : "14px")};
  display: flex;
  align-items: ${(props) => (props.isMobile ? "flex-start" : "center")};
  justify-content: ${(props) => (props.isMobile ? "flex-start" : "center")};

  ${({ isMobile }) =>
    isMobile
      ? `margin: 1em;`
      : `
    border-bottom: 2px solid transparent;
    transition: all 200ms ease-in-out;
    &:hover {
      border-bottom: 2px solid #54a0ff;
    }
    `}
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;
const Marginer = styled.div`
  height: 1em;
`;
const renderSideBar = (isMobile = false) => (
  <>
    <LinksWrapper isMobile={isMobile}>
      <LinkItem isMobile={isMobile}>
        <Link href="#">Products</Link>
      </LinkItem>
      <LinkItem isMobile={isMobile}>
        <Link href="#">Services</Link>
      </LinkItem>
      <LinkItem isMobile={isMobile}>
        <Link href="#">Explore</Link>
      </LinkItem>
      <LinkItem isMobile={isMobile}>
        <Link href="#">About Us</Link>
      </LinkItem>
      <Marginer />
      {isMobile && (
        <>
          <Marginer />
          <Accessibility />
        </>
      )}
    </LinksWrapper>
  </>
);
export default function NavLinksMobile({ isMobile }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavLinksContainer>
      {isMobile ? (
        <>
          <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
          {isOpen && renderSideBar(isMobile)}
        </>
      ) : (
        renderSideBar()
      )}
    </NavLinksContainer>
  );
}
