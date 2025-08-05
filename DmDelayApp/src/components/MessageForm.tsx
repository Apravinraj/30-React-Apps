
import { Textarea } from './ui/textarea'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useState } from 'react'
const MessageForm = () => {

    
    const [message,setMessage] = useState<string>("");
    const [sentMessage , setSentMessage] = useState<string>("");
    const [delay,setDelay] = useState<number>(0);
    const[timerId,setTimerId] = useState<NodeJS.Timeout|null>(null);
    const[isSending, setIsSending] = useState<boolean>(false);

    const handleMessageChange = (e: any) => {
       setMessage(e.target.value)
    }

    
    const handleDelayChange = (e: any) => {
       setDelay(Number(e.target.value))
    }

    const handleSend = () =>{
        setIsSending(true);

        const id = setTimeout( () => {
            setSentMessage(message);
            setMessage("");
            setIsSending(false)
        }, delay*1000)

        setTimerId(id);
    }

    const handleCancel = () => {
        if(timerId){
            clearTimeout(timerId);
            setIsSending(false);
        }
    }

  return (
    <div className='max-w-md mx-auto mt-w20 p-6 border rounded-lg shadow-sm bg-white space-y-4'>
      <h2 className='text-2xl font-bold text-grey-800 '>Dm Delay</h2>
        <Textarea 
        placeholder='Type a message'
        value={message}
        onChange={handleMessageChange}></Textarea>

        <Input
        type='number'
        placeholder='Delay sec'
        value={delay}
        onChange={handleDelayChange}
        disabled={isSending}></Input>

       {!isSending ? 
       ( <Button onClick={handleSend}>Send with delay</Button>)
        : 
       ( <Button variant='destructive' onClick={handleCancel}>Cancel</Button>) }


        {sentMessage ? (<div className='bg-green-100 border rounded p-3 text-green-900'>
       <p className='font-semibold'>Message Sent:</p>
       <p>{sentMessage}</p>
       </div>): <p></p> }


        
    </div>
  )
}

export default MessageForm
