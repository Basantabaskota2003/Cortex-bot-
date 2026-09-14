import "./sidebar.scss";
import { Search } from "lucide-react";
import { PanelLeftClose, PanelLeft } from "lucide-react";
import { Plus } from "lucide-react";
import { TicTacToe } from "lucide-react";
import { Globe } from "lucide-react";
import { BookCopy } from "lucide-react";
import { FolderOpen } from "lucide-react";
import { RotateCcw } from "lucide-react";
import { useState } from "react";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const tooglesidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-heading">
        <div className="sidebar-title">
          <span className="sidebar-cortex">Cortex</span>
        </div>

        <div className="sidebar-icon" onClick={tooglesidebar}>
          <span className="sidebar-icons">
            {isOpen ? <PanelLeftClose /> : <PanelLeft />}
          </span>
        </div>
      </div>

      <div className="sidebar-new">
        <span className="sidebar-square">
          <Plus />
          New chat
        </span>
      </div>

      <div className="sidebar-search">
        <span className="sidebar-start">
          <Search size={16} />
        </span>

        <input type="text" placeholder="Search" className="sidebar-input" />

        <span className="sidebar-end">
          <TicTacToe size={16} />
        </span>
      </div>

      <div className="sidebar-feature">
        <span className="sidebar-featureitem">
          <Globe size={16} />
          <span>Explore</span>
        </span>
        <span className="sidebar-featureitem">
          <BookCopy size={16} />

          <span> library</span>
        </span>
        <span className="sidebar-featureitem">
          <FolderOpen size={16} />
          <span>files</span>
        </span>
        <span className="sidebar-featureitem">
          <RotateCcw size={16} />
          <span>History</span>
        </span>
      </div>
    </div>
  );
};
