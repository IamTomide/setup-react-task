const CategoryCard = ({name, Icon, borderColor, bgColor, iconBgColor}) => {
    const IconItem = Icon;
    return ( 
        <li className="category__list__item" style={{backgroundColor: `${bgColor}`}}>
            <div className="icon" style={{border: `dashed 1px ${borderColor}`, backgroundColor: `${iconBgColor}`}}>
                <IconItem />
            </div>
            <p>{name}</p>
        </li>
     );
}
 
export default CategoryCard;