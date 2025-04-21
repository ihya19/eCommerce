import React from "react";
import "./BlogCard.css";
import BlogImage1 from "../images/a.jpg";
import BlogImage2 from "../images/c.jpg";

const BlogCard = () => {
  return (
    <div className="blog-container">
     
      <div className="blog-card-horizontal">
        <div className="blog-image-container">
          <img src={BlogImage1} alt="Blog visual" className="blog-image" />
        </div>
        <div className="blog-content">
          <h1 className="blog-author">Sato</h1>
          <h2 className="blog-department">English Department</h2>
          <h3 className="blog-title">Graphic Design</h3>
          <p className="blog-description">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <div className="blog-meta">
            <span>22h...</span>
            <span className="meta-separator">💬</span>
            <span>64 Lessons</span>
            <span className="meta-separator">💬</span>
            <span>Progress</span>
          </div>
          <button className="blog-button">
            Learn More <span className="button-arrow">▶</span>
          </button>
        </div>
      </div>

      
      <div className="blog-card-horizontal">
        <div className="blog-image-container">
          <img src={BlogImage2} alt="Blog visual" className="blog-image" />
        </div>
        <div className="blog-content">
          <h1 className="blog-author">English Department</h1>
          <h3 className="blog-title">Graphic Design</h3>
          <p className="blog-description">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <div className="blog-meta">
            <span>22h...</span>
            <span className="meta-separator">💬</span>
            <span>64 Lessons</span>
            <span className="meta-separator">💬</span>
            <span>Progress</span>
          </div>
          <button className="blog-button">
            Learn More <span className="button-arrow">▶</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;