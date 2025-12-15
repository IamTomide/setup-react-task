import CategoryCard from './CategoryCard';
import './categorySection.css'
import { categories } from '../../data/categories'
import Title from '../title/Title';

const Category = () => {
    return ( 
        <section className="category">
            <Title title="categories"/>
            <h4>Browse by categories</h4>
            <ul className="category__list">
                {categories.map((category) => {
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