import { useState, useRef } from "react";
import Layout from "../components/Layout/Layout";
import { useAuth, currentUser } from "../contexts/AuthContext";

const auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signup, currentUser } = useAuth();

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  console.log("fssdfd", currentUser);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      console.log(error);

      setError("Failed to create an account");
    }
    setLoading(false);
  };

  const handleSwitch = () => {
    setIsSignup((prevState) => !prevState);
  };

  return (
    <Layout>
      <h2>Auth</h2>
      {currentUser && <p>{currentUser.email}</p>}
      {error && <h3>{error}</h3>}
      <form action="" onSubmit={handleSubmit}>
        {isSignup && (
          <>
            <label htmlFor="name">
              <input name="name" type="text" placeholder="name" ref={nameRef} />
            </label>
            <label htmlFor="phone">
              <input
                name="phone"
                type="text"
                placeholder="phone number"
                ref={phoneRef}
              />
            </label>
          </>
        )}
        <label htmlFor="email">
          <input name="email" type="text" placeholder="email" ref={emailRef} />
        </label>
        <label htmlFor="password">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            ref={passwordRef}
          />
        </label>
        {isSignup && (
          <label htmlFor="password-confirm">
            <input
              name="password-confirm"
              type={showPassword ? "text" : "password"}
              placeholder="confirm password"
              ref={passwordConfirmationRef}
            />
          </label>
        )}
        <button disabled={loading} onSubmit={handleSubmit} type="submit">
          {isSignup ? "Sign up" : "Sign in"}
        </button>
      </form>
      <div className="switchModeWrapper">
        {isSignup ? (
          <>
            <p>Already have an account?</p>
            <button onClick={handleSwitch}>Sign in</button>
          </>
        ) : (
          <>
            <p>Don't have an account?</p>
            <button onClick={handleSwitch}>Sign up</button>
          </>
        )}
      </div>
    </Layout>
  );
};

export default auth;
