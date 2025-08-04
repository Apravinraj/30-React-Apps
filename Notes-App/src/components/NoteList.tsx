import React, { useState,useEffect } from 'react'
import { db } from '@/lib/firebase'
import { collection,onSnapshot,deleteDoc,doc } from 'firebase/firestore'
import { Button } from './ui/button'
import toast from 'react-hot-toast'
interface Note{
    id:string,
    content:string,
    // createdAt?:{
    //     seconds:number
    // }
}

const NoteList = () => {

    const [notes,setNotes] = useState<Note[]>([]);
    
    useEffect(() => {

        const unsubscribe = onSnapshot(collection(db,"notes"),(snapshot) => {
            const notesData = snapshot.docs.map(doc => ({
                id:doc.id,
                ...doc.data()
            })) as Note[];

            setNotes(notesData);
        })
        return () => unsubscribe();
    },[]);

    if(notes.length === 0){
        return <p className='text-center text-grey-400 mt-4'>No notes yest. Start typing!</p>
    }

    const handleClick = async(id:string) =>{
        await deleteDoc(doc(db,"notes",id));
        toast.success("Note Deleted")
    }

  return (
    <div className='grid gap-4 mt-4 grid-col-1 md:grid-cols-2'>
        {notes.map((note) => (
            <div className='p-5 border border-grey-200 rounded-xl shadow-md bg-white hover:shadow-lg transition-all duration-200 flex items-center justify-between'>
                 <p className='text-base text-grey-800'>{note.content}</p>

                 <div className='flex items-center justify-between text-sm'>
                    <Button variant="destructive"
                    onClick={() => handleClick(note.id)}
                    >
                        Delete
                    </Button>
                 </div>
            </div>
           
        ))}
      
    </div>
  )
}

export default NoteList
