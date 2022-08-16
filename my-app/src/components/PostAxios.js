import React from 'react'
import axios from 'axios'
import { TextField, Stack, Autocomplete, Box, Button } from '@mui/material'
// import {userHistory} from ''
function PostAxios() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const history = useHistory();
    

    async function signUp() {
        let item = { name, email, password }
        console.log(item);

        let result = await fetch("http://localhost:8000/register", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json"
            }
        })
        result = await result.json()
        console.log(result);
        localStorage.setItem("user-info", JSON.stringify(result))
        history.push("/add")
        
    }
    
  return (
      <div>
          <TextField value={name} onChange={(e) => setName(e.target.value)} />
          <TextField value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={signUp}>SignUp</Button>
    </div>
  )
}

export default PostAxios