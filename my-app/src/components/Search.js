import React, { useState } from 'react'
import { Container, Typography, TextField, Button} from '@mui/material'
import {KeyboardArrowRight} from '@mui/icons-material'

// const useStyles = makeStyles({
//     field: {
//         marginTop: 20,
//         marginBottom: 20,
//         display:'block'
//     }
// })
function Search() {
    // const classes = useStyles();
    const [title, setTitle] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [value, setValue] = useState("")
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        if (title == '') {
            setTitleError(true)
        }

        if (title) {
            console.log(title);
        }
    }
    
    const handleChange = (e) => {
        console.log(`${e.target.value}`);
        setValue(e.target.value)
    }

  return (
      <div>
          <Container>
              <Typography variant="h4" color='textSecondary' component='h2' gutterBottom>
                  Search ....
              </Typography>
              <form className="search-form" noValidate autoComplete="off" onSubmit={handleSubmit} >
                  <TextField
                    //   onChange={(e) =>setTitle(e.target.value)}
                      onChange={handleChange}
                    //   className={classes.field}
                      value={value}
                      label="Search Anything"
                      variant='outlined'
                      color='secondary'
                      fullWidth 
                      required
                      error={titleError}
                  />
                  <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                    //   onClick={()=> console.log("this is clicked")}
                      endIcon={<KeyboardArrowRight/>}
                  >Submit</Button>
              </form>
          </Container>
    </div>
  )
}

export default Search