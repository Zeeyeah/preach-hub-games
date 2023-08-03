import React from 'react'
import styles from '@/styles/Games.module.css'
import Image from 'next/image'

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
interface GamesProps {
    games: any
}

const Games: React.FC<GamesProps> = ({games}) => {
  return (
    <section className={styles.games}>
        <Filters />
        <div className={styles["gameCardWrapper"]}>
          {games.map((game: any) => (
            <div key={game.id} className={styles.gameCard}>
            <Image src={game.image.original_url} width={300} height={300} alt='' />
            <h1>{game.name}</h1>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Games