import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import { Button } from "./ui/button"


type Props = {
    subject : string,
    footer : string,
    onReset: () => void
}
const MoodOutput = ({subject,footer,onReset}:Props) => {
  return (
    <div className="space-y-6">
        <Input value={subject}></Input>
      <Textarea value={footer}></Textarea>
      <Button variant="destructive"
onClick={onReset}>Reset</Button>
    </div>
  )
}

export default MoodOutput
