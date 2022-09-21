import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import Navigation from '../components/layout/Navigation';
import HomeContent from "../content/home-en.json";

import HeroSection, {HeroContent} from "../components/home/hero/HeroSection";
import Platforms, {HomePlatforms} from "../components/home/Platforms";
import Companies, {HomeCompanies} from "../components/home/Companies";
import Services from "../components/home/Services";
import { ServiceI } from "../types/Services";
interface HomeContentI {
  hero: HeroContent;
  platforms: HomePlatforms[];
  companies: HomeCompanies;
  services: {
    title: string;
    design:ServiceI;
    development: ServiceI;
    other: ServiceI;
  };
}
const Home: NextPage = () => {
  const { hero, platforms, companies, services }: HomeContentI = HomeContent;

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{overflowX:"hidden"}}>  
        <div className='z-0 block h-60 w-36 rotate-45 -translate-x-28 	-translate-y-28 	 absolute bg-primary'></div>
        <Navigation />
        <HeroSection hero={hero} />
        <Platforms platforms={platforms} />
        <Companies companies={companies}/>
        <Services services={services} />
      </main>

      <footer>
          footer
      </footer>
    </div>
  )
}

export default Home
