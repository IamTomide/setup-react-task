import './welcome.css'
import Introduction from './Introduction';
import bookImg from '../../assets/images/book.png'
import curvedArrow from '../../assets/images/curved-arrow.png'
import instructors from '../../assets/images/people.png'

const Welcome = () => {
    return ( 
        <section className='introduction'>
            <Introduction />
            <img src={bookImg} alt="" className='introduction__book'/>
            <img src={curvedArrow} alt="" className='introduction__arrow'/>
            <p className='introduction__categories'>categories</p>
            <div className='introduction__instructors'>
                <p>200+ <span>Instructor</span></p>
                <img src={instructors} alt="" />
            </div>
        </section>
     );
}
 
export default Welcome;