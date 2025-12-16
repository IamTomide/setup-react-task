import Logo from '../../assets/images/logo.svg?react'
import Button from '../Button/Button';

const Navbar = () => {
    return ( 
        <nav>
            <Logo />
            <ul>
                <a><li>Home</li></a>
                <a><li>About Us</li></a>
                <a><li>Courses</li></a>
                <a><li>Pages</li></a>
                <a><li>Blog</li></a>
                <a><li>Contact</li></a>
            </ul>
            <Button prefix={"Create Account"} variant={"primary"}/>
        </nav>
     );
}
 
export default Navbar;