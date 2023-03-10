import React from 'react';
import ReactDOM from'react-dom';
import {useState,useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getUsers } from '../Redux/features/userSlice';
import {toast} from 'react-toastify'
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

    const history = useHistory();
    const [credentials,setCredentials] = useState(initialState);
    const [loginError,setLoginError] = useState(false);
   
    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        setCredentials({
          ...credentials,
            [name]:value
        })
    }
    const {users} = useSelector((state)=>{return state.user})
    const handleSubmit = (e)=>{
        e.preventDefault();
        const currUser = users.find(user => user.employeeId === credentials.employeeId)
        
        if(currUser && currUser.employeeId === credentials.employeeId && currUser.password === credentials.password){
            setLoginError(false);
            window.localStorage.setItem('USER_STATE',true);
            toast.success('Login Successful');
            setTimeout(()=>history.push('/'), 500);
            window.location.replace('/');
        }
        else{
            setLoginError(true);
            toast.error('Invalid Credentials');
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
        <p>Dont have an account</p>
            <button onClick = {()=>{
                setTimeout(()=>history.push('/register'));
            }}>Signup</button>
    </>
}