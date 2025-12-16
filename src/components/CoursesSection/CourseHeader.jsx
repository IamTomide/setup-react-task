import textCircle from '../../assets/images/text-circle.png'
import FloatingImage  from '../floatingImages/FloatingImage'
import Button from '../../components/button/Button'
import Title from '../title/Title'
import './courses.css'

const CourseHeader = () => {
    return ( 
        <>
            <Title title="Top popular course"/>
                <div className='top__courses__info'>
                    <h4>Edunity course student can join with us</h4>
                    <Button prefix={"Load more Course"} variant={"primary"}/>
                </div>
                <FloatingImage
                 src={textCircle} 
                 style={{top: '173px', left: '381.47px', zIndex: '1', width: "168px", height: '65px'}}
                />
        </>
    )
}
 
export default CourseHeader;