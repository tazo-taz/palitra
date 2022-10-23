export interface post {
    body: string,
    id: number,
    title: string,
    userId: number,
    userData?: user
}

export interface user {
    id: number,
    name: string,
    email: string,
    username: string
}

export interface component {
    posts: post[],
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    pages: number
}

export interface comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}