import React, { useEffect } from 'react'
import {TextField, Stack, Autocomplete, Box, Button} from '@mui/material'

function Tabledata() {
    const [users, setUsers] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [userId,setUserId] = useState(null)
    // const [password, setPassword] = useState("")
    // const [roles, setRoles] = useState([])
    // const [user, setUser] = useState(null)
    // const [isLoading, setIsLoading] = useState(false)
    // const [error, setError] = useState(null)

    function getUsers() {
        fetch("").then((result) => {
            result.json().then((res) => {
                setUsers(res)
                setName(res[0].name)
                setEmail(res[0].email)
                setUserId(res[0].id)
             })
        })
    }

    useEffect(() => {
        getUsers()
    })

    function deleteUser(id) {
        fetch(`http://localhost:8000/data/${id}`, {
            method:'DELETE'
        }).then((result) => {
            result.json().then((res) => { 
                console.log(res);
                getUsers()
            })
        })
    }

    function selectUser(id) {
        console.log("function called");
        let item = users[id - 1]
        setName(item.name)
        setEmail(item.email)
        setUserId(item.id)
    }
    

  return (
      <div>
          <table>
              <tr>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Mobile</td>
                  <td>Operations</td>
                  <td>User</td>
              </tr>
              {
                  users.map((item, i) => {
                      <tr key={i}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.mobile}</td>
                          <td><Button onClick={() => deleteUser(item.id)}>Delete</Button></td>
                          <td><Button onClick={() => selectUser(item.id)}>Update</Button></td>
                      </tr>
                   })
              }
          </table>
          <div>
              <TextField value={name} />
              <TextField value={email} />
              <TextField value={mobile} />
              <Button>Update User</Button>
          </div>
    </div>
  )
}

export default Tabledata