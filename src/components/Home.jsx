import React from "react";
import styled from "styled-components";

export const HomeWapper = styled.div`
  margin-top: 20px;
  text-align: center;
  span {
    font-size: 50px;
    color: #15fea9;
  }
`;

const Home = () => {
  return (
    <HomeWapper>
      <span>Welcome Home Page</span>
      <br />
    </HomeWapper>
  );
};

export default Home;
