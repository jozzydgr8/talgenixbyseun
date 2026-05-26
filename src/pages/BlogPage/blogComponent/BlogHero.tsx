import { FlatButton } from "../../../shared/FlatButton";
import { ArrowRightOutlined, LineChartOutlined, GroupOutlined, BarChartOutlined } from "@ant-design/icons";

export const BlogHero = ()=>{
    return(
        <section id='blogHero'>
            <div className="container-fluid">
                 <div style={{height:'80vh', display:'flex', alignItems:"center", gap:"15px", flexDirection:"column"}}>
                    <span className='homeBadgeParent '> 
                    <span className='homeBadge'></span>
                    Data Analytics & AI Consulting
                    </span>
                   
                
                <h1>
                    Insights on Data, AI & Business Transformation
                </h1>
                <p className='subtopic'>
                    Strategic perspectives, practical frameworks, and actionable knowledge on analytics, artificial intelligence, automation, 
                    and digital transformation — built for executives, professionals, and organizations driving meaningful change.
                </p>

                    <div>
                        <FlatButton title='Explore articles' className='btn btn-xl btnPrimary' icon={<ArrowRightOutlined/>}/>
                        <FlatButton title='Get in touch' className='btn btn-xl btnSecondary'/>
                    </div>
                 </div>



                 <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div className='blogHeroGrade'>
                        <LineChartOutlined className='icon-style'/>
                        <div>
                            <h6>Enterprise Grade</h6>
                            <small >Data Strategy</small>
                        </div>
                    </div>

                    <div className='blogHeroGrade' >
                        <BarChartOutlined className='icon-style'/>
                        <div>
                            <h6>AI-Powered</h6>
                            <small>Insights & Automation</small>
                        </div>
                    </div>

                    <div className='blogHeroGrade'>
                        <GroupOutlined className='icon-style'/>
                        <div>
                            <h6>Executive-Level</h6>
                            <small>Corporate training</small>
                        </div>
                    </div>
                 </div>


            </div>
        </section>
    )
}