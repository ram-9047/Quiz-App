import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/homepage.css";

function homepage() {
  return (
    <>
      <div className="body">
        <h1>Quiz App</h1>
        <div>
          <Link to="/admin/signup">
            <button className="button admin-btn">Admin</button>
          </Link>
          <Link to="/user/signup">
            <button className=" button user-btn">User</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default homepage;
