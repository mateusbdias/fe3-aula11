import { Formik } from "formik";
import { ReactJsAlert } from "reactjs-alert";

function App() {
  return (
    <Formik
      // Valores iniciais do form 
      initialValues={{ email: "" }}
      // Função de submissão do form
      onSubmit={(values) => alert(values.email)}
      // Validação de campos
      validate={(values) => {
        const errors = {};

        if(values.telefone && !/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/i.test(values.telefone)){
          errors.telefone = "Telefone inválido";
        }

        if(!values.email){
          errors.email = "Campo obrigatório";
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
          errors.email = "Email inválido";
        }

        return errors;
      }}
    >
      {({ handleSubmit, handleChange, errors }) => (
        <form onSubmit={handleSubmit}>
          <label>Nome: </label>
          <input 
            name="nome"
            placeholder="Insira seu nome"
            onChange={handleChange}
          />
          <br />
          <label>Telefone: </label>
          <input 
            name="telefone"
            placeholder="Insira seu telefone"
            onChange={handleChange}
          />
          {errors.telefone && <span> {errors.telefone}</span>}
          <br />
          <label>Email: </label>
          <input 
            name="email" 
            placeholder="Insira seu email"
            onChange={handleChange}
          />
          {errors.email && <span> {errors.email}</span>}
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}

export default App;
