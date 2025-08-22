import { singleUser } from "../../data";
import Single from "../../components/single/single";
const SingleUser = () => {
  return (
    <div className="single-user">
      <Single {...singleUser} />
    </div>
  );
};

export default SingleUser;
