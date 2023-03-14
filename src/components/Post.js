import React from "react";
import {useState} from "react";
import axios from "axios";



export default function Posting() {

    const [post, setPost] = useState({
        createdAt:'',
        firstName:'',
        LastName:'',
        id: ''
    })

    const handleChange = (event) => {
        const value = event.target.value;
        setPost({
                ...post,
                [event.target.name]: value
        });
        //console.log(post)
    }



    async function handleSubmit(event) {
        event.preventDefault()
        
        
        axios.post("https://63bd59afce8cd0789c9527f4.mockapi.io/Employment",{post})
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }//function connects to submit button to send the post request to the fake api

    
    return(
        <div>
        <form onSubmit={handleSubmit}>    
        <input
            type="text"
            name="firstName"
            //placeholder="Enter First Name"
            value={post.firstName}
            onChange={handleChange}
        />
        <input
            type="text"
            name="LastName"
            name="LastName"
            required="required"
            name="LastName"   
            required="required"
            placeholder="Enter Last Name"
            value={post.LastName}
            onChange={handleChange}
        />
        
        <input
            type="number"
            name="createdAt"
            placeholder="Enter created at Number"
            value={post.createdAt}
            onChange={handleChange}
        />
        <input 
            type="number"
            name="id"
            placeholder="Enter a unique ID"
            value={post.id}
            onChange={handleChange}
        />
        <button type="submit">Register</button>
        </form>
    </div>
    )

    
    }
