import React, {useState} from "react";
import { Form, Button} from "semantic-ui-react";
import axios from "axios";


export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    console.log(firstName)
    console.log(lastName)

    const sendDataToAPI = () => {
        axios.post("https://63c44a3e8067b6bef6d6fd16.mockapi.io/Employ", {
            firstName,
            lastName
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
            <Button
                type='submit'
                onClick={sendDataToAPI}
                > Submit
            </Button>
        </Form>
    </div>
    )
}