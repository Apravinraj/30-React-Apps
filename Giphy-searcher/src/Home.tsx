import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import Gifgrid from "./components/Gifgrid";


const Home = () => {

    const [query,setQuery] = useState("");

  return (
    <div className="w-full max-w-4xl mx-auto text-center space-y-6 p-5">
      <h1 className="text-3xl font-bold">Giphy</h1>
<Searchbar query = {query}
           setQuery={setQuery}></Searchbar>
      <Gifgrid query={query} ></Gifgrid>
    </div>
  )
}

export default Home
