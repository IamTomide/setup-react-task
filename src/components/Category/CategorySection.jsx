import CategoryCard from './CategoryCard';
import './categorySection.css'
import { categories } from '../../data/categories'

const Category = () => {
    return ( 
        <section className="category">
            <p className='category__title'>categories</p>
            <h4>Browse by categories</h4>
            <ul className="category__list">
                {categories.map((category) => {
                    // const Icon = category.Icon;

                    return (
                        <CategoryCard 
                            key={category.id}
                            {...category}
                        />)}  
                    )
                }           
            </ul>
        </section>
     );
}
 
export default Category;