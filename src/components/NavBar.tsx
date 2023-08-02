import React, { FC } from 'react'
import Image from 'next/image'
import styles from '@/styles/NavBar.module.css'

import preachLogo from '../../public/preachLogo.png'
import pfp from '../../public/pfp.jpeg'

const NavBar: FC = () => {
    return (
        <header className={styles.navBar}>
            <div className={styles.navWrapper}>
                <div className={styles.logo}>
                    <Image src={preachLogo} width={50} height={50} alt='logo' />
                    <h1>PreachHub</h1>
                    <span>GAMES</span>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Favourites</li>
                        <li>Trending</li>
                    </ul>
                </nav>
            </div>
            <div className={styles.navOptions}>
                <input type="search" placeholder='Search for games' />
                <Image alt='pfp' src={pfp} width={40} height={40} className={styles.pfp}  />
            </div>
        </header>
    )
}

export default NavBar