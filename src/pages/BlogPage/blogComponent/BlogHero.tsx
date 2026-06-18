import { FlatButton } from "../../../shared/FlatButton";
import { RightOutlined, LineChartOutlined, GroupOutlined, BarChartOutlined } from "@ant-design/icons";

export const BlogHero = ()=>{
    return(
        <section id='blogHero'>
            <div className="container-fluid">
                 <div style={{textAlign:'center'}}>
                    {/* <span className='homeBadgeParent '> 
                    <span className='homeBadge'></span>
                    Data Analytics & AI Consulting
                    </span> */}
                   
                
                <h1 style={{marginTop:'30px'}}>
                    Insights on Data, AI & Business Transformation
                </h1>
                <p className='subtopic'>
                   Strategic insights and practical frameworks on analytics, AI, automation, and digital transformation for leaders and organizations.
                </p>
                <br/>

                    <div>
                        <FlatButton title='Explore articles' className='btn btn-xl btnPrimary' icon={<RightOutlined/>}/>
                        <FlatButton title='Get in touch' className='btn btn-xl btnSecondary'/>
                    </div>
                 </div>
                 <br/><br/>



                 <div className="blogHeroWrapper">
                    <div className='blogHeroGrade'>
                        <LineChartOutlined className='icon-style'/>
                        <div>
                        <h6>Enterprise Grade</h6>
                        <small>Data Strategy</small>
                        </div>
                    </div>

                    <div className='blogHeroGrade'>
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