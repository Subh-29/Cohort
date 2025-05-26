import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <>
      <div className="m-0 p-0 w-full h-[200vh] px-3 py-5 bg-(--first) text-(--fourth) ">
        <Nav />
        <div className=" mt-[80px] ">
          <MainRoutes />

        </div>
      </div>
    </>
  );
};

export default App;
