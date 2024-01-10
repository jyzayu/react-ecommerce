import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//  sharing data between components from parent component
function MyButton({ count, handleClick }) {
  return (
    <div>
      <button onClick={handleClick}>Click {count} times!</button>
    </div>
  );
}

function App() {
  // using hooks ,  function starting with use called  hooks
  // You can only call Hooks at the top of your components
  const [count, setCount] = useState(1);

  function handleClick() {
    setCount(count * 2);
    console.log(count);
  }

  //  sharing data between components from parent component
  return (
    <div>
      <MyButton count={count} handleClick={handleClick} />
      <MyButton count={count} handleClick={handleClick} />
    </div>
  );
}

export default App;
