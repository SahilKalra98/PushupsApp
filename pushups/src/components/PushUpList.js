import React from "react";

const PushUpList = ({ pushUpList }) => {
  const pushUpListContainer = pushUpList.map((user) => {
    return (
      <li className="list-group-item">
        {user.userName} : {user.count}
      </li>
    );
  });
  return (
    <div className="card mt-4">
      <ul className="list-group list-group-flush">{pushUpListContainer}</ul>
    </div>
  );
};

export default PushUpList;
