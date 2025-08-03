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
    <div>

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
