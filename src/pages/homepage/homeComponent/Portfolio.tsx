import { portfolioData } from "../../../shared/Data"


export const Portfolio = ()=>{
    return(
        <section id="portfolio">
            <div className="container-fluid">
            <div style={{textAlign:'center'}}>
                    
                   <span className='homeBadgeParent '> 
                    <span className='homeBadge'></span>
                    Featured Work
                    </span>
            </div>
                <br/>
                <h2 className='homeHeader'>Projects & Results</h2>
                <p className='subtopic'>
                    My projects in data analytics and automation across different industries
                </p>

                <div className="row">
                {portfolioData.map((project, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                    <div className='portfolioCard d-flex flex-column h-100 animate-up'>
                        <div style={{backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '200px', borderRadius: '8px'}}></div>
                       
                       
                        {/* text text text */}
                        <div style={{padding:'30px'}}>

                           
                        <div>
                           <span className="projectTool" style={{color:`${project.colors.accent}`,background:`${project.colors.secondary}`}}>{project.tool} </span>  
                           <span className="projectDept"style={{color:`${project.colors.text}`,background:`${project.colors.background}`}}>{project.department}</span>
                        </div>
                        <br/>
                        
                        <h3 className='home-subheader'>{project.project}</h3>
                        <p>{project.description}</p>
                        </div>
                        
                    </div>
                    </div>
                ))}
            </div>
            
            </div>
        </section>
    )
}