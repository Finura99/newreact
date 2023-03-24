import React, {useState} from "react";
import { Form, Button} from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Create() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    
    
    let navigate = useNavigate();// use navigate to redirect other web page after an action.
    // console.log(firstName)
    // console.log(lastName)
    
    const sendDataToAPI = () => {
        axios.post("https://63c44a3e8067b6bef6d6fd16.mockapi.io/Employ", {
            firstName,
            lastName,
            email,
            salary
        })
        .then(() => {
            navigate('/read')
        })
    }
    return(
    <div>
        <Form>
            <Form.Field>
                <label>First Name</label>
                <input 
                    name="fname"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder='First Name'
                    required = "required" 
                    />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input
                    name="lname"
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder='Last Name' 
                    required="required"
                    />
            </Form.Field>
            <Form.Field>
                <label>Email</label>
                <input 
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail address"
                    required="required"
                    />
            </Form.Field>
            <Form.Field>
                <label>Salary</label>
                <input 
                    type="number"
                    name="salary"
                    onChange={(e) => setSalary(e.target.value)}
                    placeholder="Salary"
                    required="required" 
                    />
            </Form.Field>
            <Button color="black"
                type='submit'
                onClick={sendDataToAPI}
                >Submit
            </Button>
            <Button color="red">Cancel</Button>
        </Form>
    </div>
    )
}

