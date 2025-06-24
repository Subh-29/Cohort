import MainRoutes from "./routes/MainRoutes";
const App = () => {

  // const data = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  // console.log(data);

  // useEffect(() => {
  //   dispatch(userAction());
  //   dispatch(productAction());
  //   dispatch(commentAction());
  // }, []);

  return (
    <div className="
      bg-(--colour-primary-dark)
      text-(--text-light)
      min-h-full
      min-w-full
      overflow-x-hidden
      pt-17
      pb-5
      px-5
      ">
      {/* <Nav /> */}


      <MainRoutes />

    </div>

  );
};

export default App;