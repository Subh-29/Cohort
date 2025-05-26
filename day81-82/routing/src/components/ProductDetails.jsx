import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
    const navigate = useNavigate(null);
    const params = useParams();
    console.log(params);

    // const BackHandler = () => {
    //     navigate('/product')
    // }
    return (
        <>
            <div className="card md:w-100 px-3 py-3 flex flex-col gap-4 bg-(--grayblue) rounded-2xl justify-center items-start   ">
                <div className=" w-full flex justify-between items-center  tracking-wide ">
                    <p className=" text-5xl text-[var(--title)]">{params.name}</p>
                    <button className=" text-nowrap px-3 py-1 text-md bg-green-950 rounded-3xl md:hover:bg-[var(--2)] active:drop-shadow-md cursor-pointer active:scale-90 " onClick={() => navigate(-1)} >Go Back</button>
                </div>
                <p className=" text-xl text-[var(--font)] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora modi fuga explicabo. Ex, quasi? Consequuntur alias temporibus atque iste aliquam eligendi doloribus accusantium minus, nam reprehenderit blanditiis quia inventore labore quibusdam maxime repellendus velit repellat, optio soluta nisi! Enim, esse labore maxime repellendus dignissimos modi molestiae necessitatibus voluptas cum in?</p>
            </div>
        </>
    );
};

export default ProductDetails;