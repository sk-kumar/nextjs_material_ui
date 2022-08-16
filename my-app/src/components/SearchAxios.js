import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TextField, Stack, Autocomplete, Box, Button } from '@mui/material'

function SearchAxios() {
    const [text, setText] = useState("")
    const [allData, setAllData] = useState([])
    
    const changeText = (e) => {
        setText(e.target.value)
    }
    const getAnswer = (e) => {
            e.preventDefault()
            // const result = await axios.get(`https//localhost:8000/search/?q=${text}`)
        axios.get(`http://localhost:8000/search?q=${text}`)
                .then((res) => {
                    // console.log(res);
                    console.log(res.data.data);
                    setAllData(res.data.data)
                })
    } 

    
  return (
      <div>
          <form onSubmit={getAnswer}>
              <input onChange={changeText} type="search" />
              <button type='submit'>Submit</button>
          </form>
          <Box>
              {
                  allData.map((item, index) => {
                      return (
                          <div key={index}>
                              <p>{item.question}</p>
                              <p>{item.answer} </p>
                          </div>
                      )
                  })
              }
          </Box>
    </div>
  )
}

export default SearchAxios