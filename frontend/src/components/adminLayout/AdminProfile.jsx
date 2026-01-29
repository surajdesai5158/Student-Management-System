import { useState } from "react";

export default function AdminProfile() {
  const [admin, setAdmin] = useState({
    name: "Admin User",
    email: "admin@gmail.com",
    role: "Super Admin",
    phone: "+91 98765 43210",
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  return (
    <div style={styles.page}>
      {/* PROFILE CARD */}
      <div style={styles.profileCard}>
        <div style={styles.avatarRing}>
          <div style={styles.avatar}>
            {admin.name.charAt(0).toUpperCase()}
          </div>
        </div>

        <h2 style={styles.name}>{admin.name}</h2>
        <p style={styles.role}>{admin.role}</p>

        <button
          style={styles.editBtn}
          onClick={() => setEditing(!editing)}
        >
          {editing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      {/* DETAILS PANEL */}
      <div style={styles.details}>
        <h3 style={styles.sectionTitle}>Admin Information</h3>

        <div style={styles.field}>
          <label>Name</label>
          <input
            name="name"
            value={admin.name}
            disabled={!editing}
            onChange={handleChange}
          />
        </div>

        <div style={styles.field}>
          <label>Email</label>
          <input
            name="email"
            value={admin.email}
            disabled
          />
        </div>

        <div style={styles.field}>
          <label>Phone</label>
          <input
            name="phone"
            value={admin.phone}
            disabled={!editing}
            onChange={handleChange}
          />
        </div>

        {editing && (
          <button style={styles.saveBtn}>
            Save Changes
          </button>
        )}
      </div>

      {/* SECURITY PANEL */}
      <div style={styles.security}>
        <h3 style={styles.sectionTitle}>Security</h3>

        <div style={styles.securityItem}>
          <span>Password</span>
          <button style={styles.linkBtn}>Change</button>
        </div>

        <div style={styles.securityItem}>
          <span>Two-Factor Authentication</span>
          <span style={styles.active}>Enabled</span>
        </div>

        <div style={styles.securityItem}>
          <span>Last Login</span>
          <span>Today · 10:42 AM</span>
        </div>
      </div>
    </div>
  );
}

/* ===================== STYLES ===================== */

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px",
    display: "grid",
    gridTemplateColumns: "320px 1fr",
    gap: "30px",
    background:
      "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
  },

  profileCard: {
    background: "rgba(255,255,255,0.08)",
    borderRadius: "20px",
    padding: "30px",
    textAlign: "center",
    backdropFilter: "blur(12px)",
  },

  avatarRing: {
    width: "120px",
    height: "120px",
    margin: "0 auto 16px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg, #6366f1, #22d3ee)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "#020617",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "42px",
    fontWeight: "700",
  },

  name: {
    margin: "10px 0 4px",
    fontSize: "22px",
  },

  role: {
    opacity: 0.8,
    marginBottom: "20px",
  },

  editBtn: {
    background: "transparent",
    border: "1px solid #6366f1",
    color: "#a5b4fc",
    padding: "10px 18px",
    borderRadius: "10px",
    cursor: "pointer",
  },

  details: {
    background: "#fff",
    color: "#020617",
    borderRadius: "20px",
    padding: "30px",
  },

  security: {
    gridColumn: "1 / span 2",
    background: "rgba(255,255,255,0.08)",
    borderRadius: "20px",
    padding: "30px",
    backdropFilter: "blur(12px)",
  },

  sectionTitle: {
    marginBottom: "20px",
    fontSize: "18px",
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: "16px",
  },

  saveBtn: {
    marginTop: "10px",
    background: "#6366f1",
    border: "none",
    padding: "12px",
    color: "#fff",
    borderRadius: "10px",
    cursor: "pointer",
  },

  securityItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "14px 0",
    borderBottom: "1px solid rgba(255,255,255,0.15)",
  },

  linkBtn: {
    background: "none",
    border: "none",
    color: "#93c5fd",
    cursor: "pointer",
  },

  active: {
    color: "#4ade80",
    fontWeight: "600",
  },
};
