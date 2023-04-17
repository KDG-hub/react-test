import React, {useState} from "react";
export default function Popup() {
  const border = '10px solid red'
  const [popupVisble, setPopupVisble] = useState(true);
  return (
    <>
      {/* {popupVisble && <button onClick={() => setPopupVisble(false)}>팝업닫기</button>}
      {popupVisble || <button onClick={() => setPopupVisble(true)}>팝업열기</button>} */}
      <button onClick={() => setPopupVisble(!popupVisble)}>팝업{popupVisble?"닫기": "열기"}</button>
      <hr />
      {`popupVisble : ${popupVisble}`}
      {popupVisble && <div style={{width : 100, height : 100, border}}></div>}
      <button className="btn btn-primary">Button</button>
    </>
  );
}