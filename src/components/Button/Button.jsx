import IconRight from '../../assets/icons/rightarrow.svg?react';
import './button.css'

const Button = ({prefix, suffix, variant}) => {
    return ( 
        <button className={`btn--${variant}`}>
            <span>{prefix}</span>
            <span>{suffix ? suffix : <IconRight />}</span>
        </button>
     );
}
 
export default Button;