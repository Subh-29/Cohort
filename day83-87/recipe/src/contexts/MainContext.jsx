import { createContext, useState } from "react";

export const context = createContext(null);

const MainContext = (props) => {
    const [data, setData] = useState([
    {
        "id": 1,
        "image": "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "Pulao",
        "about": "Aromatic, slightly sweet Bengali pulao made with Gobindo Bhog rice, perfect with rich gravies. Light, flavorful and royal af.",
        "ingredients": [
            { "name": "Gobindo Bhog Chaal", "qty": "300 gm" },
            { "name": "Jol", "qty": "100 ml" },
            { "name": "Ghee", "qty": "2 tbsp" },
            { "name": "Kaju-Kismis", "qty": "50 gm" }
        ]
    },
    {
        "id": 2,
        "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "Mutton Kosha",
        "about": "Slow-cooked spicy mutton that slaps hard. Rich, thick gravy that screams Sunday lunch vibes.",
        "ingredients": [
            { "name": "Mutton", "qty": "500 gm" },
            { "name": "Jol", "qty": "400 ml" },
            { "name": "Gorom Mosla", "qty": "1 packet" },
            { "name": "Onion", "qty": "3 large, sliced" }
        ]
    },
    {
        "id": 3,
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/A_photo_of_popular_Bengali_dish_Sorshe_Ilish_served_traditionally.jpg/1200px-A_photo_of_popular_Bengali_dish_Sorshe_Ilish_served_traditionally.jpg",
        "name": "Shorshe Ilish",
        "about": "Hilsa fish bathed in a mustardy gravy. It's pungent, iconic and 100% a Bengali flex.",
        "ingredients": [
            { "name": "Ilish Machh", "qty": "6 pieces" },
            { "name": "Shorshe Bata", "qty": "4 tbsp" },
            { "name": "Mustard Oil", "qty": "5 tbsp" },
            { "name": "Green Chili", "qty": "4 pcs" }
        ]
    },
    {
        "id": 4,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRixc1hG2_tZfYYVoBCt1WKAK-6CwybkH5rlg&s",
        "name": "Chingri Malai Curry",
        "about": "King-sized prawns in creamy coconut curry. Rich, indulgent, and hella boujee.",
        "ingredients": [
            { "name": "Golda Chingri", "qty": "500 gm" },
            { "name": "Coconut Milk", "qty": "1 cup" },
            { "name": "Onion Paste", "qty": "3 tbsp" },
            { "name": "Ginger Paste", "qty": "2 tsp" }
        ]
    },
    {
        "id": 5,
        "image": "https://www.whiskaffair.com/wp-content/uploads/2020/06/Bengali-Aloo-Posto-2-3.jpg",
        "name": "Aloo Posto",
        "about": "Minimal but mighty. Potatoes cooked with poppy seed paste – soft, nutty, and nostalgic.",
        "ingredients": [
            { "name": "Aloo", "qty": "300 gm" },
            { "name": "Posto Bata", "qty": "4 tbsp" },
            { "name": "Kalo Jeere", "qty": "1 tsp" },
            { "name": "Mustard Oil", "qty": "3 tbsp" }
        ]
    },
    {
        "id": 6,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjo1atFXjoL_qFjSrFBJp7mbUBWTB3icr2pA&s",
        "name": "Begun Bharta",
        "about": "Charred eggplant mashed with mustard oil, green chilies & raw onions. Smoky and bold af.",
        "ingredients": [
            { "name": "Begun (Eggplant)", "qty": "1 large" },
            { "name": "Mustard Oil", "qty": "2 tbsp" },
            { "name": "Onion", "qty": "1 finely chopped" },
            { "name": "Green Chili", "qty": "2 chopped" }
        ]
    },
    {
        "id": 7,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN65juuXBz3w5lt204f4N-AWZ95nGnZmIizw&s",
        "name": "Luchi",
        "about": "Puffy deep-fried maida puris that pair with almost anything, but best with aloor dom 👌.",
        "ingredients": [
            { "name": "Maida", "qty": "300 gm" },
            { "name": "Salt", "qty": "1 tsp" },
            { "name": "Oil", "qty": "for frying" },
            { "name": "Water", "qty": "as needed" }
        ]
    },
    {
        "id": 8,
        "image": "https://www.maggi.in/sites/default/files/srh_recipes/d66f5dd5906c613e1089645e5a5da890.jpg",
        "name": "Aloor Dom",
        "about": "Spicy semi-dry potato curry with a little sweet twist. Always a crowd pleaser with luchi.",
        "ingredients": [
            { "name": "Baby Potatoes", "qty": "500 gm" },
            { "name": "Tomato Puree", "qty": "3 tbsp" },
            { "name": "Ginger Paste", "qty": "2 tsp" },
            { "name": "Sugar", "qty": "1 tsp" }
        ]
    },
    {
        "id": 9,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS04vk6e72FUS312GCeg-P5nVeOakK-Nevsmw&s",
        "name": "Fish Fry",
        "about": "Bhetki fish fillets crumb-coated and deep fried till golden. Crunchy outside, flaky inside.",
        "ingredients": [
            { "name": "Bhetki Fillet", "qty": "4 pieces" },
            { "name": "Breadcrumbs", "qty": "1 cup" },
            { "name": "Egg", "qty": "1 beaten" },
            { "name": "Black Pepper", "qty": "1 tsp" }
        ]
    },
    {
        "id": 10,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtb7T7kHkA_qobyRxoc8jyLEVo4x9fPU2VQ&s",
        "name": "Mishti Doi",
        "about": "Thick, caramelized sweet curd. Pure bliss in a clay pot. Bengal’s OG dessert.",
        "ingredients": [
            { "name": "Milk", "qty": "1 liter" },
            { "name": "Sugar", "qty": "100 gm" },
            { "name": "Curd", "qty": "2 tbsp (as starter)" }
        ]
    }
]
);
    return (
        <context.Provider value={[data, setData]}>
            {props.children}
        </context.Provider>
    );
};

export default MainContext;