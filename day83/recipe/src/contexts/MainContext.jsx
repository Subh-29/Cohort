import { createContext, useState } from "react";

export const context = createContext(null);

const MainContext = (props) => {
    const [data, setData] = useState([
    {
        id: 1,
        name: "Pulao",
        ingridients: [
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
        name: "Mutton Kosha",
        ingridients: [
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