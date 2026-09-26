import { useState, useEffect } from "react";
import { db } from "../../../firebase/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

import "./chathistory.scss";

interface ChatHistoryItem {
  id: string;
  text: string;
  timestamp: Date | null;
}

interface ChathistoryProps {
  searchProp: string;
}

const getRelativeDateLabel = (date: Date | null): string => {
  const targetDate = date ? date : new Date();

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 1,
  );
  const compareDate = new Date(
    targetDate.getFullYear(),
    targetDate.getMonth(),
    targetDate.getDate(),
  );

  if (compareDate.getTime() === today.getTime()) {
    return "Today";
  } else if (compareDate.getTime() === yesterday.getTime()) {
    return "Yesterday";
  } else {
    return targetDate.toLocaleDateString([], {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
};

export const Chathistory = ({ searchProp }: ChathistoryProps) => {
  const [history, setHistory] = useState<ChatHistoryItem[]>([]);

  useEffect(() => {
    const q = query(collection(db, "chats"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const chatData: ChatHistoryItem[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        chatData.push({
          id: doc.id,
          text: data.text || "",
          timestamp: data.timestamp ? data.timestamp.toDate() : null,
        });
      });
      setHistory(chatData);
    });

    return () => unsubscribe();
  }, []);

  const filteredHistory = history.filter((chat) =>
    chat.text.toLowerCase().includes(searchProp.toLowerCase()),
  );

  return (
    <div className="chat-history">
      <div className="chat-history-container">
        <div className="chat-history-list">
          {filteredHistory.length === 0 ? (
            <p className="empty-text">
              {searchProp ? "No matching chats found" : "No message logs yet"}
            </p>
          ) : (
            filteredHistory.map((chat, index) => {
              const prevChat = filteredHistory[index - 1];

              const currentDateStr = chat.timestamp
                ? chat.timestamp.toDateString()
                : new Date().toDateString();

              const prevDateStr =
                prevChat && prevChat.timestamp
                  ? prevChat.timestamp.toDateString()
                  : prevChat
                    ? new Date().toDateString()
                    : null;

              const isNewDay = currentDateStr !== prevDateStr;

              return (
                <div key={chat.id} className="chat-history-row-group">
                  {isNewDay && (
                    <div className="chat-history-date-separator">
                      <span>{getRelativeDateLabel(chat.timestamp)}</span>
                    </div>
                  )}

                  <div className="chat-history-item">
                    <p className="chat-text">{chat.text}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
