import React, { useState, useEffect } from "react"
import { Form, Button } from "semantic-ui-react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"


export default function Update() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const [ID,setID] = useState(null);

    let navigate = useNavigate();



    const sendDataToAPI = () => {
        axios.put(`https://63c44a3e8067b6bef6d6fd16.mockapi.io/Employ/${ID}`,{
        firstName,
        lastName,
        email,
        salary
    })
    .then(() => {
        navigate('/read')
    })
    }

    useEffect(() => {
        setFirstName(localStorage.getItem('firstName'))
        setLastName(localStorage.getItem('lastName'))
        setEmail(localStorage.getItem('email'))
        setSalary(localStorage.getItem('salary'))
        setID(localStorage.getItem('ID'))
    }, []);


    return (
        <div>
            <Form>
            <Form.Field>
                <label>First Name</label>
                <input 
                    name="fname"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder='First Name'
                    required = "required" 
                    value={firstName}
                    />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input
                    name="lname"
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder='Last Name' 
                    required="required"
                    value={lastName}
                    />
            </Form.Field>
            <Form.Field>
                <label>Email</label>
                <input 
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail address"
                    required="required"
                    value={email}
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
                    value={salary}
                    />
            </Form.Field>
            <Button
                type='submit'
                onClick={sendDataToAPI}
                >Update
            </Button>
        </Form>
        </div>
    )
}



