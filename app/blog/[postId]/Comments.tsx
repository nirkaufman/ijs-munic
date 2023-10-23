function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchCommentsForPost(postId: string): Promise<any> {
  await wait(2000);
  const comments = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  )

  return comments.json();
}

export default async function Comments({postId}: {postId: string}) {
  const comments = await fetchCommentsForPost(postId);

  return (
      <div>
        <h3>Comments:</h3>
        {comments.map((comment: any) => (
            <div key={comment.id}>
              <h4>{comment.email}</h4>
              <p>{comment.body}</p>
            </div>
        ))}
      </div>
  );
}
