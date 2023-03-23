import React from "react"
import { Form, Button } from "semantic-ui-react"

export default function Update() {
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