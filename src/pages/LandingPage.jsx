import Category from "../components/Category/CategorySection";
import TopCourses from "../components/CoursesSection/courses";
import PageHeader from "../components/PageHeader/PageHeader";
import Welcome from "../components/WelcomeSection/Welcome";

const LandingPage = () => {
    return ( 
        <>
         <PageHeader />
         <Welcome />
         <Category />
         <TopCourses />
        </>
     );
}
 
export default LandingPage;