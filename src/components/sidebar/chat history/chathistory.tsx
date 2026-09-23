import { useState, useEffect } from "react";
import { db } from "../../../firebase/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import "./chathistory.scss";

interface ChatHistoryItem {
  id: string;
  text: string;
  timestamp: string;
}

export const Chathistory = () => {
  const [history, setHistory] = useState<ChatHistoryItem[]>([]);
  const [search, setSearchFilter] = useState("");

  useEffect(() => {
    const q = query(collection(db, "chats"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const chatData: ChatHistoryItem[] = [];

      snapshot.forEach((doc) => {
        const data = doc.data();
        chatData.push({
          id: doc.id,
          text: data.text,
          timestamp: data.timestamp
            ? data.timestamp.toDate().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            : "Just now",
        });
      });

      setHistory(chatData);
    });

    return () => unsubscribe();
  }, []);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("search")?.toString().trim() || "";
    setSearchFilter(searchQuery.toLowerCase());
  };

  const filteredHistory = history.filter((chat) =>
    chat.text.toLowerCase().includes(search),
  );

  return (
    <div className="chat-history">
      <div className="chat-history-container">
        <div className="chat-history-header">
          <h4>Recent Chats</h4>

          <form className="chat-history-search" onSubmit={handleSearchSubmit}>
            <input name="search" type="text" placeholder="Search chat..." />
            <button type="submit" aria-label="Search">
              🔍
            </button>
          </form>
        </div>

        <div className="chat-history-list">
          {filteredHistory.length === 0 ? (
            <p className="empty-text">
              {search ? "No matching chats found" : "No message logs yet"}
            </p>
          ) : (
            filteredHistory.map((chat) => (
              <div key={chat.id} className="chat-history-item">
                <p className="chat-text">{chat.text}</p>
                <span className="chat-time">{chat.timestamp}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
