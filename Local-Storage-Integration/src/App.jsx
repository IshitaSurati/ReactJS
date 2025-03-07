import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogTemplate = () => {
  const [blogData, setBlogData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("blogData"));
    return savedData || { comments: [], count: 0, likes: 0, comment: "" };
  });

  useEffect(() => {
    localStorage.setItem("blogData", JSON.stringify(blogData));
  }, [blogData]);

  const handleAddComment = () => {
    if (blogData.comment.trim()) {
      setBlogData(prevData => ({
        ...prevData,
        comments: [...prevData.comments, prevData.comment],
        comment: "",
        count: prevData.count + 1,
      }));
    }
  };

  const handleLike = () => {
    setBlogData(prevData => ({
      ...prevData,
      likes: prevData.likes + 1,
    }));
  };

  return (
    <div style={{ backgroundColor: "#e3f2fd" }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">My Blog</a>
        </div>
      </nav>

      <div className="container py-5">
        {/* Blog Post Section */}
        <div className="row">
          <div className="col-md-8">
            <div className="card mb-4" style={{ backgroundColor: "#ffebee" }}>
              <img src="https://cdn.pixabay.com/photo/2019/09/17/18/48/computer-4484282_640.jpg" className="card-img-top" alt="Blog" />
              <div className="card-body">
                <h2 className="card-title text-primary">Amazing Blog Post</h2>
                <p className="card-text text-secondary">This is an example blog post with some placeholder text. Enjoy reading!</p>
                <button className="btn btn-danger" onClick={handleLike}>Like ({blogData.likes})</button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-md-4">
            <div className="card mb-4" style={{ backgroundColor: "#e8f5e9" }}>
              <div className="card-body">
                <h4 className="card-title text-success">Related Posts</h4>
                <div className="list-group">
                  <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                    <img src="https://cdn.pixabay.com/photo/2017/04/05/01/10/bear-2203644_640.jpg" className="rounded me-3" alt="Mountains" style={{ width: "80px", height: "60px", objectFit: "cover" }} />
                    <span>Exploring the Mountains</span>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                    <img src="https://cdn.pixabay.com/photo/2015/10/04/08/06/blog-970722_640.jpg" className="rounded me-3" alt="Beach" style={{ width: "80px", height: "60px", objectFit: "cover" }} />
                    <span>A Guide to Beach Resorts</span>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                    <img src="https://cdn.pixabay.com/photo/2016/02/18/15/19/new-life-1207327_640.jpg" className="rounded me-3" alt="Nature" style={{ width: "80px", height: "60px", objectFit: "cover" }} />
                    <span>The Beauty of Nature</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comment Section */}
        <div className="mt-4" style={{ backgroundColor: "#fff3e0", padding: "15px", borderRadius: "10px" }}>
          <h3 className="text-warning">Comments ({blogData.count})</h3>
          <ul className="list-group">
            {blogData.comments.map((c, index) => (
              <li key={index} className="list-group-item">{c}</li>
            ))}
          </ul>
          <div className="mt-3">
            <input 
              type="text" 
              className="form-control mb-2" 
              placeholder="Write a comment..." 
              value={blogData.comment} 
              onChange={(e) => setBlogData({ ...blogData, comment: e.target.value })}
            />
            <button className="btn btn-info" onClick={handleAddComment}>Add Comment</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-4">
        <p>&copy; 2025 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BlogTemplate;
