import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ContentContainer from "../components/ContentContainer/ContentContainer"
import Post from "../components/Interfaces/Interfaces";
import Meals from "../components/Meals/Meals";


const AllMeals: React.FC = () => {
    const { categoryName } = useParams()
    const [categoryData, setCategoryData] = useState<Post[] | null>(null)

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
            .then(response => response.json())
            .then(data => setCategoryData(data.meals))
            .catch(
                // handle errors
            )
    }, [categoryName])   

    return (
        <ContentContainer>
                {categoryData ? (
                    categoryData.map((post) => {
                        return (
                          <Meals key={post.idMeal} data={post}/>              
                        )
                    })
                ) : (<div>loading ...</div>)}
            </ContentContainer>
       
    )
}

export default AllMeals

