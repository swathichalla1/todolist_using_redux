import React from 'react'
import {useSelector} from 'react-redux'
import Eachtodo from './Eachtodo.jsx'

const Showtodo = () => {
    
    const todos = useSelector((state)=>state.todos)
    
    
  return (
    <div>
      <ul className="list-group">{todos.map((each)=>(
        
        <Eachtodo details={each} key={each.id}/>
  ))}</ul>
    </div>
  )
}

export default Showtodo
