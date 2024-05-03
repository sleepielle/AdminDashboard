import "./home.scss";
import Topbox from "../../components/topbox/topbox";
import Chartbox from "../../components/chartbox/chartbox";
import Barchart from "../../components/barchart/barchart";

import { barChartBoxRevenue, chartBoxUser } from "../../data";
import { chartBoxProduct } from "../../data";
import { chartBoxRevenue } from "../../data";
import { chartBoxConversion } from "../../data";
import { barChartBoxVisit } from "../../data";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <Topbox />
      </div>
      <div className="box box2">
        <Chartbox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <Chartbox {...chartBoxProduct} />
      </div>
      <div className="box box4"></div>
      <div className="box box5">
        <Chartbox {...chartBoxRevenue} />
      </div>
      <div className="box box6">
        {" "}
        <Chartbox {...chartBoxConversion} />
      </div>
      <div className="box box7"></div>
      <div className="box box8">
        <Barchart {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <Barchart {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
