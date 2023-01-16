import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../components/layout/Navigation';
import HomeContentEn from "../content/home-en.json";
import HomeContentEs from "../content/home-es.json";

import HeroSection, {HeroContent} from "../components/home/hero/HeroSection";
import Platforms, {HomePlatforms} from "../components/home/Platforms";
import Companies, {HomeCompanies} from "../components/home/Companies";
import Services from "../components/home/Services";
import {HeadContent } from "../types/Head";
import { ServiceI } from "../types/Services";
import { ContactI } from "../types/Contact";
//import Projects from '../components/home/Projects';
import Contact from '../components/home/Contact';
import Footer from '../components/layout/Footer';
interface HomeContentI {
  head: HeadContent;
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
  contact: ContactI;
}
interface HomeProps {
  content: HomeContentI;
  locale: string;
}
const Home: NextPage<HomeProps> = ({content,locale}) => {
  const { head, hero, platforms, companies, services, contact }: HomeContentI = content;

  return (
    <div className="max-w-[1500px] mx-auto">
      <Head>
        <title>{head.title}</title>
        <meta name="description" content={head.description} />
      </Head>
      
      <main className='overflow-x-hidden' >  
        <div className='z-0 hidden md:block h-60 w-36 rotate-45 -translate-x-28 	-translate-y-28 	 absolute bg-primary'></div>
        <Navigation  language={locale}/>
        <HeroSection hero={hero} />
        <Platforms platforms={platforms} />
        <Companies companies={companies}/>
        <Services services={services} /> 
        <Contact contact={contact} locale={locale} />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps({locale}:any) {
  let content: any;

  locale === 'es'
  ? content  = HomeContentEs
  : content = HomeContentEn

  return {
    props: {
      content,
      locale
    }
  }
}
export default Home
