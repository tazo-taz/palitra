import { comment, post } from "../../../pages/mainPage/interfaces";

export interface component {
    post: post,
    comments: comment[],
    show: boolean,
    setShow: Function,
    postRef: any
}