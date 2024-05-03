import "./home.scss";
import Topbox from "../../components/topbox/topbox";
import Chartbox from "../../components/chartbox/chartbox";

import { chartBoxUser } from "../../data";
import { chartBoxProduct } from "../../data";
import { chartBoxRevenue } from "../../data";
import { chartBoxConversion } from "../../data";

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
      <div className="box box8"></div>
      <div className="box box9"></div>
    </div>
  );
};

export default Home;
