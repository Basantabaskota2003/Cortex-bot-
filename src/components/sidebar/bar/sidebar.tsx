import "./sidebar.scss";
import { Search } from "lucide-react";
import { PanelLeftClose } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-heading">
        <div className="sidebar-title">
          <span className="sidebar-cortex">Cortex</span>
        </div>

        <div className="sidebar-icon">
          <span className="sidebar-icons">
            <Search />
          </span>
          <span className="sidebar-icons">
            <PanelLeftClose />
          </span>
        </div>
      </div>
    </div>
  );
};
