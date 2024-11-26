import { useEffect, useState } from "react";

export function useFetchPostTitle(){
          const [post,setPost] = useState({});

          async function getPost(){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const data = await response.json()
            console.log('data: ', data);
            setPost(data)
          }
          
            useEffect(()=>{
              getPost();
            },[])
          
          return post.title
}

export function useFetch(url){
          const [data ,setData ]= useState({});
          const [loading,setLoading] = useState(false)

          async function getDetails(){
                    setLoading(true)
                    const response = await fetch(url)
                    const json = await response.json();
                    setData(json)
                    setLoading(false)
                    
          }

          useEffect(()=>{
                    getDetails()
          },[url])

          useEffect(()=>{
                    const clock = setInterval(function(){
                              getDetails()
                    }, 10*1000)

                    return function (){
                              clearInterval(clock)
                    }

          },[])

          return {
                    data,
                    loading
          }
}