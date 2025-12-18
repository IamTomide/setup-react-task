import AboutUs from "../components/About-us/AboutUs";
import QualityOfService from "../components/Benefits/Benefits";
import Category from "../components/Category/CategorySection";
import CommunitySection from "../components/Community/Community";
import TopCourses from "../components/CoursesSection/Courses";
import Footer from "../components/Footer/Footer";
import Instructors from "../components/Instructors/Instructors";
import Newsletter from "../components/newsletter/newsletter";
import PageHeader from "../components/PageHeader/PageHeader";
import Welcome from "../components/WelcomeSection/Welcome";

const LandingPage = () => {
    return ( 
        <>
         <PageHeader />
         <Welcome />
         <Category />
         <TopCourses />
         <AboutUs />
         <QualityOfService />
         <CommunitySection />
         <Instructors />
         <Newsletter />
        <Footer />
        </>
     );
}
 
export default LandingPage;