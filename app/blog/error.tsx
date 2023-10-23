'use client';

interface Props {
    message: string;
    reset: () => void;
}

export default function BlogError({ message, reset }: Props ) {
    return (
        <div>
            <h1>Something went-wrong with blog</h1>
            <p>{message}</p>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
