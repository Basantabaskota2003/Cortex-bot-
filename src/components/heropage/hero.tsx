import { useState } from "react";
import { Herocard } from "../cards/herocard/herocard";
import { db } from "../../firebase/firebase";
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
  Send,
} from "lucide-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export const Hero = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const trimmed = message.trim();
    if (!trimmed) return;

    try {
      await addDoc(collection(db, "chats"), {
        text: trimmed,
        timestamp: serverTimestamp(),
      });
      setMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const data = [
    {
      icon: <ChartPie />,
      title: "Synthesize Data",
      desc: "Turn my meeting notes into 5 key bullet points for the team.",
    },
    {
      icon: <Lightbulb />,
      title: "Creative Brainstorm",
      desc: "Generate three taglines for new sustainable fashion brand.",
    },
    {
      icon: <Flashlight />,
      title: "Check Facts",
      desc: "Compare key differences between GDPR & CCPA.",
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        ></textarea>

        <div className="hero-tool">
          <div className="hero-group">
            <button className="hero-purple">
              <span className="hero-icon">
                <Atom />
              </span>{" "}
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
            <button
              className="hero-submit"
              type="submit"
              disabled={!message.trim()}
              onClick={handleSubmit}
            >
              <Send size={16} />
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
