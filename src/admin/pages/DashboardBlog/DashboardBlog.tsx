import { useNavigate, useParams } from "react-router-dom"
import { BlogsListed } from "../Dashboard/DashboardComponent/BlogsListed"
import { Popconfirm } from "antd";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import Style from '../../admin.module.css'
import { FlatButton } from "../../../shared/FlatButton"
import { useEffect, useState } from "react";
import { UpdateBlog } from "../../modals/UpdateBlog";
import { UseDataContext } from "../../../context/UseDataContext";
import {BlogHooks} from '../../Hooks/BlogHooks';

const styles = {
    backgroundImage:{
        height:'200px',
        backgroundRepeat:'no-repeat',
        backgroundSize:'contain'
    }
}

export const DashboardBlog = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const {id} = useParams();
    const {blogs} = UseDataContext();
    const {deleteBlog} = BlogHooks();
    const navigate = useNavigate();
    const data = blogs?.find(blog=>blog._id?.toString().toLocaleLowerCase() === id?.toLocaleLowerCase());
   useEffect(() => {
    if (!data) {
        navigate('/admin_jctbdil1$');
    }
}, [data, navigate]);

    const handleCloseModal = () => {
        setIsOpen(false);
      };
    
    return(
        <section>
            <div className="container-fluid">
                <div className={Style.dashboardproductcontainer}>
                    
                    {
                        <>
                       
                        <div>
                            <FlatButton className="btn btnPrimary" onClick={()=>setIsOpen(true)} icon={<EditOutlined/>}/>
                            <div style={{backgroundImage:`url(${data?.featuredImage})`, ...styles.backgroundImage}}></div>
                         
                        </div>
                        {/* //texts descriptions */}
                        <strong>
                            {data?.title} <FlatButton className="btn btnPrimary"  onClick={()=>setIsOpen(true)} icon={<EditOutlined/>}/>
                        </strong><br/>

                        <small>{data?.category} <FlatButton className="btn btnPrimary"  onClick={()=>setIsOpen(true)} icon={<EditOutlined/>}/></small>

                        <p>{data?.excerpt} <FlatButton className="btn btnPrimary"  onClick={()=>setIsOpen(true)} icon={<EditOutlined/>}/></p>

                        <p>{data?.readingTime} <FlatButton className="btn btnPrimary" onClick={()=>setIsOpen(true)} icon={<EditOutlined/>}/></p>
                        
                        <p>{data?.featured ? 'Featured' : 'Not Featured'} <FlatButton className="btn btnPrimary" onClick={()=>setIsOpen(true)} icon={<EditOutlined/>}/></p>
                        <div>
                           <Popconfirm
                            title="Are you sure to delete this blog?"
                            description="This action cannot be undone."
                            onConfirm={() => deleteBlog(data?._id!)}
                            okText="Yes, delete"
                            cancelText="Cancel"
                            >
                            <span>
                                <FlatButton
                                className=" btn btn-danger"
                                title="Delete Blog"
                                icon={<DeleteOutlined />}
                            />
                            </span>
                            </Popconfirm>

                        </div>
                        </>
                    }
                </div>
                <BlogsListed/>
                <UpdateBlog isOpen={isOpen} handleCloseModal={handleCloseModal} 
                title={data?.title!} 
                readingTime={Number(data?.readingTime ?? 0)} 
                _id={data?._id!}
                excerpt={data?.excerpt!}
                category={data?.category!}
                featuredImage={data?.featuredImage!}
                featured={data?.featured ?? false}/>
            </div>
        </section>
    )
}