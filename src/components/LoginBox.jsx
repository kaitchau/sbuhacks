import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const LoginBox = () => {
  const [haveAccount, setHaveAccount] = useState(true);

  const handleRegister = () => {
    setHaveAccount(false);
  };

  return (
    <>
      {haveAccount ? (
        <SignInForm onRegisterClick={handleRegister} />
      ) : (
        <SignUpForm />
      )}
    </>
  );
};

export default LoginBox;
