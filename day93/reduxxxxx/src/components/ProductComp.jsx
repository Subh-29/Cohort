// ProductCard.jsx
const ProductCard = ({ product, isAdmin = false }) => {
  return (
    <div
      className="rounded-xl shadow-lg overflow-hidden bg-[--bg-dark] text-[--text-light] p-4"
      style={{ border: '1px solid var(--bg-accent)' }}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
      <p className="text-sm text-[--text-muted] mb-2">{product.category}</p>
      <p className="text-sm mb-2">{product.description}</p>
      <p className="text-sm font-bold mb-2">Price: ₹{product.price}</p>
      <p className="text-sm mb-2">Stock: {product.stock}</p>
      <p className="text-sm mb-2">Views: {product.views}</p>
      <div className="flex items-center gap-4">
        <span className="text-sm">👍 {product.likes?.length || 0}</span>
        <span className="text-sm">👎 {product.dislikes?.length || 0}</span>
      </div>
      {isAdmin && (
        <div className="mt-4 flex gap-2">
          <button className="px-3 py-1 text-sm rounded bg-[--colour-accent] hover:bg-[--colour-accent-light]">
            Edit
          </button>
          <button className="px-3 py-1 text-sm rounded bg-red-600 hover:bg-red-700">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
