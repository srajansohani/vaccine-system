import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {addUsers} from '../Redux/features/userSlice';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUsers(formData));
    toast.success('Successfully Signed up')
    setTimeout(()=>history.push("/"),500);
    
  };
  const {users} = useSelector((state)=>state.user);
  return (
    <>
    <pre>{JSON.stringify(users,undefined,2)}</pre>
    <pre>{JSON.stringify(formData,undefined,2)}</pre>
    <form onSubmit={handleSubmit}>
      <h2>Signup Form</h2>
      <label htmlFor="name">Employee ID:</label>
      <input
        type="text"
        id="name"
        name="employeeId"
        value={formData.employeeId}
        onChange={handleChange}
        required
      />
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <br></br>
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      <button type="submit">Sign up</button>
    </form>
    <p>Aleready Have an Account</p>
    <button onClick = {()=>{
      setTimeout(()=>history.push('/'),500)
    }}>Login</button>
    </>
  );
}

export default Signup;