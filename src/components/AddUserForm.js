import React from "react";
import { useForm } from "react-hook-form";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const AddUserForm = (props) => {
  //React Hook Form
  const { register, errors, setValue, handleSubmit } = useForm({
    defaultValues: props.currentUser,
  });

  setValue("name", props.currentUser.name);
  setValue("username", props.currentUser.username);

  //Add or Edit functions
  const onSubmit = (data) => {
    if (props.editingForm === false) {
      props.addUser(data);
    } else {
      props.updateUser(props.currentUser.id, data);
    }
    props.openWindow();
    props.setEditingForm(false);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={props.openWindow}>
        Add a new user
      </button>
      <Modal isOpen={props.isOpen}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>
            {props.editingForm ? (
              <h3>What do you like to Modified?</h3>
            ) : (
              <h3>What new user do you like to create?</h3>
            )}
          </ModalHeader>
          <ModalBody className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control d-block mb-1"
              type="text"
              name="name"
              placeholder="My name"
              ref={register({
                required: { value: true, message: "Required field" },
              })}
            />
            <div className="text-danger">{errors?.name?.message}</div>
            <label htmlFor="username">Username</label>
            <input
              className="form-control d-block"
              type="text"
              name="username"
              placeholder="My username"
              ref={register({
                required: { value: true, message: "Required field" },
              })}
            />
            <div className="text-danger">{errors?.username?.message}</div>
          </ModalBody>
          <ModalFooter>
            {props.editingForm ? (
              <button className="btn btn-primary">"Edit user"</button>
            ) : (
              <button className="btn btn-primary">"Add new user"</button>
            )}
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
};

export default AddUserForm;
