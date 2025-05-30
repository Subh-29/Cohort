import { createContext, useState } from "react";

export const context = createContext(null);

const MainContext = (props) => {
    const [data, setData] = useState([
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Pulao",
            about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam est tenetur repellat, nihil recusandae excepturi rerum at quos debitis. Aut corporis voluptates, qui ad impedit eos obcaecati neque ratione iusto eaque? Necessitatibus sit illo officiis officia sint ut, totam velit",
            ingredients: [
                {
                    name: "Gobindo Bhog Chaal",
                    qty: "300 gm"
                },
                {
                    name: "Jol",
                    qty: "100 ml"
                }
            ]
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1701579231349-d7459c40919d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Mutton Kosha",
            about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam est tenetur repellat, nihil recusandae excepturi rerum at quos debitis. Aut corporis voluptates, qui ad impedit eos obcaecati neque ratione iusto eaque? Necessitatibus sit illo officiis officia sint ut, totam velit",
            ingredients: [
                {
                    name: "Mutton",
                    qty: "500 gm"
                },
                {
                    name: "Jol",
                    qty: "400 ml"
                },
                {
                    name: "Gorom Mosla",
                    qty: "1 packet"
                }
            ]
        }
    ]);
    return (
        <context.Provider value={[data, setData]}>
            {props.children}
        </context.Provider>
    );
};

export default MainContext;