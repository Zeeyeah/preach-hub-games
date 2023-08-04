import React from 'react'
import styles from '@/styles/Footer.module.css'
import Image from 'next/image'
//Images
import linkedIn from '../../public/logo-linkedin.svg'
import github from '../../public/logo-github.svg'
import instagram from '../../public/logo-instagram.svg'
import discord from '../../public/logo-discord.svg'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles["copyright"]}>
        <p>&copy; 2023 Ziya. All rights reserved.</p>
        <p>
          Designed and developed with ❤️ by Ziya.
        </p>
      </div>
      <div className={styles["links"]}>
        <a href="https://github.com/zeeyeah" target="_blank" rel="noopener noreferrer">
          <Image src={github} alt="github" width={70} height={70} />
        </a>
        <a href="https://www.linkedin.com/in/ziya-uddin-70622a24b/" target="_blank" rel="noopener noreferrer">
          <Image src={linkedIn} alt="linkedin" width={70} height={70} />
        </a>
        <a href="https://www.instagram.com/zeeyeahaha/" target="_blank" rel="noopener noreferrer">
          <Image src={instagram} alt="instagram" width={70} height={70} />
        </a>
        <a href="discordapp.com/users/807229260497944588" target="_blank" rel="noopener noreferrer">
          <Image src={discord} alt="discord" width={70} height={70} />
        </a>
      </div>
    </footer>
  )
}

export default Footer