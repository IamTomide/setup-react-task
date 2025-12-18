import './footer.css'
import footerLogo from '../../assets/images/footer-logo.png'
import facebookft from '../../assets/images/facebook-ft.png'
import igft from '../../assets/images/ig-ft.png'
import pinterest from '../../assets/images/pinterest-ft.png'
import twitterft from '../../assets/images/twitter-ft.png'
import img1 from './../../assets/images/img1.png'
import img2 from './../../assets/images/img2.png'
import img3 from './../../assets/images/img3.png'
import img4 from './../../assets/images/img4.png'
import img5 from './../../assets/images/img5.png'
import img6 from './../../assets/images/img6.png'

const Footer = () => {
    return ( 
        <footer>
            <div className="footer__container container">
                    <div className="footer__logo__div">
                    <img src={footerLogo} alt="" />
                    <p>Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.</p>
                    <div>
                        <img src={facebookft} alt="" />
                        <img src={igft} alt="" />
                        <img src={pinterest} alt="" />
                        <img src={twitterft} alt="" />
                    </div>
                </div>
                <div>
                    <h6>Our Services:</h6>
                    <ul>
                        <li>Web developement</li>
                        <li>UI/UX Design</li>
                        <li>Management</li>
                        <li>Digital Marketing</li>
                        <li>Blog News</li>
                    </ul>
                </div>
                <div>
                    <h6>Quick Links:</h6>
                    <ul>
                        <li>Web developement</li>
                        <li>UI/UX Design</li>
                        <li>Management</li>
                        <li>Digital Marketing</li>
                        <li>Blog News</li>
                    </ul>
                </div>
                <div className=''>
                    <h6>Gallery</h6>
                    <div className="footer__gallery">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                        <img src={img6} alt="" />
                    </div>
                    
                </div>
            </div>
            
        </footer>
     );
}
 
export default Footer;