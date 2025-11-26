import React, { useEffect, useRef, useState } from 'react'
import './searchbar.css'
import { Search } from 'lucide-react'


export default function Searchbar(){
    const [query, setQuery] = useState("")
    const inputRef = useRef()
    const [searchResult,setSearchResult] = useState([])
    const [isSearchItemsVisible,setIsSearchItemsVisible] = useState(false)

    
    function handleSearchInput(e){
      
        setQuery(e.target.value)
        
    }

    async function fetchData(query){
          if(!query){
            setSearchResult([])
            return;
        }

        const res = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
        const data = await res.json();
       setSearchResult(() => [...data.recipes])
    }

    function cleanSearchInput(e){
        if ( e.key == 'Enter' ){
            setQuery("")
        }
    }

    function onClickSearchQuery(data){
        setQuery(data.name)
    }

    useEffect(() => {
       const timer = setTimeout(() => {
         fetchData(query)
       }, 300)

       return () => {
        clearTimeout(timer)
       }
    }, [query])

    useEffect(() => {
        inputRef.current.focus();
    },[])

  return (
    <>
        <h1>AutoComplete Search</h1>
        <div className='searchbar-container'>

            <div className='searchbar'>
                <Search />
                <input 
                    ref={inputRef}
                    className='input'
                    type="text" 
                    onFocus={() => setIsSearchItemsVisible(true)}
                    // onBlur={() => setIsSearchItemsVisible(false)}
                    onKeyDown={cleanSearchInput}
                    placeholder='search here ' 
                    name="searchbar"
                    value={query}
                    onChange={handleSearchInput} 
                />
            </div>

            <div className='searchResultBox'>
                {isSearchItemsVisible && searchResult.map((response) => (
                    <div 
                        className='searchResultItem'
                        onClick={() => setQuery(response.name)}
                        key={response.id}> 
                            <Search/>
                            {response.name} 
                    </div>
                ))}
            </div>
            
        </div>
     </>
  )
}
