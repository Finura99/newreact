import {useEffect} from "react"
import axios from "axios"


export default function Delete(props) {

    // const handleDeleteClick = () => {
    //     const 
        
    // }



    useEffect(() => {
        axios.delete("https://63bd59afce8cd0789c9527f4.mockapi.io/Employment")
        .then(() => {
            alert("Employee has been deleted")
        })

    })
}

