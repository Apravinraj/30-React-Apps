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
    <div>
      <h1>Mood Mailer</h1> 
      <Input
      
      placeholder="Whats your current Mood"
      value = {mood}
      onChange={(e) => setMood(e.target.value)}
      disabled={false}>

      </Input>

      <Button
      onClick={onGenerate}
      disabled={disabled}> Click me</Button>
    </div>
  )
}

export default MoodInput
