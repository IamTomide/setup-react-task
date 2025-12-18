import Button from '../Button/Button'
import Title from '../title/Title';
import textCircle from '../../assets/images/text-circle.png'
import FloatingImage from "../floatingImages/FloatingImage";


const AboutUsInfo = () => {
    return ( 
        <div className="about__us__info">
             <FloatingImage
                src={textCircle} 
                style={{top: '325.7px', right: '393.94px', zIndex: '1', width: "168px", height: '65px'}}
            />
            <Title title={"Our about us"}/>
            <h4>Learn & Grow Your Skills From Anywhere</h4>
            <p className='lorem__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..</p>
            <div className="about__us__info__sub">
                <div>
                    <h6>Flexible Classnamees</h6>
                    <p className='lorem__text2'>Suspendisse ultrice gravida dictum fusce placerat ultricies integer quis auctor elit sed vulputate mi sit.</p>
                </div>
                <div>
                    <h6>Flexible Classnamees</h6>
                    <p className='lorem__text2'>Suspendisse ultrice gravida dictum fusce placerat ultricies integer quis auctor elit sed vulputate mi sit.</p>
                </div>
            </div>
            <Button prefix={"Load more"} variant={"primary"}/>
           </div>
     );
}
 
export default AboutUsInfo;