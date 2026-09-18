import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth as Auth } from "../../firebase";

export const doCreateUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  return createUserWithEmailAndPassword(Auth, email, password);
};

export const doSignInWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  return signInWithEmailAndPassword(Auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(Auth, provider);

  return result;
};

export const doSignOut = () => {
  return Auth.signOut();
};

// export const doPasswordReset = (email) => {
//   return sendPasswordResetEmail(Auth, email);
// };

// export const doPasswordChange = (password) => {
//   return updatePassword(Auth.currentUser, password);
// };

// export const doSendEmailVerification = () => {
//   return sendEmailVerification (Auth.currentUser  {url : `${window.location.origin}/home`;
//   });
// };
