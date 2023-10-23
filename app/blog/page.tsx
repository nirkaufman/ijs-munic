import Link from "next/link";

async function fetchPosts() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
  return posts.json();
}

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
