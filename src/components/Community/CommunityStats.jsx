import './community.css'
import Trained from '../../assets/icons/trained-student.svg?react'
import Classes from '../../assets/icons/class.svg?react'
import Rate from '../../assets/icons/rate.svg?react'
import StudentsComm from '../../assets/icons/student-comm.svg?react'

const CommunityStats = () => {
    return ( 
        <div className="community__stats">
            <div className='stats__desc'>
                <div className='stats__desc__icon'>
                    <Trained />
                </div>
                <div>
                    <h6>3K+</h6>
                    <p>Successfully Trained</p>
                </div>
            </div>
            <div className='stats__desc'>
                <div className='stats__desc__icon'>
                    <Classes />
                </div>
                <div>
                    <h6>15K+</h6>
                    <p>Classes Completed</p>
                </div>
            </div>
            <div className='stats__desc'>
                <div className='stats__desc__icon'>
                    <Rate />
                </div>
                <div>
                    <h6>97K+</h6>
                    <p>Satisfaction Rate</p>
                </div>
            </div>
            <div className='stats__desc'>
                <div className='stats__desc__icon'>
                    <StudentsComm />
                </div>
                <div>
                    <h6>102K+</h6>
                    <p>Students Community</p>
                </div>
            </div>
        </div>
     );
}
 
export default CommunityStats;