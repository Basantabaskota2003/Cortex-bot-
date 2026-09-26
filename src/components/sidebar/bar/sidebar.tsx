import "./sidebar.scss";
import {
  Search,
  PanelLeftClose,
  PanelLeft,
  Plus,
  Globe,
  BookCopy,
  FolderOpen,
  RotateCcw,
  LogOut,
} from "lucide-react";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { auth } from "../../../firebase/firebase";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chathistory } from "../chat history/chathistory";

export const Sidebar = () => {
  const nav = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const tooglesidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      nav("/login");
    } catch (error) {
      console.error("Error Signing Out:", error);
    }
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
        <input
          type="text"
          placeholder="Search"
          className="sidebar-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="sidebar-feature">
        <span className="sidebar-featureitem" onClick={() => nav("/explore")}>
          <Globe size={16} />
          <span className="sidebar-explore">Explore</span>
        </span>
        <span className="sidebar-featureitem" onClick={() => nav("/library")}>
          <BookCopy size={16} />
          <span className="sidebar-library">Library</span>
        </span>
        <span className="sidebar-featureitem" onClick={() => nav("/files")}>
          <FolderOpen size={16} />
          <span className="sidebar-files">Files</span>
        </span>
        <span className="sidebar-featureitem" onClick={() => nav("/history")}>
          <RotateCcw size={16} />
          <span className="sidebar-history">History</span>
        </span>

        <div className="sidebar-chathistory">
          <Chathistory searchProp={searchQuery} />
        </div>
      </div>

      <div className="sidebar-userprofile">
        {loading ? (
          <div className="sidebar-loading">
            <span>Loading profile...</span>
          </div>
        ) : user ? (
          <div className="sidebar-usercontent">
            <div className="sidebar-userphoto">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Avatar"
                  className="sidebar-avatar"
                />
              ) : (
                <div className="sidebar-avatar-placeholder">
                  {(
                    user.displayName?.charAt(0) ||
                    user.email?.charAt(0) ||
                    "U"
                  ).toUpperCase()}
                </div>
              )}
              <div className="sidebar-useremail">
                <span className="sidebar-username">
                  {user.displayName || user.email?.split("@")[0] || "User"}
                </span>
                <span className="sidebar-emailtext">{user.email}</span>
              </div>

              <button
                className="sidebar-logout-btn"
                onClick={handleLogout}
                title="Log Out"
              >
                <LogOut size={16} />
              </button>
            </div>
          </div>
        ) : (
          <div className="sidebar-user-status" onClick={() => nav("/login")}>
            <span>Sign In</span>
          </div>
        )}
      </div>
    </div>
  );
};
