import { useEffect } from "react";
export const Hero = ()=>{
    useEffect(() => {
    const headerText = document.querySelector('.headerWrite');
    headerText?.classList.add('sectionAnimationLeft');

    const headerButton = document.querySelector('.headerButton');
    headerButton?.classList.add('sectionAnimationUp');

    const headerBadge = document.querySelector('.header-badge');
    headerBadge?.classList.add('sectionAnimationDown');
    }, []);
    return(
        <section>
            <div className="container-fluid">
                <h1 className="headerWrite">Hero</h1>
            </div>
        </section>
    )
}