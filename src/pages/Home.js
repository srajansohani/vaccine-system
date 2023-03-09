import React from 'react'
import { useHistory} from 'react-router-dom';
import { getUsersData , getUserState} from '../functions/localStorage';
import { Button } from "react-bootstrap";
import Login from '../components/Login';
export default function Home() {
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = React.useState(getUserState());
    return <>
        {(isLoggedIn) ?
            ( <>
                <h1>Welcome to Vaccination Details For Consultadd</h1>
                <Button variant="outline-primary" href="/details">
                    Details
                </Button>{" "}
                <Button variant="outline-secondary" href="/Add">
                    Add Data
                </Button>{" "}
                <Button variant="outline-success">Log Out </Button>{" "}
            </>):
            <>
                <Login />
            </>
        }
    </>
}