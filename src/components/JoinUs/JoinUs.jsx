import whiteStar from '../../assets/images/white-star.png'
import Button from '../Button/Button';
import "./join-us.css"



const JoinUs = () => {
    return ( 
        <>
            <div className="join__us">
                <div className="container join__us__info">
                    <p>Join our new session</p>
                    <h3>Call To Enroll Your Child <br /><a href="tel: (+91)958423452">(+91)958423452</a></h3>
                    <img src={whiteStar} alt="A white star" />
                    <br />
                    <Button prefix="Join With Us" variant={"secondary"}/>
                </div>
            </div>
        </>
     );
}
 
export default JoinUs;