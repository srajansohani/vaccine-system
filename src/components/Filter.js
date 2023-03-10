import React from 'react';
import ReactDOM from'react-dom';
import {useState} from 'react'
import {updateFilters} from '../Redux/features/vaccineSlice'
import { useDispatch } from 'react-redux';
function Filter(){
    const [filters,setFilters] = useState({});
    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        setFilters({...filters,[name]: value});
    }
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(updateFilters(filters));
        
    }
    return (
        <>
        <pre>{JSON.stringify(filters,undefined,2)}</pre>
        <form onSubmit = {handleSubmit}>
        <input
          type="text"
          id="search"
          name="name"
          placeholder="Search by employee name"
          onChange={handleInputChange}
        />
        <br />
        <label for="vaccine">Filter by Vaccine:</label>
        <select
          id="vaccine"
          name="vaccine"
          onChange={handleInputChange}
        >
          <option value="">All</option>
          <option value="Pfizer">Pfizer</option>
          <option value="Moderna">Moderna</option>
          <option value="Johnson &amp; Johnson">Johnson &amp; Johnson</option>
        </select>
        <br />
        <label for="first-dose">First Dose Status:</label>
        <select
          id="first-dose"
          name="firstDose"
          onChange={handleInputChange}
        >
          <option value="">All</option>
          <option value="true">Taken</option>
          <option value="false">Not Taken</option>
        </select>
        <br />
        <label for="second-dose"> Second Dose Status:</label>
        <select
          id="second-dose"
          name="secondDose"
          onChange={handleInputChange}
        >
          <option value="">All</option>
          <option value="true">Taken</option>
          <option value="false">Not Taken</option>
        </select>
        <br />
        <input type="submit" value="Filter" />
        <br />
      </form>
    </>
    )
}
export default Filter;