import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TextField, Stack, Autocomplete, Box, Button} from '@mui/material'

function GetAxiosData() {
    const [data, setData] = useState([])
    
    async function getData() {
        try {
            const result = await axios.get(`http://localhost:8000/data`)
            // console.log(result);
            console.log(result.data);
            setData(result.data)
        } catch (error) {
            console.log(error);            
        }
    }
    useEffect(() => {
        getData()
    },[])
    
  return (
      <div>
          {data.map((item) => <p>{item.question }</p>)}
    </div>
  )
}

export default GetAxiosData