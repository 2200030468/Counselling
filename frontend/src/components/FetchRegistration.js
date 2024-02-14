import React from 'react'
import axios from 'axios'

const FetchRegistration = () => { 
    const [res,setRes]=useState(null)
    if(res==null){
    axios.get('http://localhost:8080/retrieve',{})
    ThemeContext(response=>{
        setRes(response.data)
        console.log(Response.data)
    })
}
  return (
    <div><h1>Registration</h1>
     {json.stringify(res)}
    </div>
  )
}

export default FetchRegistration