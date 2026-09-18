import { doSignInWithGoogle } from "../firebase/context/authcontext/auth";
import "./login.scss";
export const Login = () => {
  return (
    <form className="login">
      <input type="email" placeholder="Email" className="login-input" />
      <input type="password" placeholder="Password" className="login-input" />

      <button type="button" className="login-forgot-btn">
        Forgot password?
      </button>

      <button type="submit" className="login-submit-btn">
        Sign In
      </button>

      <button
        type="button"
        className="login-google-btn"
        onClick={() => doSignInWithGoogle()}
      >
        Sign in with Google
      </button>

      <button type="button" className="login-signup-btn">
        Create account
      </button>
    </form>
  );
};
