import React from 'react'
import Header from '../../Components/Header/Header'
import './Home.css'
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu.jsx";
const Home = () => {

    const [category, setCategory] = React.useState("All");
    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
        </div>
    )
}

export default Home