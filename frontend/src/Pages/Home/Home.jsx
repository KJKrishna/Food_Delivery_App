import React from 'react'
import Header from '../../Components/Header/Header'
import './Home.css'
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu.jsx"
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay"
const Home = () => {

    const [category, setCategory] = React.useState("All");
    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category}/>
        </div>
    )
}

export default Home