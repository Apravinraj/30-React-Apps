import React from "react"

interface Props{
    query : string,
    setQuery : (value:string) => void
}

const Searchbar = ({query,setQuery}:Props) => {

    const handleChange = (e:any) =>{
        setQuery(e.target.value); 
       
    }
     

  return (
    <div>
      <input type="text" 
      value={query}
      onChange={handleChange} 
      className="w-full px-4 py-2 border rounded-md shadow-sm"/>
    </div>
  )
}

export default Searchbar
