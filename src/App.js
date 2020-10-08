import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';



function App() {

  const usersData = [
    {id: uuidv4(), name: 'Tania', username: 'floppydiskette'},
    {id: uuidv4(), name: 'Craig', username: 'siliconeidolon'},
    {id: uuidv4(), name: 'Ben', username: 'benisphere'}
  ]


  //State Value
const [users, setUsers] = useState(usersData);

//State Edit
const [editingForm, setEditingForm] = useState(false)
const [currentUser, setCurrentUser] = useState([
  {id: null, name: '', username: ''}
])


//Add users
const addUser = (user) => {
  user.id = uuidv4()
  setUsers([
    ...users,
    user
  ])
}

// Delete Users
const deleteUser = (id) => {
  let result = window.confirm('Are you sure do you want to erase this user?')
  if (result === true) {
    setUsers(users.filter(user => user.id !== id));
  } else {
    return
  }  
}

// Edit Users
const editRow = (user) => {
  setEditingForm(true);
  setCurrentUser({
  id: user.id, name: user.name, username: user.username
});
}

const updateUser = (id, updateUser) => {
  setUsers(users.map(user => 
    (user.id === id ? updateUser : user)))
}

  return (
      <div className="container">
        <h1 className="my-4">CRUD App</h1>
        <div className="row">
          <div className="col-md-4">
            <h2>Add users</h2>
            <AddUserForm addUser={addUser} currentUser={currentUser} editingForm={editingForm} updateUser={updateUser} />
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
