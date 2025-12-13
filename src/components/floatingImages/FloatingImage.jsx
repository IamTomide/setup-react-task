import './floating.css'

const FloatingImage = ({src, style}) => {
    return ( 
        <img src={src} className="floating" alt="floating design" style={style}/>
     );
}
 
export default FloatingImage;