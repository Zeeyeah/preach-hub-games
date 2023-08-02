import React from 'react'
import styles from '@/styles/Games.module.css'


 const Filters = () => {
  return (
    <div className={styles.filters}>
        <div className={styles.filtersList}>
            <p>Action</p>
            <p>Adventure</p>
            <p>FPS</p>
            <p>MMORPG</p>
            <p>RPG</p>
            <p>Simulation</p>
            <p>Strategy</p>
            <p>Sports</p>
            <p>Puzzle</p>
            <p>Trivia</p>
            <p>Other</p>
        </div>
        <p>Sort By</p>
    </div>
  )
}


const Games = () => {
  return (
    <section className={styles.games}>
        <Filters />
    </section>
  )
}

export default Games