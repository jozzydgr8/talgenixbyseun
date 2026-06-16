
import { FlatButton } from '../../../shared/FlatButton';
import {Blog} from '../../../types';
import { RightOutlined } from '@ant-design/icons';
import { FormatDate } from '../../../shared/FormatDate';
import {UseDataContext} from '../../../context/UseDataContext';
import { NavLink } from 'react-router-dom';

export const BlogFeatured = ()=>{
    const {blogs} = UseDataContext();
    const safeBlogs = blogs ?? [];
    const featuredBlog: Blog | undefined =
    (safeBlogs.find((blog) => blog.featured) ||
    [...safeBlogs].sort(
        (a, b) =>
            new Date(b.createdAt ?? 0).getTime() -
            new Date(a.createdAt ?? 0).getTime()
    )[0]) as Blog | undefined;
    return(
        <section id='blogFeatured'>
            <div className="container-fluid">
                <h2 className="text-center">Featured Article</h2>
               
                    {
                        featuredBlog && (
                            <div className='row'>
                            <div className="col-md-6">
                                <div style={{ backgroundImage: `url(${featuredBlog.featuredImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', borderRadius: '8px', minHeight:"300px" }}></div>
                            </div>
                            <div className="col-md-6">
                                <small className='blogTag'>{featuredBlog.category}</small>
                                
                                <h3>{featuredBlog.title}</h3>
                                <br/>
                                <p>{featuredBlog.excerpt.slice(0,30)}...</p>
                                <div style={{display:'flex', alignItems:'center',gap:'15px', marginBottom:'20px', flexWrap:'wrap'  }}>
                                    <div >
                                        <div style={{background: 'var(--transparent-gold)', color: 'var(--light-gold)', padding: '10px 15px', borderRadius: '80%', display: 'inline-block', fontWeight:'bold', fontSize:'large'}}>so</div>
                                    </div>
                                    <div>
                                        <h6 style={{margin: 0}}>Seun Ogunsanya</h6>
                                        <small style={{color:'gray'}}>{featuredBlog.readingTime} | {FormatDate({ createdAt: featuredBlog.createdAt ?? '' })}</small>    
                                    </div>


                                </div>
                                <div>
                                    <NavLink to={`/blog/${featuredBlog._id}`}>
                                        <FlatButton title='read full article' className='btn borderlessbtn' icon={<RightOutlined/>}/>
                                    </NavLink>
                                </div>
                            </div>
                            </div>
                        )
                    }
                
            </div>
        </section>
    )
}