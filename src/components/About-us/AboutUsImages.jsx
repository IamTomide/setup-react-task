import tallBuilding from '../../assets/images/tall-building.jpg'
import studentsImg from '../../assets/images/about-us-image.jpg'
import dots from '../../assets/images/about-us-dots.png'
import studentSmiling from '../../assets/images/about-us-student-img.jpg'

const AboutUsImgSection = () => {
    return ( 
        <div className="about__us__images">
            <img src={studentSmiling} alt="A lady facing the camera smiling" className='img1'/>
            <img src={tallBuilding} alt="A tall bulding surrounded by trees" className='img2'/>
            <img src={dots} alt="Dots forming square" className='img3'/>
            <img src={studentsImg} alt="A group of students smiling and facing the camera while sitting" className='img4'/>
            <div className="about__us__experiences">
                <p className='years'>8+</p>
                <p className='years_text'>Years of Experiences</p>
            </div>
        </div>
     );
}
 
export default AboutUsImgSection;