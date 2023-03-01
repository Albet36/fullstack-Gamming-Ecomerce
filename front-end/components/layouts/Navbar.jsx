import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogout, setUser } from "../../redux/auth.slice";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state.auth }));
  const [dropdown,setDropdown] = useState();
  const handleDropdown = () => {
    setDropdown(!dropdown);
  }
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("Profile"));
    dispatch(setUser(users));
  },[]);
  const handleLogout = () => {
    dispatch(setLogout());
  };
  const cart = useSelector((state) => state.cart);
console.log(cart);
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <nav className={styles.navbar}>
      <h6 className={styles.logo}>Shop Gamming</h6>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/">Home</Link>
        </li>

        <li className={styles.navlink}>
          <Link href="/shop">Shop</Link>
        </li>
        <li className={styles.navlink}>
        <Link href="/product">Manager Product</Link>
      </li>
        <li className={styles.navlink}>
          <Link href="/cart">
            <a>Cart ({getItemsCount()})</a>
          </Link>
        </li>
        <li className={styles.navlink}>
          {user?.result?._id ? (
            <div className="relative inline-block text-left">
              <button
                type="button"
                className="inline-flex justify-center w-full  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={handleDropdown}
                aria-controls="options-menu">
               <img src={user?.result?.avatar} className="w-10 h-10 rounded-full" />
             
              </button>

              <div
                className={`origin-top-right absolute right-[-20px] mt-2 w-[5rem] text-center rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 ${dropdown ? '' : 'hidden' }`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu">
                <div className="py-1" role="none">
                <a
               href="/profile"
                className="cursor-pointer block  py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Profile
              </a>
                  <p
                    onClick={handleLogout}
                    className="cursor-pointer block  py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    Logout
                  </p>
               
                </div>
              </div>
            </div>
          ) : (
            <a href="/auth" className="cursor-pointer">
              <p>login</p>
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
