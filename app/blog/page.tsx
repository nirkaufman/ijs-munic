import Link from "next/link";
import {fetchPosts} from "@/services/posts";


export const revalidate = 10; // seconds

// best practice to create a function to fetch data above the component
// considered to be more "clean" and "readable"

// async components are not supported in client-side React
export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post: any) => (
        <div key={post.id}>
          <Link href={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  )
}
