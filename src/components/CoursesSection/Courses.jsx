import './courses.css'
import { courses } from '../../data/courses'
import CourseCard from './CourseCard'
import CourseHeader from './CourseHeader'

const TopCourses = () => {
    return ( 
        <section className="courses">
            <div className="top__courses">
               <CourseHeader />
                <ul className='courses__list'>
                    {courses.map(course => {
                    return (
                        <CourseCard  key={course.id} {...course}/>
                    )       
                    })}
                </ul>
            </div>
        </section>
     );
}
 
export default TopCourses;