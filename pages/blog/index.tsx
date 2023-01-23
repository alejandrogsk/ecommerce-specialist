import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllFilesMetadata } from "../../data/blogFunctions";

import Layout from "../../components/layout/Layout";
import CustomHead from "../../components/layout/Head";
import Image from "next/image";
const Blog = ({ posts }: any) => {
    return (
        <>
            <CustomHead
                title="Alejandro Suarez - Blog"
                description="Blog para empresas de ecommerce"
            />
            <Layout>
                <main id="blog-page" className="min-h-screen grid grid-cols-1 px-8 md:px-12 lg:px-20 py-40 overflow-x-hidden">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl">Ultimos Articulos</h1>
                    <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                      {posts.map((post: any, index: number) => (
                        <Link href={`/blog/${post.slug}`} key={index}>
                        <div  className="relative cursor-pointer">

                          <div className="relative">
                          <Image src={post.image.src} alt={post.image.alt} width="1920px" height="1280px" layout="intrinsic"/>
                          </div>
                          <h2 className="text-xl text-2xl md:text-3xl mt-4 mb-2">{post.title}</h2>
                          </div>
                          </Link>
                      ))}
                    </div>

                  
                </main>
            </Layout>
        </>
    );
};

export const getStaticProps = async () => {
    const posts = await getAllFilesMetadata();

    return {
        props: {
            posts,
        },
    };
};

export default Blog;
