/** @format */

// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch (tailwindcss start)

import { React } from 'react';
import Clock from './Components/Clock.jsx';
import InputBox from './Components/InputBox';

function App() {
  const backGroundImg = [
    'bg0.jpeg',
    'bg1.jpeg',
    'bg2.png',
    'bg3.jpeg',
    'bg4.png',
  ];

  function onClickHandler() {
    console.log('This is working');
  }

  return (
    <>
      <div
        className={`bg-[url("../src/style/${
          backGroundImg[Math.floor(Math.random() * 5)]
        }")] bg-cover bg-center min-h-screen`}>
        <Clock />
        <InputBox onClick={onClickHandler()} />
      </div>
    </>
  );
}

export default App;
