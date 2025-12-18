import Title from '../title/Title';
import './community.css'
import CommunityStats from './CommunityStats';
import Testimonial from './Testimonial';

const CommunitySection = () => {
    return ( 
        <section className="community">
            <div className="community__testimonial container">
                <CommunityStats />
                <div className="testimonial__heading">
                    <Title title={"Testimonial"}/>
                    <h4>Creating a community of life long learners.</h4>
                </div>   
                 <Testimonial />
            </div>
        </section>
     );
}
 
export default CommunitySection;