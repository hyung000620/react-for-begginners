import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  return (
    <div>
      <h1>My Todos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          type="text"
          value={toDo}
          />
        <button>Add To Do</button>
      </form>
      
    </div>
  );
}

export default App;
