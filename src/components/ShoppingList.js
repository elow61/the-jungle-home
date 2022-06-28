import { plantList } from '../datas/flowrList.js'
import PlantItem from './PlantItem.js';
import '../styles/ShoppingList.css';
// import CareScale from './CareScale.js';

function ShoppingList() {
    const categories = plantList.reduce(
        (acc, flower) => acc.includes(flower.category) ? acc : acc.concat(flower.category), []
    )

    return (
        <div className='lmj-shopping-list'>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<PlantItem
						id={plant.id}
						cover={plant.cover}
						name={plant.name}
						water={plant.water}
						light={plant.light}
					/>
				))}
			</ul>
            {/* <ul className='plant-list'>
                {plantList.map((plant) => (
                    <li key={ plant.id } className='plant-item'>
                        {plant.name} {plant.isBestSale && <span>🔥</span>}
                        <CareScale careType='light' scaleValue={plant.light}/>
                        <CareScale careType='wate' scaleValue={plant.water}/>
                    </li>
                ))}
            </ul> */}
        </div>
    )
}
export default ShoppingList;
