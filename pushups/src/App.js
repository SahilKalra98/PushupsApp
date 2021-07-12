import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
            <input className="username form-control" id="usernameInput"></input>
            <label for="usernameInput">Username</label>
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating">
            <input className="totalReps form-control" id="userReps"></input>
            <label for="userReps">Number of Reps</label>
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating">
            <input className="userNumber form-control" id="userNumber"></input>
            <label for="userNumber">Phone Number (Optional)</label>
          </div>
        </div>
        <div className="col-md">
          <button className="submit btn btn-outline-secondary">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
