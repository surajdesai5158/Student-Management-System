import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminContact = () => {
  const [messages, setMessages] = useState([]);
  const [replyText, setReplyText] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    const res = await axios.get("http://localhost:7000/admin/get");
    setMessages(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleReply = async (id) => {
    try {
      await axios.put(
        `http://localhost:7000/admin/reply/${id}`,
        { reply: replyText[id] }
      );

      alert("Reply sent successfully ✅");
      setReplyText({});
      fetchContacts(); // refresh
    } catch (error) {
      alert("Failed to send reply ❌");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📩 Admin Contact Messages</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        messages.map((msg) => (
          <div
            key={msg._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <p><b>Name:</b> {msg.name}</p>
            <p><b>Email:</b> {msg.email}</p>
            <p><b>Message:</b> {msg.message}</p>

            {msg.reply ? (
              <>
                <p style={{ color: "green" }}>
                  <b>Replied:</b> {msg.reply}
                </p>
              </>
            ) : (
              <>
                <textarea
                  placeholder="Type your reply..."
                  rows="3"
                  style={{ width: "100%" }}
                  value={replyText[msg._id] || ""}
                  onChange={(e) =>
                    setReplyText({
                      ...replyText,
                      [msg._id]: e.target.value,
                    })
                  }
                />

                <button
                  onClick={() => handleReply(msg._id)}
                  style={{
                    marginTop: "10px",
                    padding: "8px 15px",
                    cursor: "pointer",
                  }}
                >
                  Reply & Send Email
                </button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default AdminContact;
