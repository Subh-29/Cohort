import { useEffect } from 'react';
import axios from '../utils/axios'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
     const getProducts = async () => {
        try {

            // const response = await axios.get("https://fakestoreapi.com/products");

            const response = await axios.get("products");       //Base URL used
            console.log(response.data);

            // With Fetch it becomes a bit lengthy to write

            // const strdata = await fetch(
            //     "https://fakestoreapi.com/products"
            // );
            // const jsondata = await strdata.json();
            // console.log(jsondata);
        } catch (error) {
            console.log(error);
        }
        navigate('/about');
    };

    useEffect(() => {
        console.log("Home.jsx mounted");

        return () => {
            console.log("Home.jsx is unmounted");
        }
    });


    return (
        <div onClick={getProducts} className=' cursor-pointer active:scale-90 '>Home</div>
    );
};

export default Home;