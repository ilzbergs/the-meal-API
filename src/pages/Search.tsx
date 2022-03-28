import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import ContentContainer from "../components/ContentContainer/ContentContainer"
import Post from "../components/Interfaces/Interfaces"
import Meals from "../components/Meals/Meals"

const Search: React.FC = () => {
    const [search, setSearch] = useState("")
    const navigate= useNavigate()
    const [meal, setMeal] = useState<any[]>()
    const searchMeal = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget ? e.currentTarget.value : "";
        setSearch(value);
        navigate('/search')
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => { setMeal(data.meals) })

    }


    return (

        <><div>
            <input type="search" placeholder="Search for food..." onChange={(e) => setSearch(e.target.value)} value={search} onKeyPress={searchMeal} />
        </div>
            <div>
                <ContentContainer>
                  {(meal == null) ? <div></div> :
                    meal.map((res: Post) => {
                        return (
                           
                                <Meals key={res.idMeal} data={res} />
                           
                        )
                    }
                    )}   
                </ContentContainer>
               
            </div></>
    )
}

export default Search


