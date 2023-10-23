
interface PostDetailsProps {
    params: {
        postId: string
    }
}

export default function PostDetails({ params: {postId} }: PostDetailsProps) {
    return <h1>Post Details for {postId}</h1>
}
