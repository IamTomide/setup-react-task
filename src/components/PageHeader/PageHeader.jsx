import './header.css'
import Navbar from './NavList';
import PageBanner from './PageBanner';

const PageHeader = () => {
    return ( 
        <header>
            <PageBanner />
            <Navbar />
        </header>
     );
}
 
export default PageHeader;