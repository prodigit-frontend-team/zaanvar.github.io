import React from "react";

import "./MatchProfile.css"; 

const profiles = [
  { name: "Ranjith Soma", pet: "Simba", location: "Yellareddy road Ameerpet, Hyderabad", match: 80 },
  { name: "Ranjith Soma", pet: "Snoopy", location: "Yellareddy road Ameerpet, Hyderabad", match: 80 },
  { name: "Ranjith Soma", pet: "Miro", location: "Yellareddy road Ameerpet, Hyderabad", match: 80 },
  { name: "Ranjith Soma", pet: "Venky", location: "Yellareddy road Ameerpet, Hyderabad", match: 80 },
];

const MatchedProfiles = () => {
  return (
    <div className="container my-5 ">
      <h4 className="mb-4 fw-bold">Matched Profiles</h4>
      <div className="table-responsive">
        <table className="table align-middle bg-white rounded shadow-sm">
          <thead>
            <tr className="text-secondary">
              <th scope="col">Full Name</th>
              <th scope="col">Pet Name</th>
              <th scope="col">Location</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile, index) => (
              <tr key={index}>
                <td className="d-flex align-items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="avatar"
                    className="rounded-circle me-2 profile-img"
                  />
                  {profile.name}
                </td>
                <td>{profile.pet}</td>
                <td>{profile.location}</td>
                <td>
                  <div className="d-flex justify-content-start  ">
                    <div className="progress-circle me-3">
                      <svg viewBox="0 0 36 36" className="circular-chart orange">
                        <path
                          className="circle-bg"
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="circle"
                          strokeDasharray={`${profile.match}, 100`}
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x="18" y="20.35" className="percentage">
                          {profile.match}%
                        </text>
                      </svg>
                    </div>
                    <button className="btn btn-warning text-white fw-semibold px-3 w-100">Message</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchedProfiles;
