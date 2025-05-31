import Footer from "./components/Footer";
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-(--first) ">
      <main className=" flex-grow relative m-0 p-0 min-h-full px-3 py-5 bg-(--first) text-(--fourth) ">
        <Nav />
        <div className=" mt-[80px] ">
          <MainRoutes />

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
