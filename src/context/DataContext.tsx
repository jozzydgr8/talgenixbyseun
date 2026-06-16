import { createContext, useReducer } from "react";
import {Blog, SubscriberType} from '../types';

type stateProps = {
    blogs: Blog[] | null;
    loading: boolean;
    subscribers: SubscriberType[] | null;
}

type contextProps = {
  children: React.ReactNode;
};

export type valueProps = stateProps & {
  dispatch: React.Dispatch<actionProps>;
};

type blogProps = {
    type:'getBlogs';
    payload: Blog[];
}

  type loadingProps = {
    type:"loading",
    payload: boolean;
  }

  type addBlogProps = {
    type:'addBlog',
    payload: Blog
  }
  
  type deleteBlogProps ={
  type:'deleteBlog',
  payload:string
}

type updateBlogProps = {
  type: "updateBlog";
  payload: Blog;
};

type subscriberProps ={
    type:'getSubscribers',
    payload: SubscriberType[]
}

type addSubscriberProps = {
  type:'addSubscriber',
  payload: SubscriberType
}

type actionProps = blogProps | loadingProps | deleteBlogProps | updateBlogProps | addBlogProps | subscriberProps | addSubscriberProps;

const initialState: stateProps = {
    blogs: null,
    loading: false,
    subscribers: null
}

export const Context = createContext({} as valueProps);

const reducer = (state: stateProps, action: actionProps): stateProps => {
    switch (action.type) {
        case "getBlogs":
            return { ...state, blogs: action.payload, loading:false };
        case "loading":
            return { ...state, loading: action.payload };
        case "deleteBlog":
            return { ...state, blogs: state.blogs?.filter((blog) => blog._id !== action.payload) ?? null };
        case "updateBlog":
            return { ...state, blogs: state.blogs?.map((blog) => (blog._id === action.payload._id ? action.payload : blog) ) ?? null };
        case "addBlog":
            return { ...state, blogs: [...(state.blogs || []), action.payload] };
        case "getSubscribers":
            return { ...state, subscribers: action.payload };
        case "addSubscriber":
            return { ...state, subscribers: [...(state.subscribers || []), action.payload] };
        default:
            return state;
    }
}


export const DataContext = ({children}:contextProps)=>{
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{...state, dispatch}}>
            {children}
        </Context.Provider>
    )
}