import { useState, useEffect } from "react";
import { FormatDate } from "../../../../shared/FormatDate"
import { Blog } from "../../../../types"
import { HeartOutlined, HeartFilled, ShareAltOutlined } from '@ant-design/icons';
import { BlogStatHooks } from "../subHooks/BlogStatHooks";


type valueProp ={
    currentBlog:Blog,
   
}

export const MainBlog = ({ currentBlog}:valueProp)=>{
      const [isLiked, setIsLiked] = useState<boolean>(false);
      const {handleLikeToggle} = BlogStatHooks();
      
      useEffect(() => {
        // 1. Get the existing list of liked blog IDs
        const storedLikes = localStorage.getItem('likedBlogs');
        
        if (storedLikes) {
            const likedArray: string[] = JSON.parse(storedLikes);
            // 2. Check if the current blog ID exists in that array
            setIsLiked(likedArray.includes(currentBlog._id));
        }
        }, [currentBlog._id]);
    
    return(
    <section className="single-blog-container">
      <div className="container-fluid">
     

        <h2 className="text-center homeHeader">{currentBlog.title}</h2>
        <br/>
        <div className="row">
            <div className="col-md-6">
                <div style={{ backgroundImage: `url(${currentBlog.featuredImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', borderRadius: '8px', minHeight:"300px" }}></div>
            </div>
            <div className="col-md-6 meta-info">
                <small className='blogTag'>{currentBlog.category}</small>
                <br/>
                <p>{currentBlog.excerpt}</p>
                <div style={{display:'flex', alignItems:'center',gap:'15px', marginBottom:'20px', flexWrap:'wrap'  }}>
                    <div >
                        <div style={{background: 'var(--transparent-gold)', color: 'var(--light-gold)', padding: '10px 15px', borderRadius: '80%', display: 'inline-block', fontWeight:'bold', fontSize:'large'}}>so</div>
                    </div>
                    <div>
                        <h6 style={{margin: 0}}>Seun Ogunsanya</h6>
                        <small style={{color:'gray'}}>{currentBlog.readingTime} | {FormatDate({ createdAt: currentBlog.createdAt ?? '' })}</small>    
                    </div>


                </div>

                {/* Interactive stats section */}
                    <div className="blog-stats" style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '15px' }}>
                        
                        {/* Like Button/Stat */}
                        <span onClick={()=>handleLikeToggle({isLiked, setIsLiked, currentBlog})} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                            {isLiked ? (
                                <HeartFilled style={{ color: '#ff4d4f', fontSize: '18px' }} />
                            ) : (
                                <HeartOutlined style={{ color: '#8c8c8c', fontSize: '18px' }} />
                            )}
                            <span style={{ color: '#595959' }}>{currentBlog.likes || 0} Likes</span>
                        </span>

                        {/* Share Stat */}
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                            <ShareAltOutlined style={{ color: '#1890ff', fontSize: '18px' }} />
                            <span style={{ color: '#595959' }}>{currentBlog.shareCount || 0} Shares</span>
                        </span>

                    </div>


            </div>

            

        </div>
                
            
      </div>
    </section>
    )
}