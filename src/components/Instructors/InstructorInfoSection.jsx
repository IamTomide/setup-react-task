import './instructors.css'
import { instructors } from '../../data/instructors'
import arrowIcon from '../../assets/images/purplerightarrow.png'
import shareImg from '../../assets/images/share.png'

const InstructorInfo = () => {
    return (
        <div className="instructors__images">
            {instructors.map((instructor) => {
                return (
                    <div className="instructor">
                        <img src={instructor.instructorImg} alt="instructor image" className='instructor__img'/>
                        <img src={shareImg} alt="instructor image" className='share__img'/>
                        <div className="instructor__info">
                            <div>
                                <h6>{instructor.name}</h6>
                                <p>{instructor.instructorRole}</p>
                            </div>
                            <div className='instructor__info__arrow'>
                                <img src={arrowIcon} alt="mage" />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
 
export default InstructorInfo;