import React ,{useState , useEffect}from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Graph from "./Graph";

function Charts() {
  const [CoinsData , setCoinsData] = useState([]);


    useEffect(() => {
        fetch("https://api.livecoinwatch.com/coins/list",{
          method:"POST",
          headers:{
            "Content-Type": "application/json",
            "x-api-key": "9c6c853d-9442-4f1f-aac4-4023dd79d98e"
          },
          body:JSON.stringify(
            {
              "currency": "USD",
              "sort": "rank",
              "order": "ascending",
              "offset": 0,
              "limit": 50,
              "meta": true
            }
          )
        }).then((res) => res.json()).then((data=> setCoinsData(data)))
    
    },[])

  const data = [
    {
      name: CoinsData.name,
      CurrentPrice: CoinsData.rate,
      cap: CoinsData,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="h-full w-full flex justify-center gap-3 max-md:flex-col">
      <div className="flex-[0.8] h-full w-full ">
        <Graph />
      </div>
      <div className="flex-[1.2] h-full w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={data.name} tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts;
