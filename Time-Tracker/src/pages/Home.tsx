import TimeChart from '@/components/TimeChart';
import Timeform from '../components/Timeform'
import { useState } from 'react'
const Home = () => {

    const [data,setData] = useState<{activity:string ; hours:number}[]> ([]);


    const handleAdd = (activity:string , hours:number) => {

    setData((prev) => [...prev,{activity,hours}] );

    console.log(data);

}

  return (

    
    <div className='max-w-md mx-auto p-6 mt-10 bg-white rounded shadow space-y-6'>
      <h1 className='text-2xl font-bold'> Time Tracker </h1>
      <Timeform addData={handleAdd}></Timeform>
      <TimeChart  data = {data}/>
    </div>
  )
}

export default Home
