import { Login } from "../../login/login";
import { Herocard } from "../cards/herocard/herocard";
import "./hero.scss";
import {
  Atom,
  Cpu,
  Globe,
  Mic,
  Images,
  Lightbulb,
  ChartPie,
  Flashlight,
} from "lucide-react";

export const Hero = () => {
  const data = [
    {
      icon: <ChartPie />,
      title: "Synthesize Data",
      desc: "Turn my meeting notes into 5 key bullet points for the team.",
    },

    {
      icon: <Lightbulb />,
      title: "Creative Brainstorm",
      desc: "Generate three taglines for new subatainable fashion brand. ",
    },
    {
      icon: <Flashlight />,
      title: "Check Facts",
      desc: "Compare key differences between GDPR & CCCA. ",
    },
  ];

  return (
    <div className="hero">
      <div className="hero-content">
        <span className="hero-user">Hello, Jackson</span>
        <span className="hero-qn"> How Can i assist you today ?</span>
      </div>

      <div className="hero-box">
        <textarea
          className="hero-input"
          placeholder="Ask me anything..."
          rows={2}
        ></textarea>

        <div className="hero-tool">
          <div className="hero-group">
            <button className="hero-purple">
              <span className="hero-icon">
                <Atom />
              </span>
              Deeper Research
            </button>
            <button className="hero-icon">
              <Images />
            </button>
            <button className="hero-icon">
              <Lightbulb />
            </button>
          </div>

          <div className="hero-group">
            <button className="hero-icon">
              <Cpu />
            </button>
            <button className="hero-icon">
              <Globe />
            </button>
            <button className="hero-circle">
              <Mic />
            </button>
            <button className="hero-outline">📎 Attach file</button>
          </div>
        </div>
      </div>

      <div className="hero-card">
        {data.map((item, index) => (
          <Herocard data={item} key={index} />
        ))}
      </div>
    </div>
  );
};
