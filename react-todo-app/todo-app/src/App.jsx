/** @format */

// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch (tailwindcss start)

import { React } from 'react';

function App() {
  return (
    <>
      <div className='bg-[url(`../src/style/bg1.jpeg)] bg-cover bg-center min-h-screen'></div>
    </>
  );
}

export default App;
