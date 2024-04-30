import { Link } from "react-router-dom";
import "./Menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item">
          <span className="title">{item.title}</span>

          {item.listItems.map((listsItem) => (
            <Link to={listsItem.url} className="listItem">
              <img src={listsItem.icon} alt="" />
              <span className="listItemTitle">{listsItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
