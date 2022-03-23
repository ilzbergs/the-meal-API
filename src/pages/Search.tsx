import { useState } from "react"
import ContentContainer from "../components/ContentContainer/ContentContainer"
import Meals from "../components/Meals/Meals"

const Search: React.FC = () => {
    const [search, setSearch] = useState("")
    const [meal, setMeal] = useState()
    const searchMeal = (evt: { key: string }) => {
        if (evt.key === "Enter")
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                .then(response => response.json())
                .then(data => { setMeal(data.meals); setSearch("") })
                

    }
    return (
        <ContentContainer>
            <div>
                <input type="search" placeholder="Search for food..." onChange={(e) => setSearch(e.target.value)} value={search} onKeyPress={searchMeal} />
            </div>
            <div>{
                (meal == null) ? <p>Not found</p> :
                    meal.map((res) => {
                        return (
                            <Meals data={res} />)
                    }

                    )
            }
            </div>

        </ContentContainer>
    )
}

export default Search