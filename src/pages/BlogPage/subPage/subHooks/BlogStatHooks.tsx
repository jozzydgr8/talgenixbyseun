import { Dispatch, SetStateAction } from "react";
import { Blog } from "../../../../types";
import {toast} from 'react-toastify';
import { UseDataContext } from "../../../../context/UseDataContext";
type valueProps = {
    isLiked: boolean,
    setIsLiked: Dispatch<SetStateAction<boolean>>,
    currentBlog:Blog
}
export const BlogStatHooks = ()=>{
    const {dispatch} = UseDataContext()
    const handleLikeToggle = async  ({isLiked, setIsLiked, currentBlog}:valueProps) => {
  // 1. Get current list or default to an empty array if it doesn't exist yet
  const storedLikes = localStorage.getItem('likedBlogs');
  let likedArray: string[] = storedLikes ? JSON.parse(storedLikes) : [];

  if (isLiked) {
    // UNLIKE LOGIC: Remove the ID from the array
    likedArray = likedArray.filter(id => id !== currentBlog._id);
    setIsLiked(false);
    
    // Optional: Here you would also trigger your backend API to decrease the count
     try{
         const response = await fetch(`https://seunbrandserver.vercel.app/blog/updateLikes/${currentBlog._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                action:'decrement'
            })
            
        });

         if (!response.ok) {
            throw new Error("Failed to update blog");
        }

        const updatedBlog = await response.json();
        dispatch({ type: 'updateBlog', payload: updatedBlog });
        

    }catch(error){
        console.error(error);
        toast.error('error...please try again later!')
    }
  } else {
    // LIKE LOGIC: Add the ID to the array
    likedArray.push(currentBlog._id);
    setIsLiked(true);

    // Optional: Here you would also trigger your backend API to increase the count
    try{
         const response = await fetch(`https://seunbrandserver.vercel.app/blog/updateLikes/${currentBlog._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                action:'increment'
            })
            
        });

         if (!response.ok) {
            throw new Error("Failed to update blog");
        }

        const updatedBlog = await response.json();
        dispatch({ type: 'updateBlog', payload: updatedBlog });
        toast.success('Thanks for liking!');

    }catch(error){
        console.error(error);
        toast.error('error...please try again later!')
    }
  }

  // 3. Save the updated array back to localStorage
  localStorage.setItem('likedBlogs', JSON.stringify(likedArray));
};

// const handleShareToggle = async ()=>{

// }

return { handleLikeToggle}
}