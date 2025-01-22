'use client';
import styles from './navbar.module.scss'
import logo from '@/assets/icons/logo.svg'
import account from '@/assets/icons/user.svg'
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [visible, setVisible] = useState<Boolean>()
    function showMenu() {

        let nav = document.getElementById('menu')
        visible === false ? setVisible(true) : setVisible(false)
    

}

useEffect(() => {
    if (typeof window !== 'undefined') {
        setVisible(false)
    }

}, [])
return (
    <nav id={styles.nav}>
        <img src={logo.src} alt='' />

        <ul id="menu" className={!visible ? `${styles.closed}` : ''}>
            <li><a href="/equipaments">Equipment</a></li>
            <li><a href="/about-us">About us</a></li>
            <li><a href="/news">Blog</a></li>
            <li><a href="/">Login</a></li>
        </ul>
        <span>
            <img src={account.src} alt="Account" />
            <a href="#">
                Login
            </a>
        </span>

        <button className={!visible ? `${styles.closed}` : ''} onClick={(e) => showMenu()}></button>
    </nav>
)
}