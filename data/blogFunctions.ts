import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize'
const root = process.cwd();

export const getFiles = () => {
    return fs.readdirSync(path.join(root, 'content/blog'));
}


export const getFileBySlug = async(slug:any) => {
    const mdxSource =  fs.readFileSync(path.join(root, 'content/blog', `${slug}.mdx`), 'utf8');
    const { data, content } =   matter(mdxSource);
    const source =  await serialize(content);

    return {
        source,
        frontmatter: {
            slug,
            ...data,
        }
    }
}

export const getAllFilesMetadata = async() => {
    const files = getFiles();

    return files.reduce((allPosts, postsSlug):any => {
        const mdxSource  = fs.readFileSync(path.join(root, 'content/blog', postsSlug), 'utf8'); 
        const { data } = matter(mdxSource);

        return [{ ...data, slug: postsSlug.replace('.mdx','') }, ...allPosts];
    
    }, []);

}