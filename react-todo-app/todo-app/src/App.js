/** @format */

import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './Components/\bGlobalStyle';
import TodoTemplate from './Components/TodoTemplate';
import Timer from './Components/Timer';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <h2>Hello World</h2>
      <TodoTemplate></TodoTemplate>
      <h2>Hello World</h2>
    </div>
  );
};

export default App;
