import { NavLink } from "react-router-dom";
import { blogPosts } from "../../../shared/Data"
import { FlatButton } from "../../../shared/FlatButton";
import { FormatDate } from "../../../shared/FormatDate";
import {RightOutlined} from '@ant-design/icons';


const categories = Array.from(
  new Set(blogPosts.map((blog) => blog.category))
);
export const BlogList = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <h2>Latest Articles</h2>
                <p className="">Actionable insights across analytics, AI, automation & digital transformation</p>

                <div>
                    {categories.map((category, index) => (
                        <div key={index}>
                        <small className="blogTag">{category}</small>

                            <div className="row">
                                {blogPosts
                                .filter(blog => blog.category === category)
                                .map((blog, i) => (
                                <div key={i} className="col-md-4 d-flex mb-4">
                                    <div className="blogListCard">
                                        <div style={{height:"200px", width:"100%",
                                            backgroundImage:`url(${blog.featuredImage})`,
                                            backgroundSize:"cover",backgroundPosition:"center"
                                        }}></div>

                                        <div style={{padding:'20px 30px'}}>
                                            <h3>
                                                {blog.title}
                                            </h3>
                                            <p>{blog.excerpt}</p>
                                            
                                        <small style={{color:'gray'}}>{blog.readingTime} | {FormatDate({ createdAt: blog.createdAt })}</small>    

                                        <br/> <br/>
                                        <NavLink to={'#'}><FlatButton title="read more" icon={<RightOutlined/>} className="btn borderlessbtn"/></NavLink>
                                        </div>


                                        
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            

            </div>
        </section>
    )
}