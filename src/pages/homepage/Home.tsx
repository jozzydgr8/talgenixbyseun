import { Footer } from "./homeComponent/Footer"
import { Hero } from "./homeComponent/Hero"
import { Portfolio } from "./homeComponent/Portfolio"
import { Services } from "./homeComponent/Services"
import { TrainingConsulting } from "./homeComponent/TrainingConsulting"
import { Transform } from "./homeComponent/Transform"

export const Home = ()=>{
    return(
        <>
        <Hero/>
        <Services/>
        <TrainingConsulting/>
         <Portfolio/>
        <Transform/>
        <Footer/>
        </>
    )
}