import React, { useEffect, useState } from 'react';
import { Table, Button, Menu, Icon} from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';



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

    const setID = (id) => {
        console.log(id)
        localStorage.setItem("ID", id)
    }

    const getDataDelete = () => {
        axios.get('https://63c44a3e8067b6bef6d6fd16.mockapi.io/Employ')
            .then((getDataDelete) => {
                setApiData(getDataDelete.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://63c44a3e8067b6bef6d6fd16.mockapi.io/Employ/${id}`)
        .then (()=> {
            getDataDelete();
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
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Salary (£)</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (

                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Table.Cell>{data.salary}</Table.Cell>
                                    <Link to = '/update'>
                                        <Button className="readjust"
                                                color='blue' 
                                                onClick={() => setID(data.id)}>
                                            Update
                                        </Button>
                                    </Link>
                                <Table.Cell>
                                        <Button 
                                                color="red" 
                                                onClick={() => onDelete(data.id)}>
                                            Delete
                                        </Button>
                                </Table.Cell>
                            </Table.Row>
                            
                        )
                    })}

                </Table.Body>

                <Table.Footer>
        <Table.Row>
            <Table.HeaderCell colSpan='3'>
            <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                <Icon name='chevron left' />
                </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
                <Icon name='chevron right' />
            </Menu.Item>
            </Menu>
        </Table.HeaderCell>
        </Table.Row>
    </Table.Footer>


            </Table>
        </div>
    )
}