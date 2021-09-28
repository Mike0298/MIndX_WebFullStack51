import React, { useState, useContext } from "react";
import data from "./../data/data";

const PersonContext = React.createContext();

const ContextApi = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((p) => p.id !== id);
    });
  };

  return (
    <PersonContext.Provider value={{ people, removePerson }}>
      <h3>Learning Context API</h3>
      <UserList />
    </PersonContext.Provider>
  );
};

const UserList = () => {
  const peopleData = useContext(PersonContext);
  return (
    <div>
      {peopleData.people.map((people) => {
        return <SinglePerson key={people.id} {...people} />;
      })}
    </div>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div className="person">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

export default ContextApi;
