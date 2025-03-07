import React, { useState } from "react";
// import "./styles.css";

export default function App() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [shareCount, setShareCount] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    if (!liked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    setLiked(!liked);
  };

 
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="post">
      {/* Post Header */}
      <div className="post-header">
        <img
          src="https://cdn.pixabay.com/photo/2019/09/21/01/34/influencer-4492841_640.jpg"
          alt="Profile"
          className="profile-pic"
        />
        <span className="username">john_doe</span>
      </div>

      {/* Post Image */}
      <img
        src="https://cdn.pixabay.com/photo/2016/02/18/07/11/social-1206612_640.png"
        alt="Post"
        className="post-image"
      />

      {/* Comments Section (Appears between Image & Actions) */}
      <div className="comment-list">
        {comments.length > 0 ? (
          comments.map((c, index) => (
            <p key={index} className="comment">{c}</p>
          ))
        ) : (
          <p className="no-comments">No comments yet. Be the first!</p>
        )}
      </div>

      {/* Post Actions */}
      <div className="post-actions">
        <span className={liked ? "liked" : ""} onClick={handleLike}>
          ❤️ {likeCount}
        </span>
       
      </div>

      {/* Caption */}
      <div className="post-caption">
        <span className="username">john_doe</span> tired 💆‍♀️💻
      </div>

      {/* Comment Form */}
      <div className="comment-section">
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
}
