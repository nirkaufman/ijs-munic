import Link from "next/link";

export default function Home() {
  const obj = {};
  return (
      <>
       <h1>IJS Munich - NextJS workshop</h1>
       <h2>https://github.com/nirkaufman/ijs-munic</h2>
       <Link href="/blog/nir">go to blog</Link>
     </>
  )
}

