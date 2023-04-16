import React, {useState} from "react";

export default function Counter (){
    const [no, setNo] = useState(0);
    const noIsEvenDiv = no % 2 == 0 ? <><div>짝수입니다.</div></> : <><div>홀수입니다.</div></> 
    const Is8MultipleDiv = no%8 == 0 &&(
        <>
            <div>8의 배수입니다.</div>
        </>
    );

    return(
        <>
            숫자 : {no}
            <hr />
            <button onClick={() => setNo(no + 1)}>증가</button>
            {noIsEvenDiv}
            {Is8MultipleDiv}
        </>
    );
}