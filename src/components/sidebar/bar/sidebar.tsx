import "./sidebar.scss";
import {
  Search,
  PanelLeftClose,
  PanelLeft,
  Plus,
  TicTacToe,
  Globe,
  BookCopy,
  FolderOpen,
  RotateCcw,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const nav = useNavigate();

  const [isOpen, setIsOpen] = useState(true);

  const tooglesidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-heading">
        <div className="sidebar-title">
          <span className="sidebar-cortex" onClick={() => nav("/home")}>
            Cortex
          </span>
        </div>

        <div className="sidebar-icon" onClick={tooglesidebar}>
          <span className="sidebar-icons">
            {isOpen ? <PanelLeftClose /> : <PanelLeft />}
          </span>
        </div>
      </div>

      <div className="sidebar-new" onClick={() => nav("/")}>
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
        <span className="sidebar-featureitem" onClick={() => nav("/explore")}>
          <Globe size={16} />
          <span>Explore</span>
        </span>

        <span className="sidebar-featureitem" onClick={() => nav("/library")}>
          <BookCopy size={16} />
          <span>Library</span>
        </span>

        <span className="sidebar-featureitem" onClick={() => nav("/files")}>
          <FolderOpen size={16} />
          <span>Files</span>
        </span>

        <span className="sidebar-featureitem" onClick={() => nav("/history")}>
          <RotateCcw size={16} />
          <span>History</span>
        </span>
      </div>
    </div>
  );
};
