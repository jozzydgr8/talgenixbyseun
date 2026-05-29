import { BlogFeatured } from "./blogComponent/BlogFeatured"
import { BlogHero } from "./blogComponent/BlogHero"
import { BlogList } from "./blogComponent/BlogList"

export const Blog = ()=>{
    return(
        <>
        <BlogHero />
        <BlogFeatured/>
        <BlogList/>
        </>
    )
}