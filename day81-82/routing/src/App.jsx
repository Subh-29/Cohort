import Footer from './components/Footer';
import Nav from './components/Nav';
import MainRoutes from './routes/MainRoutes';





const App = () => {
  return (
    <>
      {/* <div className=' w-full h-full absolute z-[-1] '>
        <img className=' w-full h-full object-cover ' src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div> */}
      <main className=" box-border  relative px-5 py-20 h-full w-full flex flex-col gap-4 bg-[var(--primary)] text-gray-300">
        <div className="nav fixed w-full px-5 top-2 left-0 justify-center flex ">
          <Nav />
        </div>
        <MainRoutes />
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default App;