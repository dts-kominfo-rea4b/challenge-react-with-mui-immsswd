// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from "react";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <div className="Header">
      <h1 className="Title">Call a Friend</h1>
      <p className="subtitle">Your Friendly contact app</p>
    </div>
  );
};

export default Header;
