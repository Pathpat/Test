import React, { useState } from "react";

import './MySignIn.module.css';
import { Login } from "./Login";
import { Register } from "./Register";

function MySignIn() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default MySignIn;
