import React,{ useState,useEffect} from 'react'
import { TextField,Stack,Autocomplete,Box } from '@mui/material'

function Autosearch() {
    const [jsonResults, setJsonResults] = useState([])
    
    useEffect(() => { 
        fetch("http://localhost:8000/data")
            .then((res) => res.json())
        .then((json)=>setJsonResults(json.data))
    }, [])
    // console.log(jsonResults)
  return (
      <Stack sx={{ width: 300}} >
          <Autocomplete id="demo_text"
              getOptionLabel={(jsonResults) => `${jsonResults.question} ${jsonResults.answer}`}
              options={jsonResults}
              sx={{ width: 300 }}
              isOptionEqualToValue={(option, value) => {
                  option.question===value.question
              }}
              noOptionsText={"No Available"}
              renderOption={(props, jsonResults) => (
                  <Box component="li" {...props} key={jsonResults.id}>
                      {jsonResults.question}{jsonResults.answer}
                  </Box>
              )}
              renderInput={(params)=> <TextField {...params} label="Search anything" />}
          />
    </Stack>
  )
}

export default Autosearch