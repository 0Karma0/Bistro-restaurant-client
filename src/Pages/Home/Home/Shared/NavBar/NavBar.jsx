import { Link } from "react-router-dom";
import logo from '../../../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../../../Hooks/useCart";
import useAdmin from "../../../../../Hooks/useAdmin";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        {
            user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
        }
        <li>
            <Link to="/dashboard/cart">
                <button className="btn">
                    <FaShoppingCart className="mr-2"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>
        {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>

    return (
        <div>
            <div className="max-w-screen-xl navbar fixed z-10 bg-opacity-30 bg-black text-white h-28 mb-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img className="md:w-16 w-12" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;