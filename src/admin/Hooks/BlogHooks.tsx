import type { UploadFile } from "antd/es/upload/interface";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UseDataContext } from "../../context/UseDataContext";
import { UseAuthContext } from "../../context/UseAuthContext";



type postValues = {title: string;
    image: string;
    category: string;
    excerpt: string;
    featured: boolean;
    readingTime: string;}

type postBlog = {
    values: postValues,fileList: UploadFile<any>[],resetForm:()=>void, setLoading:React.Dispatch<React.SetStateAction<boolean>>, setFileList: (value: React.SetStateAction<UploadFile<any>[]> ) => void
}


export const BlogHooks = ()=>{
    const {dispatch} = UseDataContext();
    const {user} = UseAuthContext();
    const navigate = useNavigate();
    const postBlog = async ({values,fileList, setFileList, setLoading, resetForm}:postBlog) => {
            if (!fileList.length) {
              return toast.error("Please select a file to upload");
            }
            setLoading(true);
            const formData = new FormData();
            formData.append("title", values.title);
            formData.append("excerpt", values.excerpt);
            formData.append("featured", values.featured.toString());
            formData.append("category", values.category);
            formData.append("readingTime", values.readingTime);

            formData.append("image", fileList[0].originFileObj as File);

            try {
                    
                    const res = await fetch("https://seunbrandserver.vercel.app/blog", {
                        method: "POST",
                        headers:{
                            'Authorization': `Bearer ${user?.token}`,
                        },
                        body: formData, // FormData object
                    });

                    if (!res.ok) {
                        throw new Error(`Server responded with status ${res.status}`);
                    }

                    const data = await res.json();
                    console.log("blog added:", data);
                    dispatch({type:'addBlog', payload:data});
                    // resetForm();
                    setFileList([]);
                    resetForm();
                    toast.success("blog uploaded successfully!");
                    setLoading(false)
                } catch (error) {
                console.error("Upload failed:", error);
                toast.error("Upload failed");
                
                }finally{
                    setLoading(false)
                }

          }
    
    const deleteBlog = async(_id:string)=>{
        try{
            const response = await fetch(`https://seunbrandserver.vercel.app/blog/${_id}`,{
                method:'delete',
                headers:{
                    'Authorization': `Bearer ${user?.token}`,
                }
            })
            if(!response.ok){
                throw Error('error deleting blog')
            }
            const json = await response.json();
            console.log('delete succesful', json);
            toast.success('blog delete successful');
            dispatch({type:"deleteBlog", payload:_id});
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error(error);
            }
            toast.error('error deleting documents');
        } finally {
            navigate('/admin_jctbdil1$');
        }
    }

    //updateblog
    const blogUpdate = async ({setLoading, values, fileList, title, excerpt, featured, category, _id, readingTime, handleCloseModal}: updateprops) => {
    setLoading(true);
    const formData = new FormData();
    const originalBlog = { title, category, excerpt, featured, readingTime };

    const keys: (keyof typeof originalBlog)[] = ['title', 'category', 'excerpt', 'featured', 'readingTime'];

    for (const key of keys) {
        // Simple abstraction matching string or numeric comparisons securely
        if (values[key] !== undefined && values[key] !== originalBlog[key]) {
            formData.append(key, values[key]);
        }
    }

    if (fileList.length > 0 && fileList[0].originFileObj) {
        formData.append("image", fileList[0].originFileObj as File);
    }

    // Fixed: If no data changes, alert the user and safely turn off loading
    if (!formData.has('image') && formData.keys().next().done) {
        console.log("No changes to submit.");
        setLoading(false); // <--- Crucial fix
        return;
    }

    try {
        const response = await fetch(`https://seunbrandserver.vercel.app/blog/${_id}`, {
            method: "PATCH",
            headers: {
                'Authorization': `Bearer ${user?.token}`,
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error("Failed to update blog");
        }

        const updatedBlog = await response.json();
        dispatch({ type: 'updateBlog', payload: updatedBlog });
        toast.success('Blog updated successfully');
        handleCloseModal();
    } catch (error) {
        console.error("Error updating blog:", error);
        toast.error('Error updating document');
    } finally {
        setLoading(false);
    }
};


          return{postBlog, deleteBlog, blogUpdate}
}

type updateprops={
    values:any,
    title:string, excerpt:string, featured:boolean, category:string, readingTime:number,
    _id:string,
    fileList: UploadFile<any>[],
    handleCloseModal:()=>void,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}