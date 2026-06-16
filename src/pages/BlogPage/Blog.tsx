import { Footer } from "../homepage/homeComponent/Footer"
import { Transform } from "../homepage/homeComponent/Transform"
import { BlogAuthor } from "./blogComponent/BlogAuthor"
import { BlogFeatured } from "./blogComponent/BlogFeatured"
import { BlogHero } from "./blogComponent/BlogHero"
import { BlogList } from "./blogComponent/BlogList"

export const Blog = ()=>{
    return(
        <>
        <BlogHero />
        <BlogFeatured/>
        <BlogList/>
           <BlogAuthor/>
        <Transform/>
        <Footer/>
     
        </>
    )
}