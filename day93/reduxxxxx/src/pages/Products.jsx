import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductComp";
import { useEffect } from "react";
import productAction from "../store/productAction";
import gsap from 'gsap'

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.product?.data);
  console.log(products);

  useEffect(() => {
    dispatch(productAction());
  }, [dispatch]);
  return (
    <div className=" bg-(--bg-section)/40 p-2 rounded-xl ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products?.map((product, idx) => (
          <ProductCard key={idx} product={product} isAdmin={false} />
        ))}
      </div>
    </div>
  );
};

export default Products;