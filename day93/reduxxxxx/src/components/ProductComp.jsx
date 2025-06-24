import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteProd } from "../store/productAction";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const ProductCard = ({ product, isAdmin = false }) => {
  const dispatch = useDispatch();
  const cardRef = useRef(null);

  const deleteHandler = (id) => {
    dispatch(deleteProd(id));
  };

  // Only run GSAP if not in admin mode
  useEffect(() => {
    if (isAdmin) return;
    const el = cardRef.current;
    let boundingBox;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    const handleMouseMove = (e) => {
      boundingBox = el.getBoundingClientRect();
      const x = e.clientX - boundingBox.left - boundingBox.width / 2;
      const y = e.clientY - boundingBox.top - boundingBox.height / 2;

      gsap.to(el, {
        x: x * 0.2,
        y: y * 0.2,
        scale: 1.1,
        duration: 0.3,
        ease: "power4.out",
        zIndex: 555
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power1.out",
        zIndex: 1
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isAdmin]);

  return (
    <div
      ref={cardRef}
      className="rounded-xl flex flex-col shadow-lg overflow-hidden text-(--text-light) p-4 transform-gpu transition-all"
      style={{
        backgroundColor: "var(--colour-primary)",
        border: "1px solid var(--bg-accent)",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain object-center rounded-md mb-4"
      />

      <div className=" flex justify-between">
        <div>

          <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
          <p className="text-sm text-(--text-muted) mb-2">{product.category}</p>
          <p className="text-sm mb-2">{product.description}</p>
          <p className="text-sm font-bold mb-2">Price: ₹{product.price}</p>
          <p className="text-sm mb-2">Stock: {product.stock}</p>
          <p className="text-sm mb-2">Views: {product.views}</p>
          <div className="flex items-center gap-4">
            <span className="text-sm">👍 {product.likes?.length || 0}</span>
            <span className="text-sm">👎 {product.dislikes?.length || 0}</span>
          </div>
        </div>


        <div>
          {isAdmin && (
            <div className="mt-4 flex md:flex-col gap-2">
              <button className="px-3 py-1 text-sm rounded bg-(--colour-accent) hover:bg-(--colour-accent-light) hover:text-(--text-secondary-dark)">
                Edit
              </button>
              <button
                className="px-3 py-1 text-sm rounded bg-red-600 hover:bg-red-700"
                onClick={() => deleteHandler(product.id)}
              >
                Delete
              </button>
            </div>
          )}
          {!isAdmin && (
            <div className="mt-4 flex md:flex-col gap-5">
              <button className="px-3 py-1 w-[150px] text-xl rounded bg-(--bg-accent) hover:bg-(--colour-accent-light) hover:text-(--text-secondary-dark)">
                Buy Now
              </button>
              <button
                className="px-3 py-1 w-[150px] text-xl rounded bg-(--bg-accent)/40 hover:bg-(--bg-accent)/70"
                onClick={() => console.log("hello")}
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
