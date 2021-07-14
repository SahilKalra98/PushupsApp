import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import PushUpList from "./components/PushUpList";

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
  return (
    <div className="container">
      <Header />
      <UserInput
        userName={userName}
        count={count}
        pnumber={pnumber}
        handleChange={handleChange}
        onSubmit={onSubmit}
      />
      <PushUpList pushUpList={pushUpList} />
    </div>
  );
}

export default App;
