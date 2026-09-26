import { Sidebar } from "./components/sidebar/bar/sidebar";
import { Nav } from "./components/navbar/nav";
import { Hero } from "./components/heropage/hero";
import { Login } from "./login/login";

import "./App.scss";

import { useAuth } from "./firebase/context/authcontext";

import { Routes, Route, Navigate } from "react-router-dom";
import { Explore } from "./pages/explore/explore";
import { Library } from "./pages/library/library";
import { File } from "./pages/files/file";

export const App = () => {
  const { userLoggedIn } = useAuth();

  console.log(userLoggedIn);

  if (!userLoggedIn) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-wrapper">
        <Nav />

        <main className="content-area">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />

            <Route path="/home" element={<Hero />} />

            <Route path="/explore" element={<Explore />} />

            <Route path="/library" element={<Library />} />

            <Route path="/files" element={<File />} />

            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};
