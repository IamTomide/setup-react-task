import servicesImg from '../../assets/images/servicesImg.jpg'
import './benefits.css'
import ServicesInfo from './ServicesInfo'
import FloatingImage from '../floatingImages/FloatingImage';
import textCircle from '../../assets/images/text-circle.png'
import halfSquare from '../../assets/images/half-square.png'
import halfSquare2 from '../../assets/images/half-square2.png'
import servicesDots from '../../assets/images/services-dots.png'

const QualityOfService = () => {
    return ( 
        <section className="services__section container">
             <FloatingImage src={textCircle} style={{top: '380.3px', left: '253.33px', width: "168px", height: '65px'}} />
            <ServicesInfo />
            <div className='services__img'>
                <img src={servicesImg} alt="" className='services__img1'/>
                <img src={halfSquare} alt="" className='yellow__edge' />
                <img src={halfSquare2}  alt="" className='yellow__edge2' />
                <img src={servicesDots}  alt="" className='service__dots' />
            </div>
        </section>
     );
}
 
export default QualityOfService;