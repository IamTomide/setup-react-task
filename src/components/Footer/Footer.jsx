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
        <>
            <footer>
                <div className="footer__container container">
                    <div className="footer__div footer__logo__div">
                        <img src={footerLogo} alt="" />
                        <p>Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.</p>
                        <div className='footer__socials'>
                            <span><img src={facebookft} alt="" /></span>
                            <span><img src={igft} alt="" /></span>
                            <span><img src={pinterest} alt="" /></span>
                            <span><img src={twitterft} alt="" /></span>
                        </div>
                    </div>
                    <div className='footer__links footer__div'> 
                        <div>
                            <h6>Our Services:</h6>
                            <ul>
                                <li><a>Web developement</a></li>
                                <li><a>UI/UX Design</a></li>
                                <li><a>Management</a></li>
                                <li><a>Digital Marketing</a></li>
                                <li><a>Blog News</a></li>
                            </ul>
                        </div>
                        <div >
                            <h6>Quick Links:</h6>
                            <ul>
                                <li><a>Templates</a></li>
                                <li><a>Blog And Article</a></li>
                                <li><a>Integrations</a></li>
                                <li><a>Webinars</a></li>
                                <li><a>Privacy & Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer__div footer__gallery'>
                        <h6>Gallery</h6>
                        <div className="footer__gallery__frame">
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
           <p className='footer__edunity__link'>Copyright © 2024 <a href="/">edunity</a>|| All Rights Reserved</p>
        </>
     );
}
 
export default Footer;