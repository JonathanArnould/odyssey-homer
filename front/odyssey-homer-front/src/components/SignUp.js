import React, { useState } from "react";

const SignUp = () => {
  const [userInfos, setUserInfos] = useState({
    email: "",
    password: "",
    passworbis: "",
    firstname: "",
    lasname: "",
  });

  const updateUserInfosField = (e) => {
    setUserInfos({ ...userInfos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfos);
  };

  return (
    <div>
      <h1>{JSON.stringify(userInfos, 1, 1)}</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <legend>Enter your informations!</legend>
          <input
            type="email"
            name="email"
            placeholder="Enter e-mail please"
            onChange={(e) => updateUserInfosField(e)}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password please"
            onChange={(e) => updateUserInfosField(e)}
          />
          <input
            type="passwordbis"
            name="passwordbis"
            placeholder="Verify password please"
            onChange={(e) => updateUserInfosField(e)}
          />
          <input
            type="firstname"
            name="firstname"
            placeholder="Enter your firstname please"
            onChange={(e) => updateUserInfosField(e)}
          />
          <input
            type="lastname"
            name="lastname"
            placeholder="Enter your lastname please"
            onChange={(e) => updateUserInfosField(e)}
          />
          <input type="submit" value="Valider" />
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;
