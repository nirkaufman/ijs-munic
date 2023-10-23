import {Suspense} from "react";
import Comments from "@/app/blog/[postId]/Comments";

async function fetchPostData(postId: string) {
  const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
  )

  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.')
  }

  return response.json();
}

interface PostDetailsProps {
  params: {
    postId: string
  }
}

export async function generateStaticParams() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => {
        return posts.map((post: any) => {
          return {
            params: {
              postId: `${post.id}`,
            },
          }
        })
      })
}

export default async function PostDetails({params: {postId}}: PostDetailsProps) {
  const post =  await fetchPostData(postId);

  return (
      <div>
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
        <Suspense fallback={<div>Loading comments...</div>}>
          <Comments postId={postId}/>
        </Suspense>
      </div>
  )
}
