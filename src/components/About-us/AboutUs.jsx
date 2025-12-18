import './about-us.css'
import FloatingImage from "../floatingImages/FloatingImage";
import purpleStar from '../../assets/images/purple-star.png';
import AboutUsImgSection from './AboutUsImages';
import AboutUsInfo from './AboutUsInfo';
import whiteStar from '../../assets/images/white-star.png'

const AboutUs = () => {
    return ( 
        <>
            <section className="about__us">
                <FloatingImage src={purpleStar} style={{top: '13px', right: '120px'}}/>
            
                <AboutUsImgSection />
                <AboutUsInfo />
            </section>
            <div className="about__us__join">
                    <p>Join our new session</p>
                    <h3>Call To Enroll Your Child</h3>
                    <img src={whiteStar} alt="A white star" />
            </div>
        </>
        
     );
}
 
export default AboutUs;