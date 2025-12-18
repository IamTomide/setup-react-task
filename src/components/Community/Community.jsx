import Title from '../title/Title';
import './community.css'
import CommunityStats from './CommunityStats';

const CommunitySection = () => {
    return ( 
        <section className="community">
            <div className="community__testimonial container">
                <CommunityStats />
                <div className="testimonial__heading">
                    <Title title={"Testimonial"}/>
                    <h4>Creating a community of life long learners.</h4>
                </div>   

                <div className="testimonial">
                    <div className="testimonial__container">
                        <div className="testimonial__card">
                        <p className='testimony'>“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”</p>
                        <h6>Kathy Sullivan</h6>
                        <p className='recipient'>CEO at ordian it</p>
                    </div>
                    <div className="testimonial__card">
                        <p className='testimony'>“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”</p>
                        <h6>Kathy Sullivan</h6>
                        <p className='recipient'>CEO at ordian it</p>
                    </div>
                    <div className="testimonial__card">
                        <p className='testimony'>“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”</p>
                        <h6>Elsie Stroud</h6>
                        <p className='recipient'>CEO at Edwards</p>
                    </div>
                    <div className="testimonial__card">
                        <p className='testimony'>“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”</p>
                        <h6>Kathy Sullivan</h6>
                        <p className='recipient'>CEO at ordian it</p>
                    </div>
                </div>
                
               
            </div>  
            </div>



        </section>
     );
}
 
export default CommunitySection;