import React, { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import ContentContainer from "../components/ContentContainer/ContentContainer"
import Post from "../components/Interfaces/Interfaces"
import Meals from "../components/Meals/Meals"

export const MyContext = createContext<any>({} as any);

const Search: React.FC = () => {

    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const [meal, setMeal] = useState<any>()
    const searchMeal = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget ? e.currentTarget.value : "";
        setSearch(value)
        navigate(`/search/${value}`)
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
            .then(res => res.json())
            .then(data => { setMeal(data.meals) });
    }

    return (
        <>
            <input
                name="searchInput"
                value={search}
                type="search"
                onChange={searchMeal} />
            <ContentContainer>
                {meal ? (
                    meal.map((res: Post) => {
                        return (
                            <Meals key={res.idMeal} data={res} />
                        )
                    })
                ) : (<div>search error</div>)}
            </ContentContainer>



        </>


    )
}

export default Search


