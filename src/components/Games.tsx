import React from 'react'
import styles from '@/styles/Games.module.css'
import Image from 'next/image'
import Link from 'next/link'

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
            <Link href={`/game/${game.id}`} passHref={true} key={game.id} className={styles.gameCard}>
                <div className={styles["gamePoster"]}>
                    <Image src={`https://img.opencritic.com/${game.images.box.og}`} fill={true} alt='' />
                </div>
                <h2>{Math.round(game.topCriticScore)}<span> % Critic Score</span> </h2>
                <h1>{game.name}</h1>
                <ul>
                </ul>
            </Link>
          ))}
        </div>
    </section>
  )
}

export default Games