import React from 'react'
import { TextField, Stack, Autocomplete, Box, Button} from '@mui/material'

function PostData() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    function saveUser() {
        let data = {name,email}
        fetch("http://localhost:8000/data", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            // console.log(result);
            result.json().then((res) => {
                console.log(res);
            })
        })
    }

  return (
      <div>
          <h1>Post API Example</h1>
          <TextField type={text} value={name} onChange={(e) => setName(e.target.value)} name='name' />
          <TextField type={text} value={email} onChange={(e) => setEmail(e.target.value)} name='email' />
          <Button onClick={saveUser}>Save new user</Button>
    </div>
  )
}

export default PostData