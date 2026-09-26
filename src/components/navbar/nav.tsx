import "./nav.scss";
import {
  Ellipsis,
  Link,
  ArrowDownToLine,
  Cross,
  ChevronDown,
} from "lucide-react";

export const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-section">
        <div className="nav-left">
          <span className="logo">
            <span className="nav-cross">
              <Cross />
            </span>
            Cortex <ChevronDown />
          </span>
        </div>

        <div className="nav-right">
          <span className="nav-icon-btn">
            <Ellipsis size={18} />
          </span>
          <span className="nav-icon-btn">
            <span className="nav-link">
              <Link size={18} />
            </span>
          </span>
          <span className="nav-icon-btn">
            <span className="nav-export">
              <ArrowDownToLine size={18} />
              Export Chat
            </span>
          </span>

          <span>
            <button className="nav-upgrade-btn">Upgrade</button>
          </span>
        </div>
      </div>
    </div>
  );
};
