import DataTable from "react-data-table-component";
import {useState, useEffect} from "react";

function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [perPage, setPerPage] = useState(10)

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
      />
      
    </div>
  );
}

export default App;
