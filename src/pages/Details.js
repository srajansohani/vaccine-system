import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useSelector } from "react-redux";
import { deleteVaccineData } from "../Redux/features/vaccineSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {useState,useEffect} from 'react'
import Row from '../components/Row';
import Filter from '../components/Filter';

const Details = () => {
  const {vaccineData}= useSelector((state=>{
    return state.vaccine;
  }))
  const dispatch = useDispatch();

  const {filters} = useSelector((state)=>state.vaccine);
   const [filteredData,setFilteredData] = useState(vaccineData);
   console.log(vaccineData,filteredData)
   useEffect(()=>{
    setFilteredData(()=>{
      return vaccineData.filter((item)=>{
        return (item.name === filters.name  || filters.name === "") 
      })
    })
   },[filters])

  return (
    <div style={{ marginTop: "150px" }}>
      <Filter />
      <Link to="/add">
        <button className="btn btn-contact">Add Data</button>
      </Link>

      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Employee ID</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Vaccine</th>
            <th style={{ textAlign: "center" }}>First Dose</th>
            <th style={{ textAlign: "center" }}>Second Dose</th>
            <th style={{ textAlign: "center" }}>First Dose Date</th>
            <th style={{ textAlign: "center" }}>Second Dose Date</th>
            <th style={{ textAlign: "center" }}>Fully Vaccinated</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => {
            return (
              <Row 
                EmployeeId = {item.employeeId}
                EmployeeName = {item.name}
                Vaccine = {item.vaccine}
                email = {item.email}
                FirstDoseDate = {item.firstDoseDate}
                SecondDoseDate = {item.secondDoseDate}
                FirstDose = {item.firstDose}
                SecondDose = {item.secondDose}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
