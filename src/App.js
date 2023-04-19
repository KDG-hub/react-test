import React, {useState} from "react";


export default function App() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    form.name.value = form.name.value.trim();
    form.age.value = form.age.value.trim();

    if(form.name.value.length === 0){
      alert("이름을 입력해주세요.")
      form.name.focus();
      return;
    }
    if(form.age.value.length === 0){
      alert("나이를 입력해주세요.")
      form.age.focus();
      return;
    }

    const name = form.name.value;
    const age = form.age.valueAsNumber;
    alert(`이름 : ${name}, 나이 : ${age}`);

    form.name.value = "";
    form.age.value = "";
    
    name.focus();
  };
  return (
    <>
      <form onSubmit = {onSubmit}>
        <input type="text" name="name" placeholder="이름을 입력해주세요." />
        <br />
        <input type="text" name="age" placeholder="나이를 입력해주세요." />
        <br />
        <input type="submit" value="전송"/>
      </form>
    </>
  );
}
