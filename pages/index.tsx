import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../components/layout/Navigation';
import HomeContent from "../content/home-en.json";

import HeroSection, {HeroContent} from "../components/home/hero/HeroSection";
import Platforms, {HomePlatforms} from "../components/home/Platforms";
import Companies, {HomeCompanies} from "../components/home/Companies";
import Services from "../components/home/Services";
import { ServiceI } from "../types/Services";
import Projects from '../components/home/Projects';
import Contact from '../components/home/Contact';
import Footer from '../components/layout/Footer';
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
  projects: any;
}
interface HomeProps {
  content: HomeContentI;
}
const Home: NextPage<HomeProps> = ({content}) => {
  const { hero, platforms, companies, services, projects }: HomeContentI = content;

  return (
    <div >
      <Head>
        <title>Ecommerce Specialist</title>
        <meta name="description" content="Ecommerce developer specialized in bigcommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='overflow-x-hidden' >  
        <div className='z-0 hidden md:block h-60 w-36 rotate-45 -translate-x-28 	-translate-y-28 	 absolute bg-primary'></div>
        <Navigation />
        <HeroSection hero={hero} />
        <Platforms platforms={platforms} />
        <Companies companies={companies}/>
        <Services services={services} />
        <Projects projects={projects}/>
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const content: HomeContentI = HomeContent;

  return {
    props: {
      content
    }
  }
}
export default Home
