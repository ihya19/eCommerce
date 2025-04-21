import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      
      <div className="footer-top">
      
        <div className="footer-contact">
          <h3>Get In Touch</h3>
          <p className="footer-text">the quick fox jumps over the lazy dog</p>
          
          <div className="social-icons">
            <Facebook className="facebook-icon" />
            <Twitter className="twitter-icon" />
            <Instagram className="instagram-icon" />
            <Linkedin className="linkedin-icon" />
          </div>
        </div>

       
        <div className="footer-links">
          <h3>Company Info</h3>
          <ul>
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>

       
        <div className="footer-links">
          <h3>Features</h3>
          <ul>
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>
      </div>

 
      <div className="footer-bottom">
        <p>Made With Love By Figmaland All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;