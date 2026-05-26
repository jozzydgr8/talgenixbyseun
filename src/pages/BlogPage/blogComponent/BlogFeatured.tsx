import {blogPosts} from '../../../shared/Data';
import { FlatButton } from '../../../shared/FlatButton';
import {Blog} from '../../../types';
import { RightOutlined } from '@ant-design/icons';
import { FormatDate } from '../../../shared/FormatDate';

const featuredBlog: Blog | undefined =
  blogPosts.find((blog) => blog.featured) ||
  [...blogPosts].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime()
  )[0];
export const BlogFeatured = ()=>{
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
                                <p>{featuredBlog.excerpt}</p>
                                <div style={{display:'flex', alignItems:'center',gap:'15px', marginBottom:'20px', flexWrap:'wrap'  }}>
                                    <div >
                                        <div style={{background: 'var(--transparent-gold)', color: 'var(--light-gold)', padding: '10px 15px', borderRadius: '80%', display: 'inline-block', fontWeight:'bold', fontSize:'large'}}>so</div>
                                    </div>
                                    <div>
                                        <h6 style={{margin: 0}}>Seun Ogunsanya</h6>
                                        <small style={{color:'gray'}}>{featuredBlog.readingTime} | {FormatDate({ createdAt: featuredBlog.createdAt })}</small>    
                                    </div>


                                </div>
                                <div>
                                    <FlatButton title='read full article' className='btn borderlessbtn' icon={<RightOutlined/>}/>
                                </div>
                            </div>
                            </div>
                        )
                    }
                
            </div>
        </section>
    )
}