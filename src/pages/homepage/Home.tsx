import { Hero } from "./homeComponent/Hero"
import { Portfolio } from "./homeComponent/Portfolio"
import { Services } from "./homeComponent/Services"
import { TrainingConsulting } from "./homeComponent/TrainingConsulting"

export const Home = ()=>{
    return(
        <>
        <Hero/>
        <Services/>
        <Portfolio/>
        <TrainingConsulting/>
        </>
    )
}