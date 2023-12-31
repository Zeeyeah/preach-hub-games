import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Layout } from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import Games from '@/components/Games';
import axios from 'axios';
import { env } from 'process';

const inter = Inter({ subsets: ['latin'] });

// Define the type for the Game object (if not already defined)
// Replace this with the actual type definition for your Game object
interface Game {
  name: string;
  // Add other properties if available
}

interface HomeProps {
  popularGames: Game[];
}

const Home: React.FC<HomeProps> = ({ popularGames }) => {
  return (
    <Layout title="PreachHub Games" desc=''>
      <Head>
        <title>PreachHub Games</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <Games games={popularGames} />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const api_key: any = process.env.API_KEY;
  const options = {
  method: 'GET',
  url: 'https://opencritic-api.p.rapidapi.com/game/hall-of-fame/2020',
  headers: {
    'X-RapidAPI-Key': api_key,
    'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
  }
};
  const response = await axios.request(options);
  try {
    const response = await axios.request(options);
    return {
      props: {
        popularGames: response.data,
      },
    };
  } catch (error:any) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        popularGames: [],
      },
    };
  }
}
