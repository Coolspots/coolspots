import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Auth.module.scss';

const auth = () => {
  const { signup, login, googleAuth, currentUser } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const router = useRouter();

  if (currentUser) {
    router.push('/');
  }

  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmitSignup = async (event) => {
    event.preventDefault();
    if (!isValidEmail(emailRef.current.value)) {
      return setError('Enter a valid email');
    }
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError('Passwords do not match');
    }
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (err) {
      setError('Failed to create an account');
    }
    setLoading(false);
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    if (!isValidEmail(emailRef.current.value)) {
      return setError('Enter a valid email');
    }
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleSwitch = () => {
    setIsSignup((prevState) => !prevState);
  };

  return (
    <div className="page">
      <section className={styles.authWrapper}>
        <div className={styles.topLinkWrapper}>
          <Link href="/">coolspots</Link>
        </div>
        <div className={styles.welcomeWrapper}>
          <h3>Welcome Back!</h3>
          <p>Please sign into your account</p>
        </div>
        <div className={styles.formWrapper}>
          <form action="">
            {isSignup && (
              <>
                <label htmlFor="name">
                  <input name="name" type="text" placeholder="name" ref={nameRef} />
                </label>
                <label htmlFor="phone">
                  <input name="phone" type="text" placeholder="phone number" ref={phoneRef} />
                </label>
              </>
            )}
            <label htmlFor="email">
              <input name="email" type="email" placeholder="email" ref={emailRef} required />
            </label>
            <label htmlFor="password">
              <input
                name="password"
                type={'password'}
                placeholder="password"
                ref={passwordRef}
                required
              />
            </label>
            {isSignup && (
              <label htmlFor="password-confirm">
                <input
                  name="password-confirm"
                  type={'password'}
                  placeholder="confirm password"
                  ref={passwordConfirmationRef}
                />
              </label>
            )}
            <button
              onClick={isSignup ? handleSubmitSignup : handleSubmitLogin}
              className="mainBtn"
              disabled={loading}
              type="submit"
            >
              {isSignup ? 'Sign up' : 'Log in'}
            </button>
            {error && <span className={styles.errorMessage}>{error}</span>}
          </form>
          <div className={styles.switchModeWrapper}>
            {isSignup ? (
              <>
                <button onClick={googleAuth}>Sign in with Google!</button>
                <p>Already have an account?</p>
                <button onClick={handleSwitch}>Sign in</button>
              </>
            ) : (
              <>
                <button onClick={googleAuth}>Sign up with Google!</button>
                <p>Don't have an account?</p>
                <button onClick={handleSwitch}>Sign up</button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default auth;
