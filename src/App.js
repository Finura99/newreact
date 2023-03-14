import DataTable from "react-data-table-component";
import {useState, useEffect} from "react";
import Post from "./components/Post"
import axios from "axios";


export default function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [perPage, setPerPage] = useState(0)


  const columns = [
    {
      name: "Created At",
      selector: (row) => row.createdAt
    },
    {
      name: "First Name",
      selector: (row) => row.firstName
    },{
      name: "Last Name",
      selector: (row) => row.LastName
    },
    {
      name: "Id",
      selector: (row) => row.id
    }
  ]

  

useEffect(() => {
  getMethod()
}, [])
//get with fetch
// async function fetchTableData() {
//   setLoading(true)
//   const URL = "https://63bd59afce8cd0789c9527f4.mockapi.io/Employment"
//   const res = await fetch(URL)

//   const users = await res.json()
//   setData(users)
// }

async function getMethod() {
    axios.get("https://63bd59afce8cd0789c9527f4.mockapi.io/Employment")
    .then(res => {
    console.log(res)
    setData(res.data)
    setLoading(false)
  })
    .catch(err => {
    console.log(err)
  })
}






return (
    <div className="App"> 
      <DataTable 
        title="Employment Table V1.1"
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
      />
      <h3>Add an Employee </h3>
      <Post />
      
    </div>
  );
}


