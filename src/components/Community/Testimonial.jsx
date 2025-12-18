import quotes from '../../assets/images/quotes.png'

const Testimonial = () => {
    return ( 
         <div className="testimonial">
                    <div className="testimonial__container">
                        <div className="testimonial__card">
                        <img src={quotes} alt="" className='quotes'/>
                        <p className='testimony'>“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”</p>
                        <h6>Kathy Sullivan</h6>
                        <p className='recipient'>CEO at ordian it</p>
                    </div>
                    <div className="testimonial__card">
                        <img src={quotes} alt="" className='quotes'/>
                        <p className='testimony'>“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”</p>
                        <h6>Kathy Sullivan</h6>
                        <p className='recipient'>CEO at ordian it</p>
                    </div>
                    <div className="testimonial__card">
                        <img src={quotes} alt="" className='quotes'/>
                        <p className='testimony'>“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”</p>
                        <h6>Elsie Stroud</h6>
                        <p className='recipient'>CEO at Edwards</p>
                    </div>
                    <div className="testimonial__card">
                        <img src={quotes} alt="" className='quotes'/>
                        <p className='testimony'>“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”</p>
                        <h6>Kathy Sullivan</h6>
                        <p className='recipient'>CEO at ordian it</p>
                    </div>
                </div>
            </div>
     );
}
 
export default Testimonial;