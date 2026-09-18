import { Sidebar } from "./components/sidebar/bar/sidebar";
import { Nav } from "./components/navbar/nav";
import "./App.scss";
import { Hero } from "./components/heropage/hero";
import { Login } from "./login/login";

export const App = () => {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-wrapper">
        <Nav />

        <main className="content-area">
          <Hero />
          <Login />
        </main>
      </div>
    </div>
  );
};
