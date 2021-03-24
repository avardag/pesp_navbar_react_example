import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { DeviceSizes } from "../responsive";
import Logo from "../logo";
import Accessibility from "./accessibility";
import NavLinksMobile from "./navlinksMobile";

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 1 1.5rem;
`;
const LeftSection = styled.div`
  display: flex;
`;
const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
`;
const RightSection = styled.div`
  display: flex;
`;

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSizes.mobile });
  return (
    <NavbarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>
        {!isMobile && <NavLinksMobile isMobile={isMobile} />}
      </MiddleSection>
      <RightSection>
        {isMobile ? <NavLinksMobile isMobile={isMobile} /> : <Accessibility />}
      </RightSection>
    </NavbarContainer>
  );
}
// export function Navbar(props) {
//   const isMobile = useMediaQuery({ maxWidth: DeviceSizes.mobile });
//   return (
//     <NavbarContainer>
//       <LeftSection>
//         <Logo />
//       </LeftSection>
//       <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
//       <RightSection>
//         {isMobile ? <NavLinksMobile /> : <Accessibility />}
//       </RightSection>
//     </NavbarContainer>
//   );
// }
