import React, { useState, useEffect } from "react";

let AppCallCount = 0;

function App() {
  AppCallCount++;
  console.log(`AppCallCount :  ${AppCallCount}`);
  const [no, setNo] = useState(0);
  const [isdark, setIsdark] = useState(false);

  useEffect(()=> {
    const html = document.getElementsByTagName('html')[0];
    if(isdark){
      html.classList.add("dark");
    }else{
      html.classList.remove("dark");
    }
  })

  return (
    <>
      <div>
        <button className="btn btn-outline" onClick={() => setNo(no + 1)}>
          APP 버튼 : {no}
        </button>
        <hr />
        <button className="btn btn-outline" onClick={() => setIsdark(!isdark)}>
          테마토글
        </button>
        <hr />
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorem est a optio velit deserunt qui, excepturi ullam voluptas. Voluptatibus vel nisi illum molestiae doloremque, sequi libero eum ducimus minima?</div>
        <h1 className="color-primary">안녕 반가워</h1>
      </div>
    </>
  );
}

export default App;