/** @format */

import React from 'react';
import styled from 'styled-components';
import img1 from '../Styles/img1.webp';
import img2 from '../Styles/img2.webp';
import img3 from '../Styles/img3.webp';
import img4 from '../Styles/img4.webp';
import img5 from '../Styles/img5.jpeg';

const backgroundImg = [img1, img2, img3, img4, img5];
let randomNum = Math.floor(Math.random() * 4);

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${backgroundImg[randomNum]}) no-repeat center;
  background-size: cover;
  z-index: 1;
`;

const TodoTemplate = () => {
  return (
    <div>
      <Background />
    </div>
  );
};

export default TodoTemplate;
