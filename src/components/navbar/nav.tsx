import "./nav.scss";
import { Ellipsis, Link, ArrowDownToLine } from "lucide-react";

export const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-section">
        <div className="nav-left">
          <span className="logo">Cortex</span>
        </div>

        <div className="nav-right">
          <span className="nav-icon-btn">
            <Link size={18} />
          </span>
          <span className="nav-icon-btn">
            <ArrowDownToLine size={18} />
            Export Chat
          </span>
          <span className="nav-icon-btn">
            <Ellipsis size={18} />
          </span>
          <span>
            <button className="nav-upgrade-btn">Upgrade</button>
          </span>
        </div>
      </div>
    </div>
  );
};
