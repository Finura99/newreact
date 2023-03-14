import {useState} from "react";
import axios from "axios";


export default function Postformvalue(props)
{ 
    const [post, setPost] = useState({
        createdAt:"",
        firstName:"",
        LastName:"",
        id: ""
    })
    const handleInput = (event) => {
        setPost({
            ...post,
            [event.target.name]: event.target.value
        })

        const {name, value} = event.target;
        setPost({
            ...post, 
            [name]:value
        });
        console.log(post)
    }
    async function handleSubmit(event) {
        event.preventDefault()
        axios.post("https://63bd59afce8cd0789c9527f4.mockapi.io/Employment", {})
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }//function connects to submit button to send the post request to the fake api


    
    return(
        <div>
        <form className="row-employ" onS={handleSubmit}  >    
        <input
            type="text"
            name="firstName"
            required="required"
            placeholder="Enter First Name"
            value={post.firstName}
            onChange={handleInput}
        />
        <input
            type="text"
            name="LastName"
            required="required"
            placeholder="Enter Last Name"
            value={post.LastName}
            onChange={handleInput}
        />
        
        <input
            type="number"
            name="createdAt"
            required="required" 
            placeholder="Enter created at Number"
            value={post.createdAt}
            onChange={handleInput}
        />
        <input 
            type="number"
            name="id"
            required="required"
            placeholder="Enter a unique ID"
            value={post.id}
            onChange={handleInput}
        />
        <button type="submit" >Add Person</button>
        </form>
    </div>
    )

    }