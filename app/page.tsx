import Link from "next/link";
import {fetchPosts} from "@/services/posts";

export default async function Home() {
  const posts = await fetchPosts();

  return (
      <>
       <h1>IJS Munich - NextJS workshop</h1>
       <h2>https://github.com/nirkaufman/ijs-munic</h2>
       <Link href="/blog">go to blog</Link>
        {posts.map((post: any) => (
            <div key={post.id}>{post.title}</div>
        ))}
     </>
  )
}

