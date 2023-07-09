import React, { useState } from 'react'
import './form.css'
import Forinvalid from '../forerrors/Forinvalid'
const Form = (props) => {
  const [enteredname, setenterename] = useState('')
  const [enteredage, setentereage] = useState('')
  const [data, setdata] = useState([])
  const [isvalid, setisvalid] = useState(null)
  const getname = (e) => {
    setenterename(e.target.value)
  }
  const getage = (e) => {
    setentereage(e.target.value)
  }
  const getdata = (e) => {
    e.preventDefault()
    

    const data = {
      id:Math.random().toString(),
      name: enteredname,
      age: enteredage
    }
    setenterename("")
    setentereage('')
    if (enteredname.trim().length == 0 || enteredage.trim().length == 0) {
      setisvalid({
        title:"Please Enter a valid input(not a empty input)"
      })
      return;
    }
    if (enteredage <= 0) {
      setisvalid({
        title:"Please Enter a valid age"
      })
      return;
      return;
    }
    setdata((prevdata) => {
      return [data, ...prevdata]
    })
  }
 const removeerrorhandler=()=>{
setisvalid(null)
  }

  return (
    <div>
      <form onSubmit={getdata}>
        <div className='for_form'>
          <div className='forinput'>
            <label>Name</label><br></br>
            <input type="text" value={enteredname} onChange={getname} /><br></br>
            <label>Age</label><br></br>
            <input type="number" value={enteredage} onChange={getage} />
          </div>
          <div className=' forbutton'>
            <button type='submit'>submit</button>
          </div>
        </div>

      </form>
      <div className='datadiv'>
        {data.map((data) => (
          <div className='dataitem' key={data.id}>
            <div className='data'>
              <div>
                {data.name}
              </div>
              <div>
                {"(" + data.age + " years old"+")"} 
              </div>
            </div>
          </div>
        ))}
      </div>
      {isvalid && <Forinvalid
       data={isvalid.title}
       removeerror={removeerrorhandler} ></Forinvalid>}
    </div>
  )
}

export default Form