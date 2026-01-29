import React from "react";

const UserHome = () => {
  return (
    <div style={container}>
      <h1 style={title}>Welcome Back, Student 🎓</h1>
      <p style={subtitle}>
        Stay focused. Stay motivated. Your future starts here.
      </p>

      <div style={imageGrid}>
        <ImageCard
          img="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
          text="Dream Big"
        />
        <ImageCard
          img="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
          text="Work Hard"
        />
        <ImageCard
          img="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
          text="Stay Focused"
        />
        <ImageCard
          img="https://images.unsplash.com/photo-1513258496099-48168024aec0"
          text="Achieve Success"
        />
        <ImageCard
          img="https://images.unsplash.com/photo-1541339907198-e08756dedf3f"
          text="Your Journey Matters"
        />
        <ImageCard
          img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          text="Never Stop Learning"
        />
      </div>
    </div>
  );
};

/* 🔹 Image Card Component */
const ImageCard = ({ img, text }) => (
  <div style={card}>
    <img src={img} alt={text} style={image} />
    <div style={overlay}>{text}</div>
  </div>
);

/* 🔹 Styles */
const container = {
  padding: "50px 30px",
  background: "#f8fafc",
  minHeight: "80vh",
};

const title = {
  textAlign: "center",
  fontSize: "36px",
  marginBottom: "10px",
};

const subtitle = {
  textAlign: "center",
  color: "#475569",
  marginBottom: "40px",
  fontSize: "18px",
};

const imageGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px",
};

const card = {
  position: "relative",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
  transition: "transform 0.3s",
};

const image = {
  width: "100%",
  height: "260px",
  objectFit: "cover",
};

const overlay = {
  position: "absolute",
  bottom: "0",
  width: "100%",
  padding: "15px",
  background: "rgba(0,0,0,0.6)",
  color: "#fff",
  fontSize: "18px",
  textAlign: "center",
};

export default UserHome;
