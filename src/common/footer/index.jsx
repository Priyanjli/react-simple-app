import React from "react";
import styled from "styled-components";

const FooterWrper = styled.footer`
  width: 100%;
  background-color: #7e7676;
  line-height: 1.8;
  text-align: center;
  padding: 10px;
  color: white;
  margin-top: auto;
`;

const Footer = () => {
  return (
    <FooterWrper>
      <div class="left-text-content">
        <p>Copyright &copy; 2022 Priyanjali Co., Ltd. </p>
      </div>
    </FooterWrper>
  );
};

export default Footer;
