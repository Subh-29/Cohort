import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import userAction from '../store/userAction';

const RegisterPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerHandler = (data) => {
    data.id = nanoid();
    dispatch(userAction(data));
    console.log("✅ Registered data:", data);
    reset();
    navigate("/login");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-(--bg-dark)">
      <div className="w-full max-w-md bg-(--bg-section) text-(--text-light) rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-(--text-light) mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit(registerHandler)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-(--text-muted) mb-1">
              Full Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-(--colour-accent) text-(--text-light) placeholder-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--colour-accent-light)"
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-(--text-muted) mb-1">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-(--colour-accent) text-(--text-light) placeholder-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--colour-accent-light)"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-(--text-muted) mb-1">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-(--colour-accent) text-(--text-light) placeholder-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--colour-accent-light)"
            />
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-(--text-muted) mb-1">
              Bio
            </label>
            <textarea
              {...register("bio", )}
              placeholder="Anything about you"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-(--colour-accent) text-(--text-light) placeholder-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--colour-accent-light)"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-(--button-primary) hover:bg-(--button-hover) hover:text-(--text-secondary-dark) text-(--button-text) font-semibold py-2 rounded-lg transition-all duration-300 cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-(--text-muted)">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-(--link-colour) hover:text-(--link-hover) font-medium"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
