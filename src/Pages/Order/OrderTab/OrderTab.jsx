import FoodCard from "../../../Components/FoodCard/FoodCard";


const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 md:ml-5 py-5'>
            {
                items.map(item => <FoodCard
                    key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;