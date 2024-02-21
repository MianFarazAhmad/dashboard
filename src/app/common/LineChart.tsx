"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

interface MyComponentProps {
    data: any;
  }
  
  const LineChart: React.FC<MyComponentProps> = ({ data })=>{
     return(
        <div>
    <Line  data={data}  />
        
        </div>
     )
}

export default LineChart