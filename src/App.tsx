import { Sidebar } from "./components/sidebar/bar/sidebar";
import { Nav } from "./components/navbar/nav";
import "./App.scss";

export const App = () => {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-wrapper">
        <Nav />

        <main className="content-area"></main>
      </div>
    </div>
  );
};
