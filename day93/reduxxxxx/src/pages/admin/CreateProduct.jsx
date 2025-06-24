// CreateProductPage.jsx
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import productAction, { productCreate } from '../../store/productAction';
const CreateProductPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
const dispatch = useDispatch();
  const onSubmit = async (data) => {
    dispatch(productCreate(data));
    dispatch(productAction);
    navigate("/admin");
  };

  return (
    <div className="min-h-full bg-(--bg-dark) flex items-center justify-center" >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-(--bg-section) text-(--text-light) p-8 rounded-xl shadow-xl space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Product</h2>

        <input
          {...register('title', { required: true })}
          placeholder="Title"
          className="w-full px-4 py-2 rounded-lg bg-transparent border border-(--colour-accent) text-(--text-light) placeholder-(--text-muted)"
        />

        <textarea
          {...register('description', { required: true })}
          placeholder="Description"
          className="w-full px-4 py-2 rounded-lg bg-transparent border border-(--colour-accent) text-(--text-light) placeholder-(--text-muted)"
        />

        <input
          {...register('price', { required: true })}
          type="number"
          placeholder="Price"
          className="w-full px-4 py-2 rounded-lg bg-transparent border border-(--colour-accent) text-(--text-light) placeholder-(--text-muted)"
        />

        <input
          {...register('stock', { required: true })}
          type="number"
          placeholder="Stock"
          className="w-full px-4 py-2 rounded-lg bg-transparent border border-(--colour-accent) text-(--text-light) placeholder-(--text-muted)"
        />

        <input
          {...register('category', { required: true })}
          placeholder="Category"
          className="w-full px-4 py-2 rounded-lg bg-transparent border border-(--colour-accent) text-(--text-light) placeholder-(--text-muted)"
        />

        <input
          {...register('image', { required: true })}
          type="url"
          placeholder="Image URL"
          className="w-full px-4 py-2 rounded-lg bg-transparent border border-(--colour-accent) text-(--text-light) placeholder-(--text-muted)"
        />

        <button
          type="submit"
          className="w-full bg-(--button-primary) hover:bg-(--button-hover) hover:text-(--text-secondary-dark) text-(--button-text) font-semibold py-2 rounded-lg"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProductPage;
