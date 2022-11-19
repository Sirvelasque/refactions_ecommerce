import { useState } from "react";

const Login = () => {
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];
  const [errorMsg, setErrorMsg] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const renderErrorMessege = (name) =>
  name === errorMsg.name && (
    <div className="error">{errorMsg.message}</div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    let {uname, pass} = document.forms[0];

    const userData = database.find((user) => user.name === uname.value)

    if(userData) {
      if(userData.password !== pass.value) {
        setErrorMsg({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMsg({ name: "uname", message: errors.uname });
    }
  }

  return (
    <div id="login">
      <form id="login_form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessege("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessege("pass")}
        </div>
        <div className="button-container">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  )
}

export default Login;