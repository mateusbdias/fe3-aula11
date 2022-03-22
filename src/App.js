import { useState } from "react";

function App() {

  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("back-end");

  function submitForm(event) {
    event.preventDefault();
    console.log(nome + " - " + curso);
  }

  return (
    <form onSubmit={submitForm}>
      <h1>{nome} - {curso}</h1>
      <input 
        placeholder="Nome" 
        onChange={(event) => setNome(event.target.value)} 
      />
      <select 
        onChange={(event) => setCurso(event.target.value)}
        defaultValue={curso}
      >
        <option></option>
        <option value="back-end">Back End</option>
        <option value="devops">DevOps</option>
        <option value="front-end">Front End</option>
      </select>
      <input type="submit" />
    </form>
  );
}

export default App;
