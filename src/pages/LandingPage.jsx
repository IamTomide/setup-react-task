import Category from "../components/Category/CategorySection";
import PageHeader from "../components/PageHeader/PageHeader";
import Welcome from "../components/WelcomeSection/Welcome";

const LandingPage = () => {
    return ( 
        <>
         <PageHeader />
         <Welcome />
         <Category />
        </>
     );
}
 
export default LandingPage;