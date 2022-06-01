import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import List from "./List";
import WithLoading from "./WithLoading";

const WithLoadingList = WithLoading(List);

const App = () => {
  const [userList, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setUsers(["John", "Doe"]);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <WithLoadingList isLoading={isLoading} list={userList} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
