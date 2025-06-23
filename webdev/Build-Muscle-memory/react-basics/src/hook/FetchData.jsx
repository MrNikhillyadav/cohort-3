import React, {  useState } from 'react'

export function FetchData() {
    const [data,setData] = useState(null)

    async function fetchDataHandler(){

        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setData(data)
  
    }

  return (
    <div>
        {data && data.map((products) => (
          <div key={products.id}> 
            {products.name} {" __   : "}
            {products.email}
          </div>
        ))}
        <button onClick={fetchDataHandler}>fetch</button>
    </div>
  )
}
