import './instructors.css'
import Button from '../Button/Button';
import Title from '../title/Title';

const MeetInstructors = () => {
    return ( 
        <div className="instructors__info">
            <Title title={"Our Instructor"}/>
            <h4>Meet our expert instructor</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..</p>
            <Button prefix={"Contact us"} variant={"primary"}/>
            <span><Button prefix={"Find Courses"} variant={"secondary"}/></span>
            
        </div>
     );
}
 
export default MeetInstructors;