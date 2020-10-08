import React from 'react'
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {
    
    //React Hook Form
    const {register, errors, handleSubmit, setValue} = useForm({ defaultValues: props.currentUser });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    //Data capture
    const onSubmit = (data, e) => {
        if (props.editingForm === false) {
            props.addUser(data);
            e.target.reset();
        } else  {
            props.updateUser(props.currentUser.id, data);
            e.target.reset();
        }
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <label htmlFor="name">Name</label>
            <input className="control-form d-block" type="text" name="name" placeholder="Dave" ref={
                register({ required: {value: true, message: 'Required field' } })
            }/>
            <div className="text-danger">
                {errors?.name?.message}
            </div>
            <label htmlFor="username">Username</label>
            <input className="control-form d-block" type="text" name="username" placeholder="Dave01" ref={
                register({ required: { value: true, message: "Required field" }})
            } /> 
            <div className="text-danger" >
                {errors?.username?.message}
            </div>
            <button className="btn btn-primary my-3">
                {
                    props.editingForm ? ( 'Edit user' ) : ( 'Add user' )
                }
            </button>
        </form>
    )
}

export default AddUserForm;