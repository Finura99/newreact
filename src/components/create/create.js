import React, {useState} from "react";
import { Form, Button} from "semantic-ui-react";


export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    return(
    <div>
        <Form>
            <Form.Field>
                <label>First Name</label>
                <input 
                    name="fname"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder='First Name' 
                    />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input
                    name="lname"
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder='Last Name' 
                    />
            </Form.Field>
            <Button 
                type='submit'>
                        Submit
            </Button>
        </Form>
    </div>
    )
}