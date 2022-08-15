import React, { useEffect,useState } from 'react'

function GetData() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:8000/data").then((result) => {
            result.json().then((res) => {
                // console.log(res);
                setData(res);
             })
        })
    },[])
    console.log(data);
  return (
      <div>
              {data.map((item) => <p>{item.question}</p>)}
    </div>
  )
}

export default GetData