import AboutUs from "../components/About-us/AboutUs";
import QualityOfService from "../components/Benefits/Benefits";
import Category from "../components/Category/CategorySection";
import CommunitySection from "../components/Community/Community";
import TopCourses from "../components/CoursesSection/Courses";
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
        </>
     );
}
 
export default LandingPage;