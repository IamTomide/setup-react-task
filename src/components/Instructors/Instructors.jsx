import FloatingImage from '../floatingImages/FloatingImage';
import InstructorInfo from './InstructorInfoSection';
import './instructors.css'
import MeetInstructors from './MeetInstructors';
import cawPrint from '../../assets/images/clawprint.png'
import yellowPrint from '../../assets/images/yellow-print.png'

const Instructors = () => {
    return ( 
        <section className="instructors container">
            <FloatingImage src={cawPrint} style={{top: '78px', left: '-230px'}}/>
            <FloatingImage src={yellowPrint} style={{top: '-42px', left: '386px'}}/>
            <MeetInstructors />
            <InstructorInfo />
        </section>
    );
}
 
export default Instructors;