import "./chartbox.scss";
import { Link } from "react-router-dom";
import { ResponsiveContainer } from "recharts";
import { LineChart } from "recharts";
import { Line } from "recharts";
import { Tooltip } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const Chartbox = (props: Props) => {
  return (
    <div className="chartbox">
      {/*primer hijo - primera columna*/}
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          View All
        </Link>
      </div>

      {/*segundo hijo - segunda columna*/}
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 50 }}
              />

              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}
          </span>
          <span className="month">This month</span>
        </div>
      </div>
    </div>
  );
};

export default Chartbox;
