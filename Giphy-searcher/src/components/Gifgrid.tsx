import React, { useEffect, useState } from 'react'
import { fetchGifs } from '@/lib/giphy'



interface Props{
  query: string,
}

const GifGrid = ({query}:Props) => {

  const [gifs,setGifs] = useState<any[]>([]);
  const [loading,setLoading] = useState(true);

  useEffect( ()=>{
    const getGifs = async() => {

      setLoading(true);
      try{
        const res = await fetchGifs(query);
        setGifs(res);
      }
      catch(error){
        <p>error</p>
      }
      finally{
        setLoading(false);
      }

    }

    getGifs()
  },[query])


  if(loading) return <p>Loading...</p>

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
      {
        gifs.map((gif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt="" />
        ))
      }
    </div>
  )
}

export default GifGrid
