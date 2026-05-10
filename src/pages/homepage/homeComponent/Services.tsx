import {servicesData} from '../../../shared/Data'
export const Services = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <h2 className='homeHeader'>Explore Our Services</h2>
                <br/><br/>
                <div className="row">
                    {servicesData.map((service, index)=>(
                        <div className="col-md-3" key={index}>
                            <div className='serviceCard'>
                                <h3>{service.title}</h3>
                                <br/>
                                <p>{service.description}</p>
                                <br/>
                                
                            </div>
                        </div>
                    ))}
                        
                </div>
                    
            </div>
        </section>
    )
}