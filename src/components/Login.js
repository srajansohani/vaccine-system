import React from 'react';
import ReactDOM from'react-dom';
import {useState,useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getUsers } from '../Redux/features/userSlice';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
  } from "mdb-react-ui-kit";
  
  import './Login.css'

export default function Login(){
    const initialState = {
        employeeId: "",
        password: "",
    }
    const dispatch = useDispatch();
    const [credentials,setCredentials] = useState(initialState);
    const [loginError,setLoginError] = useState(false);
    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        setCredentials({
          ...credentials,
            [name]:value
        })
    }
    const {user} = useSelector((state)=>{return state.user})
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(getUsers(credentials.id));
        if(user.employeeId === credentials.employeeId && user.password === credentials.password){
            setLoginError(false);
            window.localStorage.setItem('USER_STATE',true);
        }
        else{
            setLoginError(true);
        }
    };
    const login = (e)=>{
        console.log(credentials);
    }
    return <>
        <h1>Login Page</h1>
        <pre>{JSON.stringify(credentials,undefined,2)}</pre>
        <form onSubmit={handleSubmit}>
            <label for="username">Username</label>
            <input type="text" id="username" name="employeeId" placeholder="Enter your EmployeeId" required onChange = {handleInputChange}/>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password"  required onChange = {handleInputChange}/>
            <button type="submit">Log in</button>
        </form>
    </>
}