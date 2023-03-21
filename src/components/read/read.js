import React, { useEffect, useState } from 'react';
import { Table, Button} from 'semantic-ui-react';
import axios from 'axios';


export default function Read() {
    const [apiData, setApiData] = useState([]);
    
    useEffect(() => {
        getData()  
    }, [])

    const getData = () => {
        axios.get(`https://63c44a3e8067b6bef6d6fd16.mockapi.io/Employ`)
            .then((getData) => {
                setApiData(getData.data);
            })
            
    }
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>

                                    <Button color='blue'>Update</Button>
                                </Table.Cell>
                                <Table.Cell>

                                    <Button color="red">Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        </div>
    )
}