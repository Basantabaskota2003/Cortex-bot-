import { useState } from "react";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/context/authcontext/auth";
import "./login.scss";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError("");

    try {
      await doSignInWithEmailAndPassword(email, password);
    } catch (err: any) {
      setError(err.message || "Failed to sign in.");
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError("");
    try {
      await doSignInWithGoogle();
    } catch (err: any) {
      setError(err.message || "Google Sign-In failed.");
      setIsSubmitting(false);
    }
  };

  const handleSignUp = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError("");
    try {
      await doCreateUserWithEmailAndPassword(email, password);
    } catch (err: any) {
      setError(err.message || "Failed to create account.");
      setIsSubmitting(false);
    }
  };

  return (
    <form className="login" onSubmit={handleSignIn}>
      {error && (
        <p className="login-error-msg" style={{ color: "red" }}>
          {error}
        </p>
      )}

      <input
        type="email"
        placeholder="Email"
        className="login-input"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="login-input"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="button"
        className="login-forgot-btn"
        disabled={isSubmitting}
      >
        Forgot password?
      </button>

      <button
        type="submit"
        className="login-submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Sign In"}
      </button>

      <button
        type="button"
        className="login-google-btn"
        disabled={isSubmitting}
        onClick={handleGoogleSignIn}
      >
        Sign in with Google
      </button>

      <button
        type="button"
        className="login-signup-btn"
        disabled={isSubmitting}
        onClick={handleSignUp}
      >
        Create account
      </button>
    </form>
  );
};
