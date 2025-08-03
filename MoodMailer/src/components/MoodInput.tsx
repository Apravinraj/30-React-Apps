import { Input } from "./ui/input"
import { Button } from "./ui/button"

type Props = {
mood : string,
setMood:(val:string) => void,
onGenerate:() => void,
disabled:boolean
}


const MoodInput = ({mood,setMood,onGenerate,disabled} : Props) => {
    
  return (
    <div className="space-y-6">
     
      <Input
      
      placeholder="Whats your current Mood"
      value = {mood}
      onChange={(e) => setMood(e.target.value)}
      disabled={false}>

      </Input>

      <Button
      onClick={onGenerate}
      disabled={disabled}> Generate Email Template</Button>
    </div>
  )
}

export default MoodInput
