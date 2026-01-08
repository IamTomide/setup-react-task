import './welcome.css'
import Introduction from './Introduction';
import bookImg from '../../assets/images/book.png'
import curvedArrow from '../../assets/images/curved-arrow.png'
import instructors from '../../assets/images/people.png'
import dotsBg from '../../assets/images/dots-bg.png'
import FloatingImage from '../floatingImages/FloatingImage';

const Welcome = () => {
    return ( 
        <section className='introduction'>
            <div className="intro-container">
                <Introduction />
                <FloatingImage src={bookImg} style={{top: '458.05px', left: '94.64px'}}/>
                <FloatingImage src={curvedArrow} style={{top: '443.81px', left: '551.86px'}}/>
                <FloatingImage src={dotsBg} style={{top: '147.29px', left: '1103.2px', zIndex: '1'}}/>

                <div className='introduction__instructors'>
                    <p>200+ <span>Instructor</span></p>
                    <img src={instructors} alt="instructurs-image" />
                </div>
            
            </div>

        </section>
     );
}
 
export default Welcome;