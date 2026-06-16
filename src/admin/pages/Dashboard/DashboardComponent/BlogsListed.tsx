import { NavLink } from "react-router-dom"
import { FlatButton } from "../../../../shared/FlatButton"
import styles from '../../../admin.module.css'
import {PlusOutlined} from '@ant-design/icons'
import Marquee from "react-fast-marquee"
import { UseDataContext } from "../../../../context/UseDataContext"
const Style = {
    blogsbackground:{
        backgroundRepeat:'no-repeat', 
        backgroundSize:'contain',
        height:'100px'
    }
}
export const BlogsListed = ()=>{
    const {blogs} = UseDataContext();
    return(
        <>
        <Marquee speed={50} pauseOnHover={true} gradient={false} >
            
            {
            blogs && blogs.map((blogs, index)=>(
                <div key={index} >
                    <div className={styles.blogscontainer}>
                        <div style={{background:`url(${blogs?.featuredImage})`, ...Style.blogsbackground }} >

                        </div>
                        <strong>
                            {blogs.title}
                        </strong>
                        <div>
                            <NavLink to={`/admin_jctbdil1$/blogs/${blogs._id}`}><FlatButton title="View blog" className="btn btnSecondary"/></NavLink>
                        </div>
                    </div>
                   
                </div>
            ))
            }

        </Marquee>
        {blogs?.length===0 && <small style={{color:"gray"}}>blogss uploaded will be here...</small>}
        
        <div>
            <NavLink to={'/admin_jctbdil1$/blogs/addblogs'}>
            <FlatButton className=" btn btnPrimary" icon={<PlusOutlined/>} title="Add New blogs"/>
                
    
            </NavLink>
        </div>
        </>
    )
}