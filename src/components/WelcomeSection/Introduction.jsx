import Button from "../button/button";
import studentImg from '../../assets/images/student.jpg'

const Introduction = () => {
    return ( 
        <div className="welcome">
            <div className="welcome__info">
                <p>Welcome Edunity online courses</p>
                <h1>Achieving your dreams through Education</h1>
                <p>We are experienced in educationl platform and skilled strategies <br />for the success of our online learning.</p>
                <Button prefix={"Find Courses"} variant={"secondary"}/>
            </div>
            <img src={studentImg} alt="" />
        </div>
        
     );
}
 
export default Introduction;