import React ,{useState,useEffect} from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function Graph() {
  const [CoinsData,setCoinsData] = useState([])

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
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="h-full w-full flex justify-center gap-3">
      <div className="flex-[0.8] h-full w-full ">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={500} height={500}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Graph;
