import React, {useState,useRef} from "react";

export default function RefEx() {
  const noInputRef = useRef(null);
  const [no, setNo] = useState("");

  const [recordedNos, setRecordedNos] = useState([5, 10, 20, 30, 25, 15, 5, 10]);

  const saveNo = () => {
    if (no === "") {
      alert("숫자를 입력해주세요.");
      return;
    }

    setRecordedNos([...recordedNos, no]);
    setNo("");
    noInputRef.current.focus();
  };

  const removeNo5 =() =>{
    const newRecordedNos = recordedNos.filter((el) => el != 5);
    setRecordedNos(newRecordedNos);
  }

  const removeNo = (index) =>{
    setRecordedNos(recordedNos.filter((_, _index)=> _index != index));
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveNo();
        }}
      >
        <input
          type="number"
          ref={noInputRef}
          value={no}
          onChange={(e) => setNo(e.target.valueAsNumber)}
        />
        <button type="submit">기록</button>
      </form>

      <hr />

      <h1>기록된 숫자 v1</h1>
      {recordedNos.join(",")}
      <ul>
        {recordedNos.map((el,index)=>(
          <li key={index}>
            <span style={{ width: 50, display: "inline-block" }}>{el}</span>
            <span style={{ width: 50, display: "inline-block" }}>{index}</span>
            <button onClick={()=> removeNo(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}

