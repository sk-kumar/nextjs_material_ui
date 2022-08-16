import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TextField, Stack, Autocomplete, Box, Button} from '@mui/material'

function GetAxiosData() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        async function getData() {
            try {
                const result = await axios.get(`http://localhost:8000/data`)
                // console.log(result);
                console.log(result.data.dataDetails);
                setData(result.data.dataDetails)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    },[])
    
  return (
      <div>
          <table>
              <thead>
                  <tr>
                      <th>Question</th>
                      <th>Answer</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      data &&
                      (data).map((item, index) => {
                          return (
                              <tr key={index}>
                                  <td>{item.question} </td>
                                  <td>{item.answer}</td>
                              </tr>
                          )
                      })
                  }
              </tbody>
          </table>

    </div>
  )
}

export default GetAxiosData