import { useState } from "react"
import {Button} from "./ui/button"
import {Input} from "./ui/input"

interface Props {
  addData: (activity:string,hours:number)=> void
}

const Timeform = ({addData}:Props) => {


    const [activity,setActivity] = useState("");
    const [hours , setHours] = useState("");

    const handleSubmit = () => {
      addData(activity,Number(hours))
      setActivity("");
      setHours("");
    }

  return (
    <div className="space-y-3">
      
      <Input
      placeholder="add activity"
      value={activity}
      onChange={(e) => {(setActivity(e.target.value))}}
      ></Input>

      <Input
      type="number"
      placeholder="add hours"
      value={hours}
      onChange={(e) => {(setHours(e.target.value))}}
      ></Input>


      <Button className="w-full" onClick={handleSubmit}>Add activity</Button>
    </div>
  )
}

export default Timeform
