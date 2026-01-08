import FloatingImage from '../floatingImages/FloatingImage';
import './newsletter.css'
import topCurve from '../../assets/images/top-curve.png'
import bottomCurve from '../../assets/images/bottom-curve.png'
import whitePrint from '../../assets/images/white-print.png'
import whiteCawprint from '../../assets/images/white-cawprint.png'

const Newsletter = () => {
    return ( 
        <div className="newsletter">
            <FloatingImage src={topCurve} style={{top: "0", left: "0"}}/>
            <FloatingImage src={bottomCurve} style={{bottom: "0", right: "0"}}/>
            <FloatingImage src={whitePrint} style={{top: "215px", left: "150px"}}/>
            <FloatingImage src={whiteCawprint} style={{top: "15px", right: "150px"}}/>
            <div className="newsletter__div container">
                <div className="newsletter__info">
                    <h5>Join our newsletter</h5>
                    <p>Subscribe our newsletter to get our latest update & news.</p>
                </div>
            
                <div className="newsletter__form">
                    <input type="email" name="email" id="email" placeholder='Enter Your Email' />
                    <p>Subscribe Now</p>
                </div>
            </div>
        </div>

     );
}
 
export default Newsletter;