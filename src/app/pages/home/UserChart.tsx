import LineChart from "@/common/LineChart";


const UserChart = ()=>{
  const data = {
    labels: [
      "2023-01",
      "2023-02",
      "2023-03",
      "2023-04",
      "2023-05",
      "2023-06",
      "2023-07",
      "2023-08",
    ],
    datasets: [
      {
        data: [100, 120, 115, 134, 168, 132, 200,300],
        backgroundColor: "purple",
      },
    ],
  };

  return (
    <div>
      <LineChart data={data} />
    </div>
  );
};

export default UserChart;