import React, { useState, useEffect } from 'react';
import axios from "axios";
import { TextField, Stack, Autocomplete, Box } from '@mui/material'


function SearchQuery() {
    const [data, setData] = useState([]);
    const [questionMatch, setQuestionMatch] = useState([]);

    useEffect(() => {
        const allData = async () => {
            const result = await axios.get("http://localhost:8000/data");
            setData(result.data);
        };
        allData();
    }, []);

    // console.log(data);

    // const searchQuestions = (text) => {
    //     if (!text) {
    //         setQuestionMatch([]);
    //     }
    //     else {
    //         let matches = questions.filter((question) => {
    //             const regex = new RegExp(`${text}`, "gi");
    //             return question.question.match(regex);
    //         });
    //         setQuestionMatch(matches);
    //     }};

    const handleChange = (e) => {
        console.log(`${e.target.value}`);
        setQuestionMatch(e.target.value)
    }

    return (
        <div>
            <form>
                <Box>
                    <TextField
                        type="search"
                        // onChange={(e) => searchQuestions(e.target.value)}
                        onChange={handleChange}
                        label="Search Anything"
                        variant='outlined'
                        color='secondary'
                    />
                </Box>
            </form>
        </div>
    )}

export default SearchQuery;
