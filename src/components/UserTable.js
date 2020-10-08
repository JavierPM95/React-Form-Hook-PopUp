import React from "react";

const userTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  className="btn btn-info form-control d-block my-1"
                  onClick={() => {
                    props.editRow(user);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger form-control d-block my-1"
                  onClick={() => {
                    props.deleteUser(user.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="text-secondary">No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default userTable;
