import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");

  const updateEmailField = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h1>{email}</h1>
      <input
        onChange={(e) => updateEmailField(e)}
        type="email"
        name="email"
        placeholder="Enter e-mail please"
      />
    </div>
  );
};

export default SignUp;
