import React, { useState, useEffect } from "react";
const API = "api.github.com/users";

const UseEffectCallApi = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const res = await fetch(API);
    const users = await res.json();
    setUsers(users);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h3>Github Users</h3>
      <ul className={"user-list"}>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <div>
                <h4>{user.login}</h4>
                <a>{user.html_url}</a>
              </div>
              <img src={user.avatar.url} alt="" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseEffectCallApi;
