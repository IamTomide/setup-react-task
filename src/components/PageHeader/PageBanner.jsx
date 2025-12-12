import IconCall from '../../assets/icons/call.svg?react';
import IconMail from '../../assets/icons/mail.svg?react';
import IconAddress from '../../assets/icons/address.svg?react';
import IconInsta from '../../assets/icons/instagram.svg?react';
import IconFacebook from '../../assets/icons/facebook.svg?react';
import IconLinkedIn from '../../assets/icons/linkedIn.svg?react';
import IconYoutube from '../../assets/icons/youtube.svg?react';

const PageBanner = () => {
    return ( 
        <div className="banner">
            <div className="banner__contact banner--container">
                <div className="banner__contact__info">
                    <div>
                        <IconCall />
                        <span>(00) 875 784 5682</span>
                    </div>
                    <div>
                        <IconMail />
                        <span>pacargoinfo@gmail.com</span>
                    </div>
                    <div>
                        <IconAddress />
                        <span>238, Arimantab, Moska - USA.</span>
                    </div>
                </div>
                <div className="banner__contact__socials">
                    <IconFacebook />
                    <IconInsta />
                    <IconLinkedIn />
                    <IconYoutube />
                </div>
            </div>
            
        </div>
    );
}
 
export default PageBanner;