export async function fetchPosts(): Promise<any> {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  return posts.json();
}
