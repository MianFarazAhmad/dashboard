"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  BarElement,
} from "chart.js";
import {Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip
);

interface MyComponentProps {
    data: any;
  }
  
  const VerticalBarChart: React.FC<MyComponentProps> = ({ data })=>{
     return(
        <div>
    <Bar  data={data}  />
        
        </div>
     )
}

export default VerticalBarChart