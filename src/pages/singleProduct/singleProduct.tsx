import Single from "../../components/single/single";
import { singleProduct } from "../../data";
const SingleProduct = () => {
  return (
    <div className="single-product">
      <Single {...singleProduct} />
    </div>
  );
};

export default SingleProduct;
