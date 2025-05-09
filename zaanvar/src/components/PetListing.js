import React from "react";
import { FaPlus, FaMapMarkerAlt } from "react-icons/fa";

import "./PetListing.css"; 

const pets = [
  {
    name: "Rottweiler",
    age: "2 Years 8 Months",
    gender: "Female",
    location: "Ameerpet, Hyderabad (75 Miles)",
    image: "../assests/dog1.png",
  },
  {
    name: "Rottweiler",
    age: "2 Years 8 Months",
    gender: "Female",
    location: "Ameerpet, Hyderabad (75 Miles)",
    image: "../assests/dog2.png",
  },
  {
    name: "Rottweiler",
    age: "2 Years 8 Months",
    gender: "Female",
    location: "Ameerpet, Hyderabad (75 Miles)",
    image: "../assests/dog3.png",
  },
];

const PetListing = () => {
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div className="d-flex gap-2">
          <button className="btn btn-outline-light rounded-pill px-4 fw-semibold custom-btn">
            Adopt
          </button>
          <button className="btn btn-teal rounded-pill px-4 fw-semibold text-white">
            Rehomed
          </button>
        </div>
        <button className="btn btn-warning text-white rounded-pill d-flex align-items-center gap-2 px-3">
          <FaPlus /> Add post
        </button>
      </div>

      <div className="row g-4">
        {pets.map((pet, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card border-0 shadow-sm rounded-4">
              <img
                src={pet.image}
                alt={pet.name}
                className="card-img-top rounded-top-4"
                style={{ height: "260px", objectFit: "cover", borderRadius: "1rem 1rem 0 0" }}                          
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{pet.name}</h5>
                <p className="card-text text-muted mb-1">
                  {pet.age}, {pet.gender}
                </p>
                <p className="card-text text-muted mb-0">
                  <FaMapMarkerAlt className="me-2 text-dark" />
                  {pet.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetListing;
