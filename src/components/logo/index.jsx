import React from "react";
import styled from "styled-components";
import SparkSideLogo from "../../assests/images/spark.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const LogoImg = styled.div`
  width: 29px;
  height: 29px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const LogoText = styled.div`
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  color: #222;
  font-weight: 500;
`;
export default function Logo() {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={SparkSideLogo} alt="Spark Side Logo" />
      </LogoImg>
      <LogoText>Spark Side</LogoText>
    </LogoWrapper>
  );
}
