import './benefits.css'
import PurpleCheck from '../../assets/icons/purple-check.svg?react'

const ServiceCard = ({service}) => {
    return ( 
         <div className="benefits__card__desc">
            <div>
                <PurpleCheck />
                <h6>{service}</h6>
            </div>
            
            <p>Gravida dictum fusce placerat ultricies integer</p>
        </div>
     );
}
 
export default ServiceCard;