import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <p>This is the blog page.</p>
      <Link href={'/'}>go to home</Link>
    </div>
  )
}
