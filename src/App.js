import {React, useState, useRef, useEffect} from "react";
import { AppBar, TextField, Toolbar, Button } from "@mui/material";

function useTodosState() {
  const [todos, setTodos] = useState([]);
  const lastTodoIdRef = useRef(0);

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;

    const newTodo = {
      id,
      content: newContent,
      regDate: dateToStr(new Date())
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const modifyTodo = (index, newContent) => {
    const newTodos = todos.map((todo, _index) => _index != index ? todo : { ...todo, content: newContent });
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, _index) => _index != index);
    setTodos(newTodos);
  };

  return {
    todos,
    addTodo,
    modifyTodo,
    removeTodo
  };
}

function App() {
  const todosState = useTodosState();

  useEffect(()=> {
    todosState.addTodo("운동");
    todosState.addTodo("독서");
    todosState.addTodo("공부");
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    
    form.content.value = form.content.value.trim();
    
    if ( form.content.value.length == 0 ) {
      alert('할일을 입력해주세요.');
      form.content.focus();
      
      return;
    }
    
    todosState.addTodo(form.content.value);
    form.content.value = '';
    form.content.focus();
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <div className="flex-1"></div>
          <span>My Note</span>
          <div className="flex-1"></div>
        </Toolbar>  
      </AppBar>

      <form onSubmit={onSubmit} className="flex flex-col mt-5 px-5 gap-2">
      <TextField autoComplete="off" name="content" type="text" placeholder="할일을 입력해주세요." label="할 일을 입력해 주세요." variant="outlined"/>
      <Button variant="contained" >추가</Button>
      <Button variant="contained" >취소</Button>
      </form>
      <div>
        <ul>
          {todosState.todos.map((todo) => (
            <li key = {todo.id} className="mt-10">
              <div className="flex gap-2">
                <span>번호 : {todo.id}</span>
                <span>날짜 : {todo.regDate}</span>
              </div>
              <div>{todo.content}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

//날짜 객체를 입력받아 문장 형태로 반환
function dateToStr(d) {
  const pad = (n) => {
    return n < 10 ? "0" + n : n;
  }

  return (
    d.getFullYear() +
    "-" +
    pad(d.getMonth() + 1) +
    "-" +
    pad(d.getDate()) +
    " " +
    pad(d.getHours()) +
    ":" +
    pad(d.getMinutes()) +
    ":" +
    pad(d.getSeconds())
  );
}