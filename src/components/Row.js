import React from 'react';
import ReactDOM from'react-dom';
import { deleteVaccineData } from '../Redux/features/vaccineSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function Row(props){
    const dispatch = useDispatch();
    const Delete = (id)=>{
        dispatch(deleteVaccineData(id));
    }
    return (
        <tr>
          <td>{props.EmployeeId}</td>
          <td>{props.EmployeeName}</td>
          <td>{props.Vaccine}</td>
          {props.FirstDose ? <td>Taken</td> : <td>Not Taken</td>}
          {props.SecondDose ? <td>Taken</td> : <td>Not Taken</td>}
          <td>{props.FirstDoseDate}</td>
          <td>{props.SecondDoseDate}</td>
          {props.FirstDose && props.SecondDose ? <td>Yes</td> : <td>No</td>}
          <td>
            <button onClick = {()=>{Delete(props.EmployeeId)}}>Delete</button>
            
          </td>
        </tr>
      );
    }
    export default Row;
    
