import { useState } from "react";

import { Formik } from "formik";

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
          <input 
            name="email" 
            placeholder="Email"
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}

export default App;
