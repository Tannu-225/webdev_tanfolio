// src/components/Footer.jsx
import React, { useEffect, useState } from "react";
import BackToTop from "../assets/icons/arrow-up.png"

export default function Footer(){
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer py-4 text-center">
      <div>Made with <span className="heart">❤️</span>and dedication by Tannu</div>
       <a href="#top" className="back-to-top border rounded-pill">
          <img src={BackToTop} alt="Back to top" />
        </a>
    </footer>
  );
}
