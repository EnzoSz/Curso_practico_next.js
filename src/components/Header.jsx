import React, { useContext } from "react";
import Link from "next/link.js";
import Image from "next/image.js";
import Menu from '../components/Menu.jsx';
import menu from '../assets/icons/icon_menu.svg';
import logo from '../assets/logos/logo_yard_sale.svg'
import AppContext from "../context/AppContext.js";
import MyOrder from '../containers/MyOrder.jsx';
import shoppingCart from '../assets/icons/icon_shopping_cart.svg'
import styles from '../styles/Header.module.scss';

const Header = () => {
    const { state, toggleOrder, toggleMenu } = useContext(AppContext);
    return (
            <>
                <nav className={styles.nav}>
                    <Image src={menu} alt="menu" className={styles['menu']} />
                    <div className={styles['navbar-left']}>
                        <Link className={styles['nav-logo']} href="/">
                            <Image src={logo} alt="logo"/>
                        </Link>
                        <ul>
                            <li>
                                <a href="/">All</a>
                            </li>
                            <li>
                                <a href="/">Clothes</a>
                            </li>
                            <li>
                                <a href="/">Electronics</a>
                            </li>
                            <li>
                                <a href="/">Furnitures</a>
                            </li>
                            <li>
                                <a href="/">Toys</a>
                            </li>
                            <li>
                                <a href="/">Others</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles['navbar-right'] }>
                        <ul>
                            <li className={`${styles['more-clickable-area']} ${styles['navbar-email']} ${styles.pointer}`} onClick={() => toggleMenu()}>
                                platzi@example.com
                            </li>
                            <li
                                className={styles['navbar-shopping-cart']}
                                onClick={() => toggleOrder()}
                            >
                                <Image className={`${styles['more-clickable-area']} ${styles.pointer}`} src={shoppingCart} alt="shopping cart" />
                                {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                            </li>
                        </ul>
                    </div>
                    {state.menuIsOpen && <Menu />}
                </nav>
                {state.orderIsOpen && <MyOrder />}
            </>
        );
}
export default Header;