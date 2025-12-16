import ratingSymbol from '../../assets/images/Symbol.png'
import IconNote from '../../assets/icons/note.svg?react'
import IconClock from '../../assets/icons/clock.svg?react'
import IconPerson from '../../assets/icons/person.svg?react'
import IconArrowEnroll from '../../assets/icons/arrow-enroll.svg?react'

const CourseCard = ({name, courseImage, rating, price, lessonsCount, hours, students, instructorImg, instructor}) => {
    return ( 
        <li className="course__card">
            <div className='course__card__category'>
                 <img src={courseImage} alt="course Image" className='course__img'/>
                 <p>Digital Marketing</p>
            </div>
           
            <div className="course__details">
                <div className='course__details__rating__price'>
                    <div>
                        <img src={ratingSymbol} 
                        alt="rating star" className='course__details__rating__img'
                        />
                        <span className='course__details__rating'> {rating}</span>
                    </div>
                    <span aria-label='price' className="course__details__price">
                        ${price.toFixed(2)}
                    </span>           
                </div>

                <h6>{name}</h6>
                <div className="course__lesson__info">
                    <span>
                        <IconNote />
                        <span>Lesson {lessonsCount} </span> 
                        <IconClock />
                    </span>
                    <span>
                        {hours} <IconPerson />
                    </span>
                    <span>
                        Students {students}
                    </span>
                </div>

                <div className='course__instructor'>
                    <div>
                        <img src={instructorImg} alt="instructor image" className='course__instructor__img'/>
                        <span className='course__instructor__name'>{instructor}</span>
                    </div>
                    <a href="/">Enroll <IconArrowEnroll /> </a>
                </div>
            </div>
            
        </li>
     );
}
 
export default CourseCard;