import { useState } from 'react';
import Eightball from './Eightball';
import Answers from './Answers';
import Boxes from './Boxes';


function App() {
  return (
    <>
    <Eightball answers={Answers}/>
    <Boxes/>
    </>
  )
}

export default App;
