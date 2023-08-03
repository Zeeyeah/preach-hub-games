import React from 'react'
import styles from '@/styles/HeroSection.module.css'
import Image from 'next/image'

// Images
import lastOfUs from '../../public/lastofus.png'
import genshin from '../../public/genshin.png'
import kratos from '../../public/kratos.png'
import eldenring from '../../public/eldenring.jpeg'

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
        <div className={styles.heroGrid1}>
            <div></div>
            <Image src={lastOfUs} alt='lastOfUs' />
            <div>
                <h3>SALE</h3>
                <h1>50%</h1>
                <h4>OFF ON POPULAR GAMES</h4>
            </div>
        </div>
        <div className={styles.heroGrid2}>
            <Image src={genshin} alt='genshin' />
            <h1>FREE <br /> TO <br /> PLAY <br /> GAMES</h1>
        </div>
        <div className={styles.heroGrid3}>
            <div>
                <Image src={kratos} alt='kratos' />
            </div>
            <div>
                <Image src={eldenring} style={{objectFit: 'cover'}} fill={true} alt='eldenring' />
            </div>
        </div>
    </section>
  )
}

export default HeroSection