import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { allUserDetails } from '../../store/userAction';
import productAction from '../../store/productAction';
import ProductCard from '../../components/ProductComp';
import UserCard from '../../components/UsersComp';



const AdminDashboard = () => {
    const [section, setSection] = useState(JSON.parse(sessionStorage.getItem("section")) || 'dashboard');
    const dispatch = useDispatch();

    const users = useSelector(state => state.user.data);
    const products = useSelector(state => state.product.data);


    console.log("those users: ", users);
    useEffect(() => {
        dispatch(allUserDetails());
        dispatch(productAction());
    }, [dispatch]);

    const stats = {
        users: users?.length || 0,
        products: products?.length || 0
    };


    // const stats = {
    //     users: 1280,
    //     products: 67
    // };

    const chartData = [
        { name: 'Users', value: stats.users },
        { name: 'Products', value: stats.products }
    ];

    return (
        <div className="min-h-full w-full bg-(--bg-dark) text-(--text-light)">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">Admin Panel</h1>
                <div className="flex gap-6">
                    {/* Sidebar Navigation */}
                    <aside className="w-1/4 h-fit bg-(--bg-section) p-4 rounded-xl shadow-lg space-y-4">
                        <button
                            className={`w-full text-left px-4 py-2 rounded-lg hover:bg-(--bg-accent) transition ${section === 'dashboard' && 'bg-(--bg-accent)'}`}
                            onClick={() => {setSection('dashboard'); sessionStorage.setItem("section", JSON.stringify('dashboard')) }}
                        >
                            Dashboard
                        </button>
                        <button
                            className={`w-full text-left px-4 py-2 rounded-lg hover:bg-(--bg-accent) transition ${section === 'products' && 'bg-(--bg-accent)'}`}
                            onClick={() => {setSection('products'); sessionStorage.setItem("section", JSON.stringify('products'))}}
                        >
                            View Products
                        </button>
                        <button
                            className={`w-full text-left px-4 py-2 rounded-lg hover:bg-(--bg-accent) transition ${section === 'users' && 'bg-(--bg-accent)'}`}
                            onClick={() => {setSection('users'); sessionStorage.setItem("section", JSON.stringify('users'))}}
                        >
                            View Users
                        </button>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 bg-(--bg-section) p-6 rounded-xl shadow-xl">
                        {section === 'dashboard' && (
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Stats Overview</h2>
                                <div className="grid grid-cols-2 gap-6 mb-6">
                                    <div className="bg-(--bg-dark) p-4 rounded-lg shadow-md">
                                        <p className="text-lg">Total Users</p>
                                        <p className="text-3xl font-bold">{stats.users}</p>
                                    </div>
                                    <div className="bg-(--bg-dark) p-4 rounded-lg shadow-md">
                                        <p className="text-lg">Total Products</p>
                                        <p className="text-3xl font-bold">{stats.products}</p>
                                    </div>
                                </div>

                                <ResponsiveContainer className={"outline-none"} width="100%" height={300}>
                                    <BarChart data={chartData}>
                                        <XAxis dataKey="name" stroke="#ccc" />
                                        <YAxis stroke="#ccc" />
                                        <Tooltip />
                                        <Bar dataKey="value" fill="var(--bg-light-accent)" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        )}

                        {section === 'products' && (
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">All Products</h2>
                                {/* Replace with real product listing */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {products?.map((product, idx) => (
                                        <ProductCard key={idx} product={product} isAdmin />
                                    ))}
                                </div>

                            </div>
                        )}

                        {section === 'users' && (
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">All Users</h2>
                                {/* Replace with real user listing */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {users?.map((user, idx) => (
                                        <UserCard key={idx} user={user} isAdmin />
                                    ))}
                                </div>

                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;