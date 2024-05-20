import React from "react";
import "../single/single.scss";
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

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart: {
    dataKeys: { name: string; color: string };
    data: object[];
  };
  activities?: { time: string; text: string };
};

const Single = (props: Props) => {
  //fetch data and send to Single Component
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {props.img && <img src={props.img} alt="" />}
            <h1>{props.title}</h1>
            <button>Update</button>
          </div>
          <div className="details">
            <div className="itemTitle"></div>
            <div className="itemValue"></div>
          </div>
        </div>
        <hr />
        <div className="chart">
          <LineChart
            width={500}
            height={300}
            data={props.chart.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(0,0,0,.34" }}
              labelStyle={{ fontWeight: "bold" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
      <div className="activities">
        <h2 className="title">Latest Activities</h2>
        <ul>
          <li>
            <div>
              <p>John Doe purchased</p>
              <time>3 weeks ago</time>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Single;
