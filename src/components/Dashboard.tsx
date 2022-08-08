import { SyntheticEvent, useState } from "react";
import { User } from "../models/user";
import { useNavigate} from "react-router-dom";


interface IDashboard {
    currentUser: User | undefined
}


function Dashboard (props: IDashboard) {

    let navigate = useNavigate();

    return (
        <>
            <h1>
                Welcome to your MArvel Finder Dashboard!</h1>

            
        </>
    );

}


export default Dashboard;