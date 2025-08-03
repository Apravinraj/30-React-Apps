import { useState } from "react"
import MoodInput from "../MoodInput"
import MoodOutput from "../MoodOutput";
const Home = () => {

    const [mood,setMood] = useState("");
    const [subject,setSubject] = useState("");
    const [footer,setFooter] = useState("");
    const [generated , setGenerated] = useState(false);


    const handleGenerate = () =>{
        const lowerMood = mood.toLowerCase();

        if(lowerMood.includes("happy")){
            setSubject("good")
            setFooter("keep going") 
        }
        else if(lowerMood.includes("sad")){
            setSubject("bad")
            setFooter("stop") 
        }
        else{
             setSubject("say mood")
            setFooter("gooo") 
        }

        setGenerated(true);
    }

    const handleReset = () => {
        setMood("");
        setSubject("");
        setFooter("");
        setGenerated(false);
    }

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 rounded-lg shadow-sm bg-white space-y-6">
        <h2 className="text-2xl font-bold tet-gray-800">Mood Mailer</h2>
    {!generated ?
                 (<MoodInput 
                            mood={mood} 
                            setMood={setMood} 
                            onGenerate = {handleGenerate} 
                            disabled = {generated}
                ></MoodInput>)
                :

                (<MoodOutput 
                        subject = {subject} 
                footer={footer} 
                onReset={handleReset}></MoodOutput>)
    }


      

      
    </div>
  )
}

export default Home
