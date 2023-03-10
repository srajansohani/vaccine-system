import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link} from "react-router-dom";
import "./AddEdit.css";
import { toast } from "react-toastify";
import { addVaccineData  } from "../Redux/features/vaccineSlice";
import { useDispatch, useSelector } from "react-redux";


const initialState = {
  employeeId: "",
  name: "",
  email: "",
  firstDose: "",
  secondDose: "",
  firstDoseDate: "",
  secondDoseDate: "",
  fullyVaccinated: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const {id} = useParams();
  const { employeeId, name,email,vaccine,firstDose,secondDose,firstDoseDate,secondDoseDate,fullyVaccinated} = state;
  const dispatch =  useDispatch();
  const history = useHistory();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !vaccine  || !firstDose ||!secondDose || !firstDoseDate || !secondDoseDate) {
      toast.error("Please provide value into each input field");
    } else {
       dispatch(addVaccineData(state)); 
       toast.success('details added succesfully'); 
       setTimeout(()=>history.push("/details"),500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleCheckBox = (e)=>{
    const {name,checked} = e.target;
    setState({...state, [name]:checked});
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <pre>{JSON.stringify(state,undefined,2)}</pre>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        
        <input
          type="text"
          id="name"
          name="employeeId"
          placeholder="Employee Id"
          value={employeeId|| ""}
          onChange={handleInputChange}
        />
        
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name ..."
          value={name || ""}
          onChange={handleInputChange}
        />
        
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email ..."
          value={email || ""}
          onChange={handleInputChange}
        />
             <label for="vaccine">Vaccine:</label>
      <select
        id="vaccine"
        name="vaccine"
        onChange={handleDropdownChange}
      >
        <option value="">select</option>
        <option value="Pfizer">Pfizer</option>
        <option value="Moderna">Moderna</option>
        <option value="Johnson &amp; Johnson">Johnson &amp; Johnson</option>
      </select>
      <br />
      <label for="is_first_doze_take">Is First Dose Taken:</label>
      <input
        type="checkbox"
        id="is_first_doze_take"
        name="firstDose"
        onChange = {handleCheckBox}
      />
      <br />
      {state.firstDose ? (
        <div id="first_dose_section">
          <label for="first_doze_date">First Dose Date:</label>
          <input
            type="date"
            id="first_doze_date"
            name="firstDoseDate"
            onChange={handleInputChange}
          />
        </div>
      ) : null}

      <label for="is_second_doze_take">Is Second Dose Taken:</label>
      <input
        type="checkbox"
        id="is_second_doze_take"
        name="secondDose"
        onChange={handleCheckBox}
      />

      {state.secondDose ? (
        <div id="second_dose_section">
          <label for="second_doze_date">Second Dose Date:</label>
          <input
            type="date"
            id="second_doze_date"
            name="secondDoseDate"
            onChange={handleInputChange}
          />
        </div>
      ) : null}
        <input type="submit" value="Save" />
        <Link to="/">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;






















{/* <label htmlFor="firstDose">FirstDose</label>
<select
  className="dropdown"
  name="vaccine"
  onChange={handleDropdownChange}
>
  <option>Please Select Status</option>
  <option value="taken" selected={firstDose === "taken" ? firstDose: ""}>
    taken
  </option>
  <option
    value="not Taken"
    selected={firstDose === "not Taken" ? firstDose : ""}
  >
    not taken
  </option>
</select>
<label htmlFor="firstDose">FirstDose</label>
<select
  className="dropdown"
  name="secondDose"
  onChange={handleDropdownChange}
>
  <option>Please Select Status</option>
  <option value="taken" selected={secondDose === "taken" ? secondDose: ""}>
    taken
  </option>
  <option
    value="not Taken"
    selected={secondDose === "not Taken" ? secondDose : ""}
  >
    not taken
  </option>
</select> */}






{/* <label htmlFor="vaccine">Status</label>
<select
  className="dropdown"
  name="vaccine"
  onChange={handleDropdownChange}
>
  <option>Please Select Status</option>
  <option value="Pfizer" selected={vaccine === "Pfizer" ? vaccine: ""}>
    Pfizer
  </option>
  <option
    value="Moderna"
    selected={vaccine === "Moderna" ? vaccine : ""}
  >
    Moderna
  </option>
</select> */}
