import { Routes, Route, useLocation } from "react-router-dom";
import ForgotPassword from "./pages/forgotPassword";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import MainPage from "./pages/mainPage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
import { urls } from "./constants"
import { postUrl } from "./constants/urls";
import PostPage from "./pages/postPage";
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import reducer, { setPostsInStore, setUsersInStore } from "./redux"
import useFetch from "./hooks/useFetch";
import { post, user } from "./pages/mainPage/interfaces";
import { useDispatch } from "react-redux"
import { connectUserToPost } from "./hooks/useConnectUserToPost";


function App() {
  const navigate = useNavigate();
  const location = useLocation()
  const { data: postsData }: { data: post[] } = useFetch("https://jsonplaceholder.typicode.com/posts")
  const { data: usersData }: { data: user[] } = useFetch("https://jsonplaceholder.typicode.com/users")
  const dispatch = useDispatch()

  const { signInUrl, signUpUrl, forgotPassword, mainUrl } = urls

  useEffect(() => {
    // if (location.pathname === "/") navigate(signInUrl)
  }, [])

  useEffect(() => {
    let newData: post[] = []
    newData = postsData?.map(post => connectUserToPost(post, usersData))
    setPostsInStore(dispatch, newData)
  }, [postsData])

  useEffect(() => {
    setUsersInStore(dispatch, usersData)
  }, [usersData])


  return (
    <Routes>
      <Route path={mainUrl} element={<MainPage />} />
      <Route path={postUrl} element={<PostPage />} />
      <Route path={signInUrl} element={<SignIn />} />
      <Route path={signUpUrl} element={<SignUp />} />
      <Route path={forgotPassword} element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
