import React from 'react'
import styles from '@/styles/Game.module.css'
import axios from 'axios'
import { Layout } from '@/components/Layout'
import { NextPage } from 'next'


interface GameProps {
    gameData: any;
}
const Game: NextPage<GameProps> = ({ gameData }) => {

    return (
        <Layout title={gameData?.name} desc={gameData?.description}>
            <main className={styles.game}>
                <section>
                    <div className={styles["screenShots"]}>
                        <div>
                            <img src={gameData?.logoScreenshot?.fullRes} alt="" />
                        </div>
                        {gameData?.screenShots && (
                            <div className={styles["screenShotsSquare"]}>
                                <img src={gameData?.screenshots[0].fullRes} alt="" />
                                <img src={gameData?.screenshots[1].fullRes} alt="" />
                                <img src={gameData?.screenshots[2].fullRes} alt="" />
                            </div>
                        )}

                    </div>
                </section>
                <section className={styles["gameInfo"]}>
                    <img src={gameData?.bannerScreenshot?.fullRes} style={{ width: '100%', filter: 'brightness(0.5)' }} alt="" />
                    <img src={gameData?.squareScreenshot?.fullRes} className={styles["squareScreenshot"]} alt="" />
                    <div>
                        <h1 className={styles["gameName"]}>{gameData?.name}</h1>
                    </div>
                    <div className={styles["ratings"]}>
                        <p>{Math.round(gameData?.percentRecommended)}%<span>Recommended</span></p>
                        <p>{Math.round(gameData?.medianScore)}%<span>Median Score</span></p>
                        <p>{Math.round(gameData?.numReviews)}<span>Reviews</span> </p>
                    </div>
                    <ul>
                        <h3>Genre</h3>
                        {gameData?.Genres.map((genre: any) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                    <ul>
                        <h3>Platforms</h3>
                        {gameData?.Platforms.map((platform: any) => (
                            <li key={platform.id}>{platform.name}</li>
                        ))}
                    </ul>
                    <ul>
                        <h3>Companies</h3>
                        {gameData?.Companies.map((company: any) => (
                            <li key={company.name}>{company.name}</li>
                        ))}
                    </ul>
                    <div className={styles["description"]}>
                        <h3>Description</h3>
                        <p>
                            {gameData?.description}
                        </p>
                    </div>
                    <div className={styles["buttons"]}>
                        <button>Play</button>
                        <button>Download</button>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export async function getStaticProps({ params }: any) {
    const api_key: any = process.env.API_KEY;
    const { id } = params;
    const options = {
        method: 'GET',
        url: `https://opencritic-api.p.rapidapi.com/game/${id}`,
        headers: {
            'X-RapidAPI-Key': api_key,
            'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
        }
    };
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(5000);
    const response = await axios.request(options);
    try {
        const response = await axios.request(options);
        return {
            props: {
                gameData: response.data,
            },
        };
    } catch (error: any) {
        console.error('Error fetching data:', error.message);
        return {
            props: {
                gameData: [],
            },
        };
    }
}
export async function getStaticPaths() {
    try {
        const api_key: any = process.env.API_KEY;
        const options = {
            method: 'GET',
            url: 'https://opencritic-api.p.rapidapi.com/game/hall-of-fame/2020',
            headers: {
                'X-RapidAPI-Key': api_key,
                'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
            }
        };
        const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
        await delay(5000);
        const response = await axios.request(options);
        const gamesData = response.data;
        const gameIds = gamesData.map((game: any) => String(game.id)); // Convert IDs to strings

        const paths = gameIds.map((id: string) => ({
            params: { id },
        }));

        return {
            paths,
            fallback: true, // Set to false if you don't want to support undefined paths
        };
    } catch (error: any) {
        console.error('Error fetching game IDs:', error.message);
        return {
            paths: [],
            fallback: true,
        };
    }
}

export default Game