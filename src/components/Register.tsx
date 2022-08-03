import { SyntheticEvent, useState } from "react";
import { User } from "../models/user";
import { Navigate, useNavigate} from "react-router-dom";

interface IRegisterProps {

}

function Register(props: IRegisterProps) {
    const navigate = useNavigate();
    let [username, setUser] = useState('');
    let [password, setPass] = useState('');
    let [email, setEmail] = useState('');
    let [errmsg, setErrmsg] = useState('');

    let updateInput = (e: SyntheticEvent) => {
        let box = e.target as HTMLInputElement;
        if(box.id === "reg-user"){
            setUser(box.value);
        }
        else if(box.id === "reg-pass"){
            setPass(box.value);
        }
        else if(box.id === "reg-email"){
            setEmail(box.value);
        }
    }

    let register = async (e: SyntheticEvent) => {
        
    }



}

export default Register;
