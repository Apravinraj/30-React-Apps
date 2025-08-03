import {Pie} from 'react-chartjs-2'
import 
{
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
}
    from 'chart.js'
    
ChartJS.register(ArcElement , Tooltip , Legend);

interface Props{
    data: {activity:string;hours:number}[]
}

const TimeChart = ({data}:Props) => {

    const charData = {
        labels: data.map((d) => d.activity),
        datasets:[
            {
                labels:"Hours",
                data:data.map((d) => d.hours),
                backgroundColor: [
                    '#FF6384','#FF6384','#FF6384','#FF6384'
                ],
                borderWidth: 1,
            }
        ]
    }
  return (
    
      <Pie data={charData}/>
    
  )
}

export default TimeChart
