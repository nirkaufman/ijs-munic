import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <p>This is the blog page.</p>
      <ul>
        <Link href={`/blog/${1}`}><li>post #1</li></Link>
        <Link href={`/blog/${2}`}><li>post #2</li></Link>
        <Link href={`/blog/${3}`}><li>post #3</li></Link>
      </ul>
    </div>
  )
}
