import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const onBtnIncreaseClicked1 =() => setNum(num + 1);
  const onBtndecreaseClicked =() => setNum(num - 1);

  return (
    <>
      NUM : {num}
      <br/>
      <button onClick={onBtnIncreaseClicked1}>+1</button>
      <button onClick={() => setNum(num + 10)}>+10</button>
      <button onClick={onBtndecreaseClicked}>-1</button>
      <button onClick={() => setNum(num - 10)}>-10</button>
    </>
  );
}

export default App;