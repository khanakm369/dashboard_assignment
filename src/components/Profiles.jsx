import React, { useEffect, useState } from "react";
import "./Profiles.css"; // <-- Importing the CSS file

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setProfiles(data.users || []));
  }, []);

  return (
    <div className="profiles-container">
      <h2 className="profiles-title">User Profiles</h2>
      <table className="profiles-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img
                  src={user.image}
                  alt={user.firstName}
                  width="40"
                  height="40"
                  style={{ borderRadius: "50%" }}
                />
              </td>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.company?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profiles;
