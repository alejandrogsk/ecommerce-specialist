import { MDXRemote } from 'next-mdx-remote';
import React from 'react'
import { getFileBySlug, getFiles } from '../../data/blogFunctions';

import Layout from '../../components/layout/Layout';
import CustomHead from '../../components/layout/Head';
import Image from 'next/image';
const Post = ({  source, frontmatter }:any ) => {

  return (
    <>
      <CustomHead title={frontmatter.title} description={frontmatter.descritpion} />
      <Layout>
        <main id="post-page">
        <div className="relative">
          <Image src={frontmatter.image.src} alt={frontmatter.image.alt} width="1920px" height="1280px" layout="intrinsic"/>
        </div>
          <MDXRemote {...source} /> 
        </main>
      </Layout>
    </>
  )
}

export async function getStaticProps({params}: any){
  const { source, frontmatter } = await getFileBySlug(params.title);
  
  return {
    props: {
      source: source, 
      frontmatter
    }
  }
}

export async function getStaticPaths(){
  const posts = getFiles();
 
  const paths = posts.map((post: any) => ({ 
    params: { 
      title: post.replace(/\.mdx/, '')
    } 
  }));

  return {
    paths,
    fallback: false
  }
}


export default Post