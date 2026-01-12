import './about-us.css'
import FloatingImage from "../floatingImages/FloatingImage";
import purpleStar from '../../assets/images/purple-star.png';
import AboutUsImgSection from './AboutUsImages';
import AboutUsInfo from './AboutUsInfo';


const AboutUs = () => {
    return ( 
        <>
            <section className="about__us">
                <FloatingImage src={purpleStar} style={{top: '13px', right: '120px'}}/>
            
                <AboutUsImgSection />
                <AboutUsInfo />
            </section>
        </>
        
     );
}
 
export default AboutUs;