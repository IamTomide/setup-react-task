import Title from '../title/Title'
import wavyLines from '../../assets/images/wavy-lines.png'
import './benefits.css'
import ServiceCard from './ServicesCard';

const ServicesInfo = () => {
    return ( 
        <div className='services__info'>
            <div className="services__info__heading">
                <Title title={"Why choose us"}/>
                <img src={wavyLines} alt="wavylines" className='wavy__lines'/>
            </div>
            <h4>Creating a community of life long learners.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..</p>
            <div className="services__list">
                <ServiceCard service={"World ClassName Trainers"}/>
                <ServiceCard service={"Easy Learning"}/>
                <ServiceCard service={"Flexible"}/>
                <ServiceCard service={"Affordable Price"}/>
            </div>
          

        </div>
     );
}
 
export default ServicesInfo;