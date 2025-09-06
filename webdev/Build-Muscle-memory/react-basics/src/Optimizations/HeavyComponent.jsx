import React, { useEffect, useState } from 'react'

const HeavyComponent = () => {
  const [todos,setTodos] = useState([null];)

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
    .then(res => res.json())
    .then(console.log(res))
    .then(setTodos(res));

  },[])
  

  return (
    <div>
      HeavyComponent
      {/* show the response */}
    </div>
  )
}

export default HeavyComponent