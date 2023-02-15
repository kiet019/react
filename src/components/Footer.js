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
              <Link to="/">Về chúng tôi</Link>
              <Link to="/">Dịch vụ</Link>
              <Link to="/">Liên hệ</Link>
            </div>
            <div className="social-media-icons">
              <Link to="/">
                <span className="material-icons">facebook</span>
              </Link>
              <Link to="/">
                <span className="material-icons">cookie</span>
              </Link>
              <Link to="/">
                <span className="material-icons">language</span>
              </Link>
              <Link to="/">
                <span className="material-icons">thumb_up</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
