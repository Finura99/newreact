import DataTable from "react-data-table-component";
import {useState, useEffect} from "react";
<<<<<<< Updated upstream
=======
import axios from "axios";
>>>>>>> Stashed changes

function App() {

  
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [post, setPost] = useState({
    firstName: "",
    LastName: ""
  })
  // const [perPage, setPerPage] = useState(10)

  useEffect(() => {
    //getMethod()
  }, [])

  //track state


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
    },
    
  ]


useEffect(() => {
  fetchTableData()
}, [])

async function fetchTableData() {
  setLoading(true)
  const URL = "https://63bd59afce8cd0789c9527f4.mockapi.io/Employment"
  const response = await fetch(URL)

  const users = await response.json()
  setData(users)
  setLoading(false)
}


  return (
    <div className="App">

      <DataTable 
        title="Employment (testing)"
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
        selectableRows
      />
      
<<<<<<< Updated upstream
=======
      <h3>Add an Employee </h3>
      <div>
        <form>   

        <input 
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            onChange={handleChange}
            value={post.firstName}

            
            
        />
         <input  
            type="text"
            name="LastName"  
            placeholder="Enter Last Name"
            onChange={handleChange}
            value={post.LastName}
        />
        
        {/* <input
            type="number"
            name="createdAt"
            placeholder="Enter created at Number"
            //value={post.createdAt}
            onChange={handleChange}
            
        />
        <input 
            type="number"
            name="id"
            placeholder="Enter a unique ID"
            //value={post.id}
            onChange={handleChange}
        />  */}
        <button type="submit" onClick={sendDataToAPI}>Submit</button>
        </form>
        </div>
        
>>>>>>> Stashed changes
    </div>
    )
  }


export default App;
