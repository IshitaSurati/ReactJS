import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TravelWebsiteTemplate = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Explore the World</h1>
      
      {/* Hero Section */}
      <div className="jumbotron text-center bg-light p-5">
        <h2 className="display-5">Your Adventure Awaits</h2>
        <p className="lead">Discover breathtaking destinations and unforgettable experiences.</p>
        <a href="#" className="btn btn-primary btn-lg">Start Exploring</a>
      </div>
      
      {/* Destinations Section */}
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://cdn.pixabay.com/photo/2016/04/05/11/04/india-1309206_640.jpg" className="card-img-top" alt="Destination" />
            <div className="card-body">
              <h5 className="card-title">Beautiful Beaches</h5>
              <p className="card-text">Relax on pristine sandy beaches with crystal-clear waters.</p>
              <a href="#" className="btn btn-primary">View More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://cdn.pixabay.com/photo/2023/08/13/14/42/mountain-8187621_640.jpg" className="card-img-top" alt="Destination" />
            <div className="card-body">
              <h5 className="card-title">Mountain Adventures</h5>
              <p className="card-text">Explore breathtaking mountain ranges and hiking trails.</p>
              <a href="#" className="btn btn-primary">View More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://cdn.pixabay.com/photo/2016/07/08/23/17/woman-1505407_640.jpg" className="card-img-top" alt="Destination" />
            <div className="card-body">
              <h5 className="card-title">Cultural Cities</h5>
              <p className="card-text">Immerse yourself in rich culture and vibrant city life.</p>
              <a href="#" className="btn btn-primary">View More</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="mt-5">
        <h2>Contact Us</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="3" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="btn btn-success">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default TravelWebsiteTemplate;
