import AuthorImage from '../../../assets/BusinessIntelligence.jpg';
export const BlogAuthor = ()=>{
    const authorTag = [
  "Data Analytics",
  "Business Intelligence",
  "AI Solutions",
  "Process Automation",
  "Digital Transformation",
  "Corporate Training"
]
    return(
        <section>
            <div className="container-fluid">
                <div className="row align-items-stretch">
                    
                    <div className="col-md-4 ">
                        <div style={{backgroundImage:`url(${AuthorImage})`,
                    backgroundSize:"cover", backgroundPosition:"center",
                    minHeight:"300px",backgroundRepeat:"no-repeat", height:"100%",
                    borderRadius:'10px'}}></div>
                    </div>
                    <div className="col-md-8 ">
                        <div>
                            <small className="blogTag "> About The Author</small>
                            <br/>
                            <h2 >
                                Seun Ogunsanya
                            </h2>
                            <br/>
                            <div>
                                <p>
                                A seasoned Data Analytics, Business Intelligence,
                                 and AI Solutions professional dedicated to helping organizations leverage data, artificial intelligence,
                                 and intelligent automation for smarter business decisions and operational efficiency.
                            </p>
                            <br/>
                            <p>
                                With deep expertise across analytics strategy, BI implementation,
                                 process automation, and corporate training, Seun partners with executives and teams to drive measurable 
                                digital transformation — turning complex data ecosystems into clear, actionable business advantage.
                            </p>
                            <br/>
                            <p>
                                Through this blog, Seun shares practical frameworks, strategic insights, and real-world knowledge on the 
                                technologies and methodologies reshaping how modern organizations operate and compete.
                            </p>
                            </div>


                            <br/>

                            <div>
                                {authorTag.map((data,index)=>(
                                    <small key={index} className="authorTag">
                                        {data} 
                                    </small>
                                ))}
                            </div>


                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}