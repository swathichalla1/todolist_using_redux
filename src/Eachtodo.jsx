import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {EDIT,DELETE} from './Actions.jsx'


const Eachtodo = (props) => {

    const dispatch = useDispatch()
    const [edit,setedit] = useState(false)
    
    const {details} = props 
    
    const {id,title} = details 

    
    const [afteredit,setafteredit] = useState(title)

    const handledelete = ()=>{
        dispatch(DELETE({id:id}))
    }

    const savetodo = ()=>{
        if(afteredit !== ""){
            setedit(!edit)
        const newtodo = {
            id:id,
            title:afteredit
        }
        dispatch(EDIT(newtodo))
        }
        

    }

    const edittodo = ()=>{
        setedit(!edit)
    }
    
  return (
    <div>
      <li>
      {edit ? <input type="text" value={afteredit} onChange={(e)=>(setafteredit(e.target.value))}/>  : 
    <p>{title}</p>}

    {edit ? (<button className="btn btn-success m-3" onClick={savetodo}>Save</button>):(
        <div>
        <button className="btn btn-secondary m-3" onClick={edittodo}>EDIT</button>
      <button className="btn btn-danger" onClick={handledelete}>DELETE</button>
      </div>)}
      
      
      </li>
    </div>
  )
}

export default Eachtodo
