import React, { useState } from 'react'
import {Input} from './ui/input'
import {Button} from './ui/button'
import {db} from '@/lib/firebase'
import { collection,addDoc,serverTimestamp } from 'firebase/firestore'
import toast from 'react-hot-toast';


 const NoteForm = () => {
    const [note,setNote] = useState("");
    const [loading,setLoading] = useState(false);

    const handleChange = (e:any) =>{
        setNote(e.target.value);
    }

    const handleSubmit = async() =>{

        if(!note.trim()) {
            toast.error("Please Enter a Note")

        }

        else{
            setLoading(true);

        await addDoc(collection(db, "notes"),{
            content:note,
            createdAt:serverTimestamp()
        })
        setNote("");
        setLoading(false);
        toast.success("Note Added");
        }
    }
  return (
    <div className='space-y-2'>
      <Input
      placeholder='Type a note...'
      value={note}
      onChange={handleChange}></Input>
      <Button className='w-full mt-3'
      onClick={handleSubmit}>
        {loading ? "Saving..." : "Save Note"}
      </Button>
    </div>
  )
}

export default NoteForm
