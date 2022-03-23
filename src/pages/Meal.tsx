import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import Post from "../components/Interfaces/Interfaces";
import MealInfo from "../components/Meal/Meal";


const Meal: React.FC = () => {
    const { mealName } = useParams()
    const [mealData, setMealData] = useState<Post[]| null>(null)

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealName}`)
            .then(response => response.json())
            .then(data => setMealData(data.meals))
            .catch(
                // handle errors
            )
    }, [mealName])

    return (
       
        <ContentContainer>
            {mealData ? (
                mealData.map((post) => {
                    return (
                    <MealInfo key={post.idMeal} data={post}/>
                    )
                })
            ) : (<div>loading problem</div>)}
        </ContentContainer>


    )
}

export default Meal