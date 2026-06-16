import {useEffect} from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./pages/homepage/Home";
import { Blog } from "./pages/BlogPage/Blog";
import './pages/BlogPage/blog.css';
import { UseDataContext } from "./context/UseDataContext";
import { Loading } from './shared/Loading';
import { UseAuthContext } from './context/UseAuthContext';
import { AdminLayout } from './admin/AdminLayout';
import { ProtectedRoutes } from './shared/ProtectedRoutes';
import { Dashboard } from './admin/pages/Dashboard/Dashboard';
import { GuestRoutes } from './shared/GuestRoutes';
import Session from './admin/pages/Session';
import { ToastContainer } from 'react-toastify';
import { DashboardBlog } from './admin/pages/DashboardBlog/DashboardBlog';
import { AddBlog } from './admin/pages/DashboardBlog/AddBlog';
import { SingleBlogPage } from './pages/BlogPage/subPage/SingleBlogPage';

function App() {
  const {dispatch, loading} = UseDataContext();
  const {dispatch:handle, loading:authLoading, user} = UseAuthContext();

  //useeffect to fetch blogs from the backend and dispatch to the context
  useEffect(()=>{
    dispatch({type:"loading", payload:true});
    const fetchData = async ()=>{
      try{
        const response = await fetch('https://seunbrandserver.vercel.app/blog');
        if(!response.ok){
          throw new Error('Failed to fetch data');
        }
        const json = await response.json();
        console.log('blog', json);
        dispatch({type:"getBlogs", payload:json});
      }catch(error){
        console.error('Error fetching data:', error);
      }finally{
        dispatch({type:"loading", payload:false});
      }

    }

    fetchData();
  },[dispatch]);


  //useffect for authentication
useEffect(() => {
  handle({ type: 'loading', payload: true });

  const data = localStorage.getItem('user');
  if (data) {
    try {
      const parsed = JSON.parse(data);
      const now = new Date().getTime();
      const expiryDays = 3;
      const expiryTime = expiryDays * 24 * 60 * 60 * 1000; // days to ms

      if (now - parsed.savedAt < expiryTime) {
        // Not expired
        handle({ type: 'getUser', payload: parsed.user });
      } else {
        // Expired
        localStorage.removeItem('user');
      }
    } catch (e) {
      console.error('Failed to parse user data:', e);
      localStorage.removeItem('user');
    }
  }

  handle({ type: 'loading', payload: false });
}, [handle]);

//useEffect to fetch subscribers
useEffect(()=>{
  const fetchSubscribers = async()=>{
    if(!user){
      return handle({type:"loading", payload:false})
    }
    try{
      const response = await fetch('https://seunbrandserver.vercel.app/subscribe',{
      headers:{
        'Authorization': `Bearer ${user?.token}`
      }
    })
    if(!response.ok){
      throw Error('an error occured')
    }
    const json = await response.json();
    dispatch({type:'getSubscribers', payload:json})
    }catch(error){
      console.error(error)
    }
  }
  fetchSubscribers();
},[user, handle, dispatch]);

  if(loading || authLoading){
    return <Loading/>
  }
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='blog' element={<Outlet/>} >
        <Route index element={<Blog/>}/>
        <Route path=':id' element={<SingleBlogPage/>}/>
      </Route>
    </Route>
    
    <Route path='/admin_jctbdil1$' element={<AdminLayout/>}>
      <Route index element={<ProtectedRoutes user={user}><Dashboard/></ProtectedRoutes>}/>
      <Route path='blogs' element={<ProtectedRoutes user={user}><Outlet/></ProtectedRoutes>}>
        {/* <Route path='addproduct' element={<AddProduct/>}/> */}
        <Route path=':id' element={<DashboardBlog/>}/>
        <Route path='addblogs' element={<ProtectedRoutes user={user}><AddBlog/></ProtectedRoutes>}/>
      </Route>
        <Route path='session' element={<GuestRoutes user={user}><Session/></GuestRoutes>}/>
    </Route>
    </>
  ));

  return (
    <div className="App">
      <RouterProvider router={router}/>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
