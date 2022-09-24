import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const LoginPage = () => {
  const [haveAccount, setHaveAccount] = useState(true);

  const handleRegister = () => {
    setHaveAccount(false);
  };

  return (
    <div className="grid justify-center w-screen h-screen content-center">
      {haveAccount ? (
        <SignInForm onRegisterClick={handleRegister} />
      ) : (
        <SignUpForm />
      )}
    </div>
  );
};

export default LoginPage;
