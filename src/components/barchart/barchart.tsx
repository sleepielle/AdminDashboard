import "./barchart.scss";
import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

const Barchart = (props: Props) => {
  return (
    <div className="barchartbox">
      <h1 className="title">{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip
              contentStyle={{ backgroundColor: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Barchart;
