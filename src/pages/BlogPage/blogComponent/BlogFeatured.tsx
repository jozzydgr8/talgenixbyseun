import {blogPosts} from '../../../shared/Data';
import { FlatButton } from '../../../shared/FlatButton';
import {Blog} from '../../../types';
import { RightOutlined } from '@ant-design/icons';

const featuredBlog: Blog | undefined =
  blogPosts.find((blog) => blog.featured) ||
  [...blogPosts].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime()
  )[0];
export const BlogFeatured = ()=>{
    return(
        <section>
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
                                <p>{featuredBlog.excerpt}</p>
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