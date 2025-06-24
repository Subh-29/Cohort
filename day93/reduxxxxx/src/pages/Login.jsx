import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../store/userAction';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
  } = useForm();

  const loginHandler = (formdata) => {
    // console.log(formdata);
    dispatch(userLogin(formdata));
    navigate("/");
    window.location.reload();
    // reset();
  }
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-(--bg-dark)">
      <div className="w-full max-w-md bg-(--bg-section) text-(--text-light) rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-(--text-light) mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit(loginHandler)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-(--text-muted) mb-1">
              Email
            </label>
            <input
              {...register("email", {required: "Email is required"})}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-(--colour-accent) text-(--text-light) placeholder-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--colour-accent-light)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-(--text-muted) mb-1">
              Password
            </label>
            <input
              {...register("password", {required: "Password is required"})}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-(--colour-accent) text-(--text-light) placeholder-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--colour-accent-light)"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-(--text-muted)">
              <input type="checkbox" className="accent-(--colour-accent)" />
              Remember me
            </label>
            <a
              href="#"
              className="text-(--link-colour) hover:text-(--link-hover) transition-colors"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full 
            bg-(--button-primary) hover:bg-(--button-hover) hover:text-(--text-secondary-dark) 
            text-(--button-text) font-semibold py-2 rounded-lg transition-all duration-300 cursor-pointer"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-(--text-muted)">
          Don’t have an account?{" "}
          <Link
            to={"/register"}
            className="text-(--link-colour) hover:text-(--link-hover) font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
