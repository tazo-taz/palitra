import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { post, user } from '../pages/mainPage/interfaces';
import { reduxInitialState } from '../redux';

export default function useConnectUserToPost(post: post) {
    const { users } = useSelector((a: reduxInitialState) => a)
    const [state, setState] = useState<any>()
    useEffect(() => {
        setState(connectUserToPost(post, users))
    }, [post, users])

    return state
}

export const getUserOfPost = (post: post, users: user[]) => users?.find(a => a?.id === post?.userId)

export const connectUserToPost = (post: post, users: user[]) => ({ ...post, userData: getUserOfPost(post, users) })