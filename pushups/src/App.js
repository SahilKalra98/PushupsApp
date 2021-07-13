import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [pushUpList, setPushUpList] = useState([]);
  const [userName, setUserName] = useState("");
  const [count, setCount] = useState("");
  const [pnumber, setPNumber] = useState("");

  const addUserInput = (userName, count, pnumber) => {
    let copy = [...pushUpList];
    const userInput = {
      userName,
      count,
      pnumber,
    };
    copy = [...copy, userInput];
    setPushUpList(copy);
  };

  const handleChange = (e) => {
    if (e.currentTarget.id === "usernameInput")
      setUserName(e.currentTarget.value);
    if (e.currentTarget.id === "userReps") setCount(e.currentTarget.value);
    if (e.currentTarget.id === "userNumber") setPNumber(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addUserInput(userName, count, pnumber);
    setUserName("");
    setCount("");
    setPNumber("");
  };
  const pushUpListContainer = pushUpList.map((user) => {
    return (
      <li className="list-group-item">
        {user.userName} : {user.count}
      </li>
    );
  });
  return (
    <div className="container">
      <h1> Pushups Masters </h1>
      <h4>
        Remember to enter your daily entries to stay active for your total
        amount otherwise your total count will be removed after 72 hours!
      </h4>
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
          <button
            className="submit btn btn-outline-secondary"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="card mt-4">
        <ul className="list-group list-group-flush">{pushUpListContainer}</ul>
      </div>
    </div>
  );
}

export default App;
