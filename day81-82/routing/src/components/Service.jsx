import { Outlet, useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" flex flex-col gap-5 ">
        <h1 className=" text-6xl text-(--font) " >Services</h1>
        <div className="container flex flex-col gap-10 ">
          <div className="card md:w-100 px-3 py-3 flex flex-col gap-4 bg-(--grayblue) rounded-2xl justify-center items-start   ">
            <div className=" w-full flex justify-between items-center  tracking-wide ">
              <p className=" text-4xl text-[var(--title)]">Service 1</p>
              <button className=" px-3 py-1 text-md bg-green-950 rounded-3xl md:hover:bg-[var(--2)] active:drop-shadow-md cursor-pointer active:scale-90 " onClick={() => {
                navigate(`/service/details/Service 1`)
              }} >Details</button>
            </div>
            <p className=" text-xl text-[var(--font)] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint sit placeat voluptates perspiciatis corporis nulla!</p>
          </div>
          
          <div className="card md:w-100 px-3 py-3 flex flex-col gap-4 bg-(--grayblue) rounded-2xl justify-center items-start   ">
            <div className=" w-full flex justify-between items-center  tracking-wide ">
              <p className=" text-4xl text-[var(--title)]">Service 1</p>
              <button className=" px-3 py-1 text-md bg-green-950 rounded-3xl md:hover:bg-[var(--2)] active:drop-shadow-md cursor-pointer active:scale-90 " onClick={() => {
                navigate(`/service/details/Service 2`)
              }} >Details</button>
            </div>
            <p className=" text-xl text-[var(--font)] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint sit placeat voluptates perspiciatis corporis nulla!</p>
          </div>
          
          <div className="card md:w-100 px-3 py-3 flex flex-col gap-4 bg-(--grayblue) rounded-2xl justify-center items-start   ">
            <div className=" w-full flex justify-between items-center  tracking-wide ">
              <p className=" text-4xl text-[var(--title)]">Service 1</p>
              <button className=" px-3 py-1 text-md bg-green-950 rounded-3xl md:hover:bg-[var(--2)] active:drop-shadow-md cursor-pointer active:scale-90 " onClick={() => {
                navigate(`/service/details/Service 3`)
              }} >Details</button>
            </div>
            <p className=" text-xl text-[var(--font)] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint sit placeat voluptates perspiciatis corporis nulla!</p>
          </div>
          
          <div className="card md:w-100 px-3 py-3 flex flex-col gap-4 bg-(--grayblue) rounded-2xl justify-center items-start   ">
            <div className=" w-full flex justify-between items-center  tracking-wide ">
              <p className=" text-4xl text-[var(--title)]">Service 1</p>
              <button className=" px-3 py-1 text-md bg-green-950 rounded-3xl md:hover:bg-[var(--2)] active:drop-shadow-md cursor-pointer active:scale-90 " onClick={() => {
                navigate(`/service/details/Service 4`)
              }} >Details</button>
            </div>
            <p className=" text-xl text-[var(--font)] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint sit placeat voluptates perspiciatis corporis nulla!</p>
          </div>
          <Outlet />

        </div>
      </div>
    </>
  );
};

export default Service;