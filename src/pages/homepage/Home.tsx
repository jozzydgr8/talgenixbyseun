import { Hero } from "./homeComponent/Hero"
import { Portfolio } from "./homeComponent/Portfolio"
import { Services } from "./homeComponent/Services"

export const Home = ()=>{
    return(
        <>
        <Hero/>
        <Services/>
        <Portfolio/>
        </>
    )
}