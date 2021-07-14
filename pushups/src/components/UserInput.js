import React from "react";

const UserInput = ({ userName, count, pnumber, handleChange, onSubmit }) => {
  return (
    <div className="row g-2">
      <div className="col-md">
        <div className="form-floating">
          <input
            value={userName}
            onChange={handleChange}
            className="username form-control"
            id="usernameInput"
          ></input>
          <label for="usernameInput">Username</label>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <input
            value={count}
            onChange={handleChange}
            className="totalReps form-control"
            id="userReps"
          ></input>
          <label for="userReps">Number of Reps</label>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <input
            value={pnumber}
            onChange={handleChange}
            className="userNumber form-control"
            id="userNumber"
          ></input>
          <label for="userNumber">Phone Number (Optional)</label>
        </div>
      </div>
      <div className="col-md">
        <button className="submit btn btn-outline-secondary" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserInput;
