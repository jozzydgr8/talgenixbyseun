import { NavLink } from "react-router-dom";
import { FlatButton } from "../../../shared/FlatButton";
import { FormatDate } from "../../../shared/FormatDate";
import { RightOutlined } from '@ant-design/icons';
import { UseDataContext } from '../../../context/UseDataContext';

export const BlogList = () => {
    const { blogs } = UseDataContext();
    
    // Extract unique categories safely
    const categories = Array.from(
        new Set(blogs?.map((blog) => blog.category))
    );

    return (
        <section>
            <div className="container-fluid">
                <h2>Latest Articles</h2>
                <p className="">Actionable insights across analytics, AI, automation & digital transformation</p>

                <div>
                    {categories.map((category, index) => (
                        <div key={index} className="mb-5">
                            <small className="blogTag" style={{ display: 'inline-block', marginBottom: '15px' }}>
                                {category}
                            </small>

                            {/* Bootstrap Row */}
                            <div className="row">
                                {blogs && blogs
                                    .filter(blog => blog.category === category)
                                    .map((blog, i) => (
                                        /* align-items-stretch forces all columns in the row 
                                           to match the height of the tallest card 
                                        */
                                        <div key={i} className="col-md-4 d-flex mb-4 align-items-stretch">
                                            
                                            {/* w-100 forces the card to respect the column's uniform width.
                                               d-flex flex-column allows the interior elements to stretch vertically.
                                            */}
                                            <div className="blogListCard w-100 d-flex flex-column" style={{ height: "100%" }}>
                                                
                                                {/* Card Image */}
                                                <div style={{
                                                    height: "200px",
                                                    width: "100%",
                                                    backgroundImage: `url(${blog.featuredImage})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center",
                                                    flexShrink: 0 // Prevents the image from compressing
                                                }}></div>

                                                {/* Card Body content */}
                                                <div style={{ 
                                                    padding: '20px 30px', 
                                                    display: 'flex', 
                                                    flexDirection: 'column', 
                                                    flexGrow: 1 
                                                }}>
                                                    <h3>{blog.title}</h3>
                                                    <p>{blog.excerpt ? `${blog.excerpt.slice(0, 30)}...` : ''}</p>
                                                    
                                                    {/* marginTop: 'auto' acts as a vertical spacer pushing 
                                                       this entire bottom block to line up evenly across columns 
                                                    */}
                                                    <div style={{ marginTop: 'auto' }}>
                                                        <small style={{ color: 'gray' }}>
                                                            {blog.readingTime} min read
                                                            {blog.createdAt ? ` | ${FormatDate({ createdAt: blog.createdAt })}` : ''}
                                                        </small>

                                                        <br /> <br />
                                                        
                                                        <NavLink to={`/blog/${blog._id}`}>
                                                            <FlatButton 
                                                                title="read more" 
                                                                icon={<RightOutlined />} 
                                                                className="btn borderlessbtn" 
                                                            />
                                                        </NavLink>
                                                    </div>
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
    );
};