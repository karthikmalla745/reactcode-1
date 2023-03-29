import React,{useState} from 'react'

function Notes(){
  const [note,setNote] = useState({title:"",content:""})


  const handleChange = (e) => {
    const {name,value} = e.target
    setNote((prevState)=> ({
      ...prevState,
      [name]:value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setNote(note)
  }

  return <div>
    <h1>Notes</h1>
    <div>
      <center>
      <form  style={{border:'2px solid black' ,padding:'20px'}}>
      <input style={{fontSize:'large',width:"30%",padding:'10px'}} type="text" name="title" placeholder="title" value={note.title} onChange={handleChange} /><br/><br/>

      <textarea style={{fontSize:'large',width:"50%",padding:'10px'}} placeholder="content" name="content" value={note.content} onChange={handleChange} /><br/><br/>
      <button style={{background:'red',color:'white',padding:'5px 10px',borderRadius:'4px'}} type="submit" onClick={handleSubmit}>submit</button>
      </form>
      </center>
    </div><br/><br/>
    <center>
    {note && <div style={{border:'2px solid black', padding:'10px',width:'40%'}}>
      <h2 style={{color:'blue'}}>{note.title}</h2>
      <p style={{textAlign:'left'}}>{note.content}</p>
    </div>

    }
    </center>

  </div>
}

export default Notes