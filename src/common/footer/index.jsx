import React from "react";
import styled from "styled-components";

const FooterWrper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #7e7676;
  /* height: 15vh; */
  /* display: flex; */
  line-height: 1.8;
  text-align: center;
  padding: 20px;
`;

const Footer = () => {
  return (
    <FooterWrper>
      <div class="left-text-content">
        <p>
          Copyright &copy; 2022 Priyanjali Co., Ltd. - Design:{" "}
          <a rel="nofollow noopener" href="">
            TemplateMo
          </a>
        </p>
      </div>
    </FooterWrper>
  );
};

export default Footer;
