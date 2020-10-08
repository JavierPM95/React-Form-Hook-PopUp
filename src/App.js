import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";

function App() {
  const usersData = [
    { id: uuidv4(), name: "Tania", username: "floppydiskette" },
    { id: uuidv4(), name: "Craig", username: "siliconeidolon" },
    { id: uuidv4(), name: "Ben", username: "benisphere" },
  ];

  //State Value
  const [users, setUsers] = useState(usersData);

  //State Edit
  const userIniSta = { id: null, name: "", username: "" };
  const [editingForm, setEditingForm] = useState(false);
  const [currentUser, setCurrentUser] = useState([userIniSta]);

  //Add users
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
    openWindow();
  };

  // Delete Users
  const deleteUser = (id) => {
    let result = window.confirm("Are you sure do you want to erase this user?");
    if (result === true) {
      setUsers(users.filter((user) => user.id !== id));
    } else {
      return;
    }
  };

  // Edit Users
  const editRow = (user) => {
    setEditingForm(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
    openWindow();
  };

  const updateUser = (id, updateUser) => {
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
    setCurrentUser([userIniSta]);
  };

  //Open Modal
  const [isOpen, setIsOpen] = useState(false);

  const openWindow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <h1 className="my-4">CRUD App</h1>
      <div className="row">
        <div className="col-md-4">
          <h2>Add users</h2>
          <AddUserForm
            addUser={addUser}
            currentUser={currentUser}
            editingForm={editingForm}
            setEditingForm={setEditingForm}
            updateUser={updateUser}
            openWindow={openWindow}
            isOpen={isOpen}
          />
        </div>
        <div className="col-md-8">
          <h2>View user</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
