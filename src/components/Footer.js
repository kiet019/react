import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <Link to="/">Trang chủ</Link>
              <Link to="/about">Về chúng tôi</Link>
              <Link to="/">Dịch vụ</Link>
              <Link to="/">Liên hệ</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
