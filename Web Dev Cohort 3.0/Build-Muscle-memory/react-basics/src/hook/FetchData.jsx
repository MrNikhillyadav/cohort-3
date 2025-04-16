import React, { useState } from 'react'

export function FetchData() {
    const [data,setData] = useState(null)

    async function fetchData(){
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()

        if(data){
          setData(data)
        }
    }

  return (
    <div>
        {data.map((products) => (
          <div key={products.id}> 
            {products.name} {" __   : "}
            {products.email}
          </div>
        ))}
        <button onClick={fetchData}>fetch</button>
    </div>
  )
}
