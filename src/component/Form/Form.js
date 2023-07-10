import React, { useRef, useState } from 'react'
import './form.css'
import Forinvalid from '../forerrors/Forinvalid'
const Form = (props) => {
  
  const [data, setdata] = useState([])
  const [isvalid, setisvalid] = useState(null)
  const enteredname=useRef()
  const enteredage=useRef()
  const enteredcollegename=useRef()
 
  const getdata = (e) => {
    e.preventDefault()
 const  enteredage1=enteredage.current.value
 const  enteredcollegename1=enteredcollegename.current.value
 const enteredname1=enteredname.current.value
    const data = {
      id:Math.random().toString(),
      name: enteredname1,
      age: enteredage1,
      collegename:enteredcollegename1
    }
    if (enteredname1.trim().length == 0 || enteredage1.trim().length == 0) {
      setisvalid({
        title:"Please Enter a valid input(not a empty input)"
      })
      return;
    }
    if (enteredage1 <= 0) {
      setisvalid({
        title:"Please Enter a valid age"
      })
      return;
    }
    enteredage.current.value=''
    enteredcollegename.current.value=''
    enteredname.current.value=''
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
            <input type="text"  ref={enteredname} /><br></br>
            <label>Age</label><br></br>
            <input type="number"  ref={enteredage} />
            <label>College-name</label><br></br>
            <input type="text"  ref={enteredcollegename}/>
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
              <div>
               {"-"+data.collegename}
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